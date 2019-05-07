import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',

  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  // handlers

  render() {
    return (

      <div
        style={{
          backgroundImage: "url(http://www.digitaltrends.com/wp-content/uploads/2011/02/smurfs-village-ipad-game.jpg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
   //       backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '90%',
          margin: "5px auto",
          position: "absolute",
          zIndex : "-1",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,

        }}>

        <SmurfForm
        />

        <SmurfList
          smurfs = {this.props.smurfs}
        />

      </div>

    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
 // addingSmurf: state.addingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error,

});


export default connect(mapStateToProps, {fetchSmurfs})(App);


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