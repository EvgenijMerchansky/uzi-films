import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Childr from './containers/childComp.jsx';
import Header from './components/header.jsx';
import Movie from './containers/movie/movie.jsx';
// import functionName './containers/childComp.jsx';

class App extends Component{
  render(){
    // console.log(Movie,'my Movie');
    // console.log(this);
    return (
      <div className="App">
        <Header/>
        {/* <Childr/> */}

        {/* {userlogin == true ? <Header/> : <NotLogin/>} */}
        <Router>
          <div>
            <Route exact path="/" component={Childr}/>
            {/* <Route path="/movie/id" component={Movie}/> */}
            {/* <Route path="/movie/id:${elem.id}" component={Movie}/> */}
          </div>
        </Router>
      </div>
    );
  }
}



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('root'));
registerServiceWorker();

export default App;
