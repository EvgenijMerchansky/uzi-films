const initialState = {info: ''};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_USER':
      const DbId = () => {
        return '_' + Math.random().toString(36).substr(2, 9)
      };

      if(action.payload.name && action.payload.password && action.payload.repassword){

        localStorage.setItem(DbId(), JSON.stringify(action.payload));

        // return [...state,action.payload];


      }

      return Object.assign({}, state, {info: action.payload} );

      break;

    default:
      return state;
  }
}
