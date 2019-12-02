import React, { Component } from 'react'
// import { addTodo } from '../../actions/actions' // change code 1 
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: '' 
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // // changes code 1 and 2 . look at connent method in the bottom
    // this.props.addTodo(this.state)

    // change code 3. 
    this.props.dispatch({
      type: 'ADD_TODO', payload: this.state
    })

    // this.setState({ text: ''})
  }
  render() {
    return(
      <div>

        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label>add todo </label>
            <input 
              type="text"
              name="text"
              onChange={this.handleChange} 
              value={this.state.text}
            />

          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

// change code 2
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}
/*********** change code ***********/
// 1- use connect(null, { addTodo }) syntext if we have the action in seprate file 
// export default connect(null, { addTodo })(CreateTodo); 

// 2- use connect(null, mapDispatchToProps) syntext if we impelment the action in mapDispatchToProps at the same file
// export default connect(null, mapDispatchToProps)(CreateTodo);

// if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect. 
// 3- use connect() syntext if we want impelement the action anywhere in thes component using this.props.dispatch({ <action> }) 
export default connect()(CreateTodo);

