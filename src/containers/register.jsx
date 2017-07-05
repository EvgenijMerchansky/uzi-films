import React, { Component } from 'react';
// import { modal } from 'react-redux-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { newUser } from '../actions/baseAction';

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this);
    return(
      <div>
        <form onSubmit={(e) => {this.props.newUser(this.inputNewLogin.value, this.inputNewPassword.value, this.inputNewRePassword.value, e.preventDefault())}}>
          <input ref={(input) => {this.inputNewLogin = input}} type="text"  placeholder="type new login" name="new-login"></input><br/><br/>
          {/* {this.props.register.firstReducer.length == 0 ? <>} */}
          <input ref={(input) => {this.inputNewPassword = input}} type="password" placeholder="type new password" name="password"></input><br/><br/>
          <input ref={(input) => {this.inputNewRePassword = input}} type="password" placeholder="password again" name="repasword"></input><br/><br/>
          <button type="submit">Register</button>
          <Link to="/">Home</Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    register: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newUser
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
