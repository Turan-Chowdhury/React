import React, { Component } from 'react'
import { Card, Form, Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import { registerUser } from '../../../services/AuthService'

class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading : false,
             name : '',
             email : '',
             password : '',
             password_confirmation : '',
             errors : {},

             validated : false
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = async (e) => {

        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        this.setState({
            validated : true
        })
        
        const { history } = this.props;
                    
        const postBody = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password_confirmation : this.state.password_confirmation
        }

        if (form.checkValidity() !== false) {

            e.preventDefault();            

            this.setState({ isLoading : true })

            const response = await registerUser(postBody);

            if(response.success){
                this.setState({
                    name : '',
                    email : '',
                    password : '',
                    password_confirmation : '',
                    isLoading : false,
                    errors : {}
                })
                localStorage.setItem("loginData", JSON.stringify(response));
                //history.push(`${PUBLIC_URL}projects`)
            }else{
                this.setState({                
                    isLoading : false,
                    errors : response.errors
                })
                localStorage.setItem("loginData", null);
            }
        }        
    }

    render() {
        return (
            <div>
                <div className='header-part'>
                    <div className='float-left'>
                        <h2>
                           Sign Up
                        </h2> 
                    </div>
                    <div className='clearfix'></div>
                </div>
                <hr/>

                <Card>
                    <Card.Body>
                        <Form noValidate validated={this.state.validated} onSubmit={ (e) => this.submitForm(e) }>
                            <div className='row'>
                                <div className='col-6'>
                                    <Form.Group controlId="name">
                                        <Form.Label> User Name </Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter User Name" 
                                            name='name'
                                            value={this.state.name}
                                            onChange={ (e) => this.changeInput(e) }
                                            required
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

                                    <Form.Group controlId="password">
                                        <Form.Label> Password </Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Enter Password" 
                                            name='password'
                                            value={this.state.password}
                                            onChange={ (e) => this.changeInput(e) }
                                            required
                                        />  
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please give your password.
                                        </Form.Control.Feedback>                                
                                    </Form.Group>

                                    {
                                        this.state.errors.password && (
                                            this.state.errors.password.map( (p, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {p}
                                                </div>
                                            ))                                    
                                        )
                                    }
                                </div>
                                <div className='col-6'>
                                    <Form.Group controlId="email">
                                        <Form.Label> Email Address </Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter Email Address" 
                                            name='email'
                                            value={this.state.email}
                                            onChange={ (e) => this.changeInput(e) }
                                            required
                                        />  
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please give your email.
                                        </Form.Control.Feedback>                                
                                    </Form.Group>

                                    {
                                        this.state.errors.email && (
                                            this.state.errors.email.map( (e, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {e}
                                                </div>
                                            ))                                    
                                        )
                                    }

                                    <Form.Group controlId="password_confirmation">
                                        <Form.Label> Confirm Password </Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Confirm Password" 
                                            name='password_confirmation'
                                            value={this.state.password_confirmation}
                                            onChange={ (e) => this.changeInput(e) }
                                            required
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please give confirm password.
                                        </Form.Control.Feedback>                                  
                                    </Form.Group>

                                    {
                                        this.state.errors.password_confirmation && (
                                            this.state.errors.password_confirmation.map( (p, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {p}
                                                </div>
                                            ))                                    
                                        )
                                    }
                                </div>
                            </div>
                            

                            {
                                this.state.isLoading && (
                                    <Button variant="success" type="button" disabled>
                                        <Spinner animation="border" role="status">
                                            <span className="sr-only"> Saving...</span>
                                        </Spinner>
                                        <span className='ml-2'> Signing Up ... </span>
                                    </Button>
                                )
                            }

                            {
                                !this.state.isLoading && (
                                    <Button variant="success" type="submit">
                                        Sign Up
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

export default withRouter(Register);
