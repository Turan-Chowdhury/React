import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProjectList from './pages/projects/ProjectList';

import { PUBLIC_URL } from '../constants';
import ProjectCreate from './pages/projects/ProjectCreate';
import ProjectView from './pages/projects/ProjectView';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { checkIfAuthenticated } from '../services/AuthService';
import AuthenticatedRoutes from './AuthenticatedRoutes';

export default class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user : {},
             isLoggedIn : false
        }
    }

    componentDidMount() {

        if(checkIfAuthenticated()){
            this.setState({
                user : checkIfAuthenticated(),
                isLoggedIn : true
            })
        } 
    }

    render() {
        return (
            <div>
                <Router>
                <Header authData={this.state}/>
                
                <Container className='p-4'>

                    <Switch>

                        {/* <Route path={`${PUBLIC_URL}about`} exact={true}>
                                <About />
                            </Route> 
                        */}

                        <Route path={`${PUBLIC_URL}about`} exact={true} component={About} />

                        <Route path={`${PUBLIC_URL}contact`} exact={true} component={Contact} />

                        <AuthenticatedRoutes authed={this.state.isLoggedIn} path={`${PUBLIC_URL}projects/view/:id`} component={ProjectView} />

                        {/* <Route path={`${PUBLIC_URL}projects/view/:id`} exact={true} component={ProjectView} /> */}

                        <AuthenticatedRoutes authed={this.state.isLoggedIn} path={`${PUBLIC_URL}projects/create`} component={ProjectCreate} />

                        {/* <Route path={`${PUBLIC_URL}projects/create`} exact={true} component={ProjectCreate} /> */}

                        <AuthenticatedRoutes authed={this.state.isLoggedIn} path={`${PUBLIC_URL}projects`} component={ProjectList} />

                        {/* <Route path={`${PUBLIC_URL}projects`} exact={true} component={ProjectList} /> */}

                        <Route path={`${PUBLIC_URL}login`} exact={true} component={Login} />

                        <Route path={`${PUBLIC_URL}register`} exact={true} component={Register} />

                        <Route path={`${PUBLIC_URL}`} exact={true} component={Home} />

                    </Switch>

                    <Footer />

                </Container>
                </Router>                
            </div>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
