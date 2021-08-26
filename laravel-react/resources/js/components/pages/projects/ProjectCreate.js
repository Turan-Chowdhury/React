import React, { Component } from 'react'
import { Card, Form, Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import { storeNewProject } from '../../../services/ProjectService'

class ProjectCreate extends Component {

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
            description : this.state.description
        }

        const response = await storeNewProject(postBody);

        if(response.success){
            this.setState({
                name : '',
                description : '',
                isLoading : false
            })

            history.push(`${PUBLIC_URL}projects`)
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
                <div className='header-part'>
                    <div className='float-left'>
                        <h2>
                           New Project
                        </h2> 
                    </div>
                    <div className='float-right'>
                        <h2>                            
                            <Link to={`${PUBLIC_URL}projects`} className="btn btn-info">
                                See All Project 
                            </Link>                             
                        </h2>
                    </div>
                    <div className='clearfix'></div>
                </div>
                <hr/>

                <Card>
                    <Card.Body>
                        <Form onSubmit={ (e) => this.submitForm(e) }>
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
                                    this.state.errors.name.map( (n, idx) => (
                                        <div key={idx} className="alert alert-danger text-danger">
                                            {n}
                                        </div>
                                    ))                                    
                                )
                            }

                            <Form.Group controlId="description">
                                <Form.Label> Project Description </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Project Description" 
                                    as="textarea" rows="5" 
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

export default withRouter(ProjectCreate);