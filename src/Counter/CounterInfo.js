import React from 'react'
import { withGlobalState } from 'react-globally'

const CounterInfo = (props) => {
    return(
        <div>
            The counter value: {props.globalState.counter}
            <button onClick={() => props.setGlobalState({ counter: 100 })}>Set to 100</button>
        </div>
    )
}

export default withGlobalState(CounterInfo)