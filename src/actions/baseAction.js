import axios from 'axios';
import store from '../store';

export const add = (arg) => {

  return {
    type: 'ADD',
    payload: arg
  }
}

export const addTodoTitle = (title) => {

  return {
    type: 'NEW_TITLE',
    payload: title
  }

}

export const getData = () => {

  return (dispatch) => {

    axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=7dd1a3813857d56dcfae3a021b23b626&language=en-US&page=1',
      {
        method: 'get',
        headers: {
          'Access-Control-Allow-Headers':'Content-Type, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After',
          'content-type': 'application/json;charset=utf-8'
        },
        params: {

        }
      }).then(response => {

        const filmData = response.data.results
        filmData.map((elem,index) => {

          return dispatch({
            type: 'ADD_DATA',
            payload: {
              title: elem.original_title,
              overview: elem.overview,
              release_date: elem.release_date,
              poster_path: elem.poster_path,
              original_language: elem.original_language,
              id: elem.id,
              popularity: elem.popularity

            }

          })

        })

      })

    }

  }

export const newUser = (arg,password,repassword) => {

  const id = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  };

  const newUserDATA = {
    name: arg.length < 3 || arg.length > 20 ? null : arg,
    id: id(),
    password: password.length < 8 || password.length > 20 ? null : password,
    repassword: repassword == password ? repassword : null,
    disabled: true
  };

  const errors = {
    ErrorName: "Don't walid login!",
    ErrorPassword: "Don't walid password!",
    ErrorRepassword: "Passwords do not match!"
  };

    return (dispatch) => {

      store.dispatch({
        type: 'NEW_USER',
        payload: newUserDATA.name && newUserDATA.password && newUserDATA.repassword != null ? newUserDATA : errors
      })

    }
}
