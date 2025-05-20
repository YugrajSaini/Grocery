const initialState = {
    loggedIn:true
    };
    
export default function authReducer(state = initialState, action){
      switch (action.type) {
        case "Loader":
          return {
            ...state,
            loggedIn: false,
          };
      
        default:
          return state;
      }
    };
    