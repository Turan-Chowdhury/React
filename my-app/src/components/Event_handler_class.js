import React, { Component } from 'react'

export default class Event_handler_class extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }

    change = (e) => {
        this.setState({
            changedValue : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input type='text' onChange={this.change}/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
