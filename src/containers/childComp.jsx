import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './childComp.css';

import { add, getData } from '../actions/baseAction';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// * === my imports === *

import Header from '../components/header.jsx';
import App from '../App';
import Movie from './movie/movie.jsx';

// function Slyapa(props) {
//   return (
//     <div>some text for testing router</div>
//   )
// }

class Chlidr extends Component {
  componentDidMount(){
    this.props.inputState.length > 19 ? null : this.props.getData();
  }
  // constructor() {
  //
  // }
  render(){
    console.log(this);

    // === home page films ===
    const homePFilms = this.props.inputState;
    const wrappedFilms = homePFilms.map((elem,index) => {
      // console.log(elem.id, 'in general')
      return (
        <div className="film__card" key={index}>
          {/* <h1>{elem.title}</h1> */}

          <Link to={`/movie/id/:${elem.id}`}>{elem.title}</Link>

          {/* <Link to="/movie">{elem.title} (must be a router link)</Link> */}
          <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
          <p>rate: {elem.popularity} <img width="13" src={require('./../images/1600.png')}/></p>
          <p>{elem.release_date}</p>
          <p>{elem.overview}</p>
          <q>language: {elem.original_language}</q>
        </div>
      )
    })
    // === END home page films ===









    return(
      <div className='film'>
        {wrappedFilms}

        {/* <Router> */}
          {/* <div> */}
            {/* <li><Link to="/movie">router test</Link></li> */}
            {/* <ul>
              <li><Link to="/">router test</Link></li>
              <li><Link to="/about">Header</Link></li>
            </ul> */}

            {/* <hr/> */}

            {/* <Route exact path="/" component={App}/> */}
            {/* <Route path="/movie" component={Movie}/> */}
          {/* </div> */}
        {/* </Router> */}

      </div>
    )
  }
}
// Мой новый компонент для фильмов (один на всех)

function mapStateToProps(state){
  return{
    inputState: state.firstReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    add,
    getData
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Chlidr)
