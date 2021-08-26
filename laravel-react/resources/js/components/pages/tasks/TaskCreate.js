import React, { Component } from 'react'
import { Card, Form, Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import { storeNewProject } from '../../../services/ProjectService'
import { storeNewTask } from '../../../services/TaskService'

class TaskCreate extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading : false,
             name : '',
             description : '',
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
            project_id : this.props.project_id
        }

        const response = await storeNewTask(postBody);

        if(response.success){
            this.setState({
                name : '',
                description : '',
                isLoading : false
            })
            this.props.onCompleteTaskCreate(response.data);
        }else{
            this.setState({                
                isLoading : false,
                errors : response.errors
            })
        }
    }

    render() {
        return (            
            <div className='mt-3'>
                <hr />
                <Card>
                    <Card.Header className='font-weight-bold'> New Task </Card.Header>
                    <Card.Body>
                        <Form onSubmit={ (e) => this.submitForm(e) }>
                            <div className='row'>
                                <div className='col-6'>
                                    <Form.Group controlId="name">
                                    <Form.Label> Task Title </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Task Title" 
                                        name='name'
                                        value={this.state.name}
                                        onChange={ (e) => this.changeInput(e) }
                                    />                                
                                    </Form.Group>

                                    {
                                        this.state.errors.name && (
                                            this.state.errors.name.map( (n, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {n}
                                                </div>
                                            ))                                    
                                        )
                                    }
                                </div>
                                <div className='col-6'>
                                    <Form.Group controlId="description">
                                    <Form.Label> Task Description </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Task Description" 
                                        as="textarea" 
                                        rows="3" 
                                        name='description' 
                                        value={this.state.description}                                    
                                        onChange={ (e) => this.changeInput(e) }
                                    />   
                                    </Form.Group>

                                    {
                                        this.state.errors.description && (
                                            this.state.errors.description.map( (d, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {d}
                                                </div>
                                            ))                                    
                                        )
                                    }

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
                                </div>                                
                            </div>
                            {
                                !this.state.isLoading && (
                                    <Button variant="primary" type="submit">
                                        Save Task
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

export default withRouter(TaskCreate);