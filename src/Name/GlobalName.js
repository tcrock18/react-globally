import React, { Component } from 'react'
import { withGlobalState } from 'react-globally'

class GlobalName extends Component {

    resetNameGlobal = () => {
        this.props.setGlobalState({
            name: ''
        })
        console.log('Global Reset Name: ' + this.props.globalState.name)
    }

    onNameChangeGlobal = (e) => {
        this.props.setGlobalState({
            name: e.target.value
        })
        console.log('Global Name Change: ' + this.props.globalState.name)
    }
    
    handleSubmitGlobal = (e) => {
        this.props.setGlobalState({
            name: e.target.value
        })
        console.log('Global State: ' + this.props.globalState.name + this.props.globalState.counter)
        e.preventDefault()
        console.log('Global State Submit: ' + this.props)
    }

    render() {
        return(
            <div>
                <h1>Global Name</h1>
                <form onSubmit={this.handleSubmitGlobal}>
                    <input type="text" placeholder="Global Name" onChange={this.onNameChangeGlobal}></input>
                    <input type="submit" />
                    <button onClick={this.resetNameGlobal}>Reset Name</button>
                </form>
            </div>
        )
    }
}

export default withGlobalState(GlobalName);