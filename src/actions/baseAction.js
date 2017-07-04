import axios from 'axios';

export const add = (arg) => {
  console.log(arg);
  return {
    type: 'ADD',
    payload: arg
  }
}

export const addTodoTitle = (title) => {

  console.log(title);

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
          // part : 'id ,snippet',
          // q: q,
          // type: 'video',
          // key: 'AIzaSyDidihTEViX7bkm17xLglRF51mjonDSw-I',
          // maxResults: 10
        }
      }).then(response => {

        const filmData = response.data.results
        // console.log(filmData, 'my response');
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
          // console.log(elem)
        })

      })

    }

  }
