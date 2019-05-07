import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',

  };

  // handlers

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    //   this.setState({newTodo: e.target.value})
  };

  handleSubmit = e => {
    const {name, age, height} = this.state;
    e.preventDefault();

    // must fill in ALL fields !!!
    if(name && age && height) {
      this.props.addSmurf({name, age, height});
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }

  };


  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <div className = "smurfFormInputs">
            <input
              value = {this.state.name}
              name = "name"
              type = "text"
              placeholder = "name"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.age}
              name = "age"
              type = "text"
              placeholder = "age"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.height}
              name = "height"
              type = "text"
              placeholder = "height"
              onChange={this.handleChange}
            />
          </div>
          <div className = "buttonContainer">
            <button>Add NEW Smurf !!! </button>
          </div>
        </form>


      </div>

    );
  }
}

const mapStateToProps = state => ({
  addingSmurf: state.addingSmurf,
  error: state.error,

});


export default connect(mapStateToProps, {addSmurf})(App);
