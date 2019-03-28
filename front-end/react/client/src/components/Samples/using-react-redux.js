import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import store from './store'

import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

////////////////////////////////////////////////////////////////////////////////////////////
// Using the "connect" function to connect a Component to the store.

import { increment, decrement, reset } from './actionCreators'


class Component extends React.Component {

}

/* called every time the store state changes. It receives the entire store state, 
and should return an object of data this component needs */
const mapStateToProps = (state /*, ownProps*/) => {
  return { // RETURNS THIS TO THIS COMPONENT (Component) WHENEVER THE store IS UPDATED
    counter: state.counter
  }
}

// ... normally is an object full of action creators
const mapDispatchToProps = { increment, decrement, reset }
/* If it’s a function, it will be called once on component creation. It will receive dispatch as an argument, 
and should return an object full of functions that use dispatch to dispatch actions.
If it’s an object full of action creators, each action creator will be turned into a prop function 
that automatically dispatches its action when called. Note: We recommend using this “object shorthand” form. */


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)