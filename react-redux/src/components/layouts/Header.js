import React from 'react';
import { Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CounterComponentDisplay from '../counter/CounterComponentDisplay';

export default function Header() {

    const tasks = useSelector(state => state.taskReducer.tasks);
    
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to='/' className="nav-link" > Home </Link>
                <Link to='/about-us' className="nav-link" > About Us </Link>
                <Link to='#' className="nav-link" > 
                    <CounterComponentDisplay /> 
                </Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
