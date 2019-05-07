import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import {connect} from 'react-redux';
import {deleteSmurf} from '../actions';

class App extends Component {

  handleDelete = (e, id) => {
    console.log("DELETE");
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  render() {
    return (

      <div>

        <div className="smurfContainer">
          <h2>SMURFS with REDUX !!!</h2>

          {this.props.smurfs.map( (smurf, index) => (
            <div
              className = "smurfItem"
              key = {index}
            >
              <h4> Name: {smurf.name}</h4>
              <h4> Age: {smurf.age}</h4>
              <h4> Height: {smurf.height}</h4>
              <button
                onClick = { e => this.handleDelete(e, smurf.id)}
              > Delete the smurf with that id NOW </button>
            </div>
          ))}
        </div>

      </div>

    );
  }
}

const mapStateToProps = state => ({
  deletingSmurf: state.deletingSmurf,
  error: state.error,

});


export default connect(mapStateToProps, {deleteSmurf})(App);


/*
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};
 */