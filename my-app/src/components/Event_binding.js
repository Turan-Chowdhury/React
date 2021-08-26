import React, { Component } from 'react'

export default class Event_binding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }

        this.clic = this.clic.bind(this)
    }

    clic() {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {   
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clic}>Increase</button>
            </div>
        )
    }
}
