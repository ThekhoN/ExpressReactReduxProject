import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {counterActions} from './actions'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>Hello Redux</h1>
        <h2>Counter: {this.props.counter} </h2>
      </div>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    testClick: () => dispatch(counterActions('Add'))
  }
}

const mapStateToProps = (state) => {
  return state
}

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchtoProps
)(App)

export default DefaultApp
