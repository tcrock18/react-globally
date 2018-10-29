import React, { Component } from 'react'
import { withGlobalState } from 'react-globally'

class AccessGlobalName extends Component {

    render() {
        return(
            <div>
                <h1>Access Global Name</h1>
                <h3>{this.props.globalState.name}</h3>
            </div>
        )
    }
}

export default withGlobalState(AccessGlobalName);