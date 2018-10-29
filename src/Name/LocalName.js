import React, { Component } from 'react'
import { withGlobalState } from 'react-globally'

class LocalName extends Component {

    state = {
        localName: ''
    }

    onNameChangeLocal = (e) => {
        this.setState({
            localName: e.target.value
        })
        console.log('Local Name Change: ' + this.state.localName)
    }

    handleSubmitLocal = (e) => {
        this.setState({
            localName: e.target.value
        })
        console.log('Local State: ' + this.state.localName)
        e.preventDefault()
        console.log('Local State Submit: ' + this.state)
    }

    resetNameLocal = () => {
        this.setState({
            localName: ''
        })
        console.log('Local Reset Name: ' + this.state.localName)
    }

    render() {
        return(
            <div>
                <h1>Local Name</h1>
                <form onSubmit={this.handleSubmitLocal}>
                    <input type="text" placeholder="Local Name" onChange={this.onNameChangeLocal}></input>
                    <input type="submit" />
                    <button onClick={this.resetNameLocal}>Reset Name</button>
                </form>
                <div>
                    <p>{this.props.globalState.counter}</p>
                </div>
            </div>
        )
    }
}

export default withGlobalState(LocalName);