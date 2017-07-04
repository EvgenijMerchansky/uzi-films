// const initialState = {
//   home_page_films_most_popular: ''
// };

const initialState = []

export default function(state = initialState, action) {
  console.log(action.payload, 'with reducer');
  switch (action.type) {

    case 'ADD_DATA':
      return [...state,action.payload]
      // return Object.assign({},state,{home_page_films_most_popular: action.payload});
    default:
      return state
  }

}
