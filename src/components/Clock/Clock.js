import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount = () => {
        this.timerID = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="clock">
                <span>{this.state.time}</span>
            </div>
        )
    }
}

export default Clock;