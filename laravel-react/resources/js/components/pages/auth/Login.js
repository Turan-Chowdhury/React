import React, { Component } from 'react'
import { Card, Form, Spinner, Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { PUBLIC_URL } from '../../../constants'
import { loginUser } from '../../../services/AuthService'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading : false,
             email : '',
             password : '',
             errors : {},
             errorMessage : '',

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
        });

        const { history } = this.props;
                
        const postBody = {
            email : this.state.email,
            password : this.state.password
        }       

        if (form.checkValidity() !== false) {

            e.preventDefault();
            
            this.setState({ isLoading : true });
            
            const response = await loginUser(postBody);
            //console.log(response);

            if(response.success){
                this.setState({
                    email : '',
                    password : '',
                    isLoading : false,
                    errors : {},
                    errorMessage : ''
                })
                localStorage.setItem("loginData", JSON.stringify(response));
                window.location.href = PUBLIC_URL ;
            }else{
                this.setState({                
                    isLoading : false,
                    errors : response.errors,
                    errorMessage : response.message
                })
                localStorage.setItem("loginData", null);
            }
        }        
    }

    render() {
        return (
            <div>
                <div className='header-part text-center'>
                        <h2>
                           Sign In
                        </h2> 
                </div>   

                <Form noValidate validated={this.state.validated} onSubmit={ (e) => this.submitForm(e) }>
                    <div className='row justify-content-center'>
                        <div className='col-8'>  
                            <Card>
                                <Card.Body>        

                                    { this.state.errorMessage.length > 0 && (
                                        <Alert variant="danger" onClose={() => this.setState({ errorMessage : '' })} dismissible>
                                             {this.state.errorMessage} 
                                        </Alert>
                                    )}    

                                    <Form.Group controlId="email">
                                        <Form.Label> Email </Form.Label>
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
                                        this.state.errors && this.state.errors.email && (
                                            this.state.errors.email.map( (e, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {e}
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
                                        this.state.errors && this.state.errors.password && (
                                            this.state.errors.password.map( (p, idx) => (
                                                <div key={idx} className="alert alert-danger text-danger">
                                                    {p}
                                                </div>
                                            ))                                    
                                        )
                                    }

                                    {
                                        this.state.isLoading && (
                                            <Button variant="success" type="button" disabled block>
                                                <Spinner animation="border" role="status">
                                                    <span className="sr-only"> Saving...</span>
                                                </Spinner>
                                                <span className='ml-2'> Signing In ... </span>
                                            </Button>
                                        )
                                    }

                                    {
                                        !this.state.isLoading && (
                                            <Button variant="success" type="submit" block>
                                                Sign In
                                            </Button>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                        </div>                                                                
                    </div>                        
                    
                </Form>                    
            </div>
        )
    }
}

export default withRouter(Login);
