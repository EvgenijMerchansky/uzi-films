import React, { Component } from 'react';
import './header.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { modal } from 'react-redux-modal';

class Header extends Component{
  // constructor() {
  //
  // }
  render(){
    return (
      <div className="header">
        {/* <button>Sign in</button>
        <button disabled={true}>Sign out</button> */}
        <Link to={`/register-page`}>Register</Link><br/>
        <input placeholder="search" name="search"/>
        {/* <YourComponent/> */}
        {/* 2 links for modal (login and register) */}
        {/* base structure: */}
        {/* <Router>
          <div>
            <ul>
              <li><Link to="/">router test</Link></li>
              <li><Link to="/about">Header</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Slyapa}/>
            <Route path="/about" component={Header}/>
          </div>
        </Router> */}

      </div>
    )
  }
}

export default Header;
