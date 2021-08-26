import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default class Conditional_rendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        const {isLoggedIn} = this.state;

        let element;

        return (
            <div>
                {isLoggedIn && <HomePage/>}
            </div>
        )
    }
}
