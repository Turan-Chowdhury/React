import React, { Component } from 'react'

export default class  extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    inc = () => {
        const {count} = this.state;
        this.setState({      
            count : count +1
        })
    }
    
    dec = () => {
        const {count} = this.state;
        this.setState({
            count : count - 1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>Count : {count}</h2>
                <button onClick={this.inc} disabled={count===5? true : false}>+</button>
                <button onClick={this.dec} disabled={count===0? true : false}>-</button>
            </div>
        )
    }
}
