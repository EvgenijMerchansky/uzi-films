import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './childComp.css';

import { add, getData, change } from '../actions/baseAction';
import { ganres, onlyGanre } from '../actions/actionGanreRequests';
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
  componentWillMount(){

    this.props.inputState.firstReducer.length > 19 ? null : this.props.getData();
    this.props.genreState.length == 0 && this.props.genreState.length < 19 ? this.props.ganres() : null;

  }
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this);

    // === all genres ===

    const allGenres = this.props.genreState,
          processedAllGenres = allGenres.map((elem,index) => {
            // console.log()
            return <button onClick={() => {this.props.onlyGanre(elem.name)}} className="ganre-item" key={index}>{elem.name}</button>
          })

    // === END all genres ===

    const filtered = this.props.filteredState;


    // === home page films ===
    const homePFilms = this.props.inputState.firstReducer;
    const wrappedFilms = homePFilms.map((elem,index) => {
      // console.log(elem.id, 'in general')
      return (
        <div className="film__card" key={index}>

          <Link to={`/movie/id/:${elem.id}`}>{elem.title}</Link>

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
        {processedAllGenres}<br/><br/>
        {/* <button >only ganre</button> */}
        {/* <button onClick={() => {this.props.ganres()}}>get</button> */}
        <input placeholder="search" ref={(input) => {this.inputSearch = input}} name="search" onChange={() => {this.props.change(this.inputSearch.value, wrappedFilms)}}/><br/>
        {filtered.length > 0 ? filtered : wrappedFilms}

{/*  */}
      </div>
    )
  }
}
// Мой новый компонент для фильмов (один на всех)

function mapStateToProps(state){
  return{
    inputState: state,
    filteredState: state.sortReducer.filtered,
    genreState: state.genresReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    add,
    getData,
    change,
    ganres,
    onlyGanre
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Chlidr)
