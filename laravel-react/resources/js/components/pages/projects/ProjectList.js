import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button, Badge, Spinner, InputGroup, FormControl, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import { deleteProject, getProjectList } from '../../../services/ProjectService'

export default class ProjectList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             projectList : [],
             searchProjectList : [],
             isLoading : false
        }
    }

    componentDidMount() {
        this.getProjectLists();
    }

    getProjectLists = async () => {
        this.setState({ isLoading : true });
        const projectList = await getProjectList();
        this.setState({
            projectList : projectList,
            searchProjectList : projectList,
            isLoading : false
        })
    }
    
    deleteProject = async (id) => {
        const response = await deleteProject(id);

        if(response.success){
            this.getProjectLists();
        }else{
            alert("Sorry !! Something went wrong !!")
        }
    }

    onSearchProjects = (e) => {
        const searchText = e.target.value.trim().toLowerCase();

        this.setState({
            isLoading : true
        })

        if(searchText.length > 0){
            const searchData = this.state.projectList.filter( (item) => {
                const itemData = item.name + ' ' + item.description;
                return itemData.trim().toLowerCase().indexOf(searchText) !== -1; 
            })

            this.setState({
                searchProjectList : searchData,
                isLoading : false
            })
        } 
        else{
            this.setState({
                searchProjectList : this.state.projectList,
                isLoading : false
            })
        }
    }

    render() {
        return (
            <div>
                <div className='header-part'>
                    <div className='float-left'>
                        <h2>
                            Project List <Badge variant="primary" className='ml-1'>{this.state.searchProjectList.length}</Badge> 
                        </h2> 
                    </div>
                    <div className='float-left text-center ml-5'>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder=" Search Project ... "
                                aria-label=" Search Project ... "
                                aria-describedby="basic-addon2"
                                onChange={ (e) => this.onSearchProjects(e) }
                            />
                        </InputGroup>
                    </div>
                    <div className='float-right'>
                        <h2>                                                
                            <Link to={`${PUBLIC_URL}projects/create`} className="btn btn-info">
                                + Create New 
                             </Link>                                                      
                        </h2>
                    </div>
                    <div className='clearfix'></div>
                </div>
                <hr/>

                { this.state.isLoading && (
                    <div className="text-center mt-5">
                        <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                )}

                { this.state.searchProjectList.length === 0 && (
                        <Alert variant={"warning"}> No Project found !! Please create one ... </Alert>
                    )
                }

                {
                    this.state.searchProjectList.map((project, index) => (
                        <Card key={index} className='mt-3'>
                            <Card.Header>
                                {project.name}  <Badge variant="primary" className='ml-1'>{project.tasks_count}</Badge>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                {project.description}
                                </Card.Text>
                                <Link to={`${PUBLIC_URL}projects/view/${project.id}`} className='btn btn-primary mr-2'> View & Edit </Link>                                                           
                                <Button variant="danger" className='mr-2' onClick={ () => this.deleteProject(project.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
                </div>
        )
    }
}

