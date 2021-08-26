import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../constants'

export default function Home() {
    return (        
        <Container>
            <div className="card card-body">
                <h2>Welcome to Home Page</h2><hr/>
                <h6>Login to your account and enjoy storing and assigning your projects ... </h6>
                <p>
                    <Link to={`${PUBLIC_URL}login`} className="btn btn-primary">
                        Sign In
                    </Link>                            
                </p>
                <h6>If there is no account, Please register :</h6>
                <p>
                    <Link to={`${PUBLIC_URL}register`} className="btn btn-success">
                        Sign Up
                    </Link>
                </p>
            </div>
        </Container>        
    )
}
