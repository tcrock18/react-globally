import React, { Component } from 'react'
import { withGlobalState } from 'react-globally'

class CounterControls extends Component {
    countUp = () => {
        this.props.setGlobalState(prevGlobalState => ({
            counter: prevGlobalState.counter +1
        }))
    }
    countDown = () => {
        this.props.setGlobalState(prevGlobalState => ({
            counter: prevGlobalState.counter - 1
        }))
    }
    setZero = () => {
        this.props.setGlobalState({
            counter: 0
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.countUp}>Count Up</button>
                <button onClick={this.countDown}>Count Down</button>
                <button onClick={this.setZero}>Set to Zero</button>
            </div>
        )
    }
}

export default withGlobalState(CounterControls);