import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class Movie extends Component {
  // constructor() {
  //
  // }
  render(){
    console.log(this,'movie component');

    let intro = this.props;

    return(
      <div>sadasdsd</div>
    )
  }
}

function mapStateToProps(state){
  return{
    movieState: state.firstReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // add,
    // getData
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie)

// export default Movie;
