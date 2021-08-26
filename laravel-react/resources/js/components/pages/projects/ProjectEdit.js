import React, { Component } from 'react'
import { Card, Form, Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import { storeNewProject, updateProject } from '../../../services/ProjectService'

class ProjectEdit extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading : false,
             id : this.props.project.id,
             name : this.props.project.name,
             description : this.props.project.description,
             status : this.props.project.status,
             errors : {}
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = async (e) => {
        e.preventDefault();

        const { history } = this.props;

        this.setState({ isLoading : true })
        
        const postBody = {
            name : this.state.name,
            description : this.state.description,
            status : this.state.status
        }

        const response = await updateProject(this.state.id, postBody);

        if(response.success){
            this.setState({
                id : '',
                name : '',
                description : '',
                status : '',
                isLoading : false
            })

            this.props.onCompleteProjectEdit();
        }else{
            this.setState({                
                isLoading : false,
                errors : response.errors
            })
        }
    }

    render() {
        return (
            <div>
                <hr/>

                <Card className='bg-light'>
                    <Card.Body>
                        <Form onSubmit={ (e) => this.submitForm(e) }>
                            <div className="row">

                                <div className="col-6">
                                    <Form.Group controlId="name">
                                        <Form.Label> Project Name </Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter Project Name" 
                                            name='name'
                                            value={this.state.name}
                                            onChange={ (e) => this.changeInput(e) }
                                        />                                
                                    </Form.Group>

                                    {
                                        this.state.errors.name && (
                                            this.state.errors.name.map( (n) => (
                                                <div className="alert alert-danger text-danger">
                                                    {n}
                                                </div>
                                            ))                                    
                                        )
                                    }
                                </div>

                                <div className="col-6">
                                    <Form.Group controlId="description">
                                        <Form.Label> Project Description </Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter Project Description" 
                                            as="textarea" rows="2" 
                                            name='description' 
                                            value={this.state.description}                                    
                                            onChange={ (e) => this.changeInput(e) }
                                        />   
                                    </Form.Group>

                                    {
                                        this.state.errors.description && (
                                            this.state.errors.description.map( (d) => (
                                                <div className="alert alert-danger text-danger">
                                                    {d}
                                                </div>
                                            ))                                    
                                        )
                                    }
                                </div>

                                <div className="col-6">
                                    <Form.Group controlId="status">
                                        <Form.Label>Project Status</Form.Label>
                                        <Form.Control as="select" name="status" value={this.state.status} onChange={ (e) => this.changeInput(e) } >
                                            <option value={0}>Pending</option>
                                            <option value={1}>Completed</option>
                                        </Form.Control>
                                    </Form.Group>

                                    {
                                        this.state.errors.status && (
                                            this.state.errors.status.map( (s) => (
                                                <div className="alert alert-danger text-danger">
                                                    {s}
                                                </div>
                                            ))                                    
                                        )
                                    }
                                </div>
                            </div>                   
                                                       
                            {
                                this.state.isLoading && (
                                    <Button variant="primary" type="button" disabled>
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only"> Saving...</span>
                                        </Spinner>
                                        <span className='ml-2'> Saving ... </span>
                                    </Button>
                                )
                            }

                            {
                                !this.state.isLoading && (
                                    <Button variant="primary" type="submit">
                                        Save Project
                                    </Button>
                                )
                            }

                        </Form>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default withRouter(ProjectEdit);