import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button, Badge, Spinner, InputGroup, FormControl, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import TaskCreate from '../tasks/TaskCreate'
import TaskList from '../tasks/TaskList'
import ProjectEdit from './ProjectEdit'

export default class ProjectView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            project : {},
            taskList : [],
            searchTaskList : [],
            isLoading : false,
            toggleAddTask : false,
            toggleEditProject : false
        }
    }

    componentDidMount() {
        this.getProjectDetails();
    }

    getProjectDetails = () => {
        this.setState({ isLoading : true });
        axios.get(`http://localhost/laravel-react/api/projects/${this.props.match.params.id}`).then( (res) => {
            this.setState({
                project : res.data.data,
                taskList : res.data.data.tasks,
                searchTaskList : res.data.data.tasks,
                isLoading : false
            })
        })
    }

    toggleAddTask = () => {
        this.setState({
            toggleAddTask : !this.state.toggleAddTask,
            toggleEditProject : false
        })
    }

    toggleEditProject = () => {
        this.setState({
            toggleEditProject : !this.state.toggleEditProject,
            toggleAddTask : false
        })
    }

    onCompleteTaskCreate = (task) => {
        this.toggleAddTask();
        let tasks = this.state.taskList;
        tasks.unshift(task);
        this.setState({
            taskList : tasks,
            searchTaskList : tasks
        })
    }

    onCompleteProjectEdit = (task) => {
        this.toggleEditProject();
        this.getProjectDetails();
    }

    onEditTask = (task) => {
        this.getProjectDetails();
    }

    onSearchTasks = (e) => {
        const searchText = e.target.value.trim().toLowerCase();

        this.setState({
            isLoading : true
        })

        if(searchText.length > 0){
            const searchData = this.state.taskList.filter( (item) => {
                const itemData = item.name + ' ' + item.description;
                return itemData.trim().toLowerCase().indexOf(searchText) !== -1; 
            })

            this.setState({
                searchTaskList : searchData,
                isLoading : false
            })
        } 
        else{
            this.setState({
                searchTaskList : this.state.taskList,
                isLoading : false
            })
        }
    }
    
    render() {
        return (
            <div>

                <div className='header-part'>
                    <div className='float-left'>
                        {
                            !this.state.toggleEditProject && (
                                <>
                                    <div className='float-left'>
                                        <h2>
                                            {this.state.project.name} <Badge variant="primary" className='ml-1'>{this.state.searchTaskList.length}</Badge> 
                                        </h2> 
                                        <div>{this.state.project.description}</div>
                                    </div>
                                    <div  className='float-left ml-5'>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder=" Search Task ... "
                                                aria-label=" Search Task ... "
                                                aria-describedby="basic-addon2"
                                                onChange={ (e) => this.onSearchTasks(e) }
                                            />
                                        </InputGroup>
                                    </div>
                                    
                                </>
                            )
                        }
                        {
                            this.state.toggleEditProject && (
                                <>
                                    <ProjectEdit project={this.state.project} onCompleteProjectEdit={this.onCompleteProjectEdit} />

                                    <InputGroup className="mt-3">
                                        <FormControl
                                            placeholder=" Search Task ... "
                                            aria-label=" Search Task ... "
                                            aria-describedby="basic-addon2"
                                            onChange={ (e) => this.onSearchTasks(e) }
                                        />
                                    </InputGroup>
                                </>
                            )
                        }
                    </div>
                    
                    <div className='float-right'>
                        <button className={`btn btn-outline-${this.state.project.status === 1? "success" : "info"} mr-2 disabled`}> 
                            { this.state.project.status === 1? <span> ✔ Completed </span> : <span> Pending ... </span> }
                        </button> 
                        <Button className="btn btn-success mr-2" onClick={this.toggleEditProject}> 
                            { !this.state.toggleEditProject && <span> Edit </span> }
                            { this.state.toggleEditProject && <span> Cancel Editing </span> }
                        </Button> 
                        <Button className="btn btn-success mr-2" onClick={this.toggleAddTask}> 
                            { !this.state.toggleAddTask && <span> + Add Task </span> }
                            { this.state.toggleAddTask && <span> Cancel Adding </span> }
                        </Button>                        
                    </div>
                    <div className='clearfix'></div>
                </div>                

                {
                    this.state.toggleAddTask && (
                        <TaskCreate project_id={this.props.match.params.id} onCompleteTaskCreate={this.onCompleteTaskCreate} />
                    )
                }

                <hr/>

                { this.state.isLoading && (
                    <div className="text-center mt-5">
                        <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                )}

                { this.state.searchTaskList.length === 0 && (
                        <Alert variant={"warning"}> No Task found !! Please create one ... </Alert>
                    )
                }

                <TaskList taskList={this.state.searchTaskList} onEditTask={this.onEditTask} />
            </div>
        )
    }
}

