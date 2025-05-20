const initialState = {
    name:"Garima"
    };
    
export default function mainReducer(state = initialState, action){
      switch (action.type) {
        case "ChangeName":
          return {
            ...state,
            name: action.payload,
          };
      
        default:
          return state;
      }
    };
    