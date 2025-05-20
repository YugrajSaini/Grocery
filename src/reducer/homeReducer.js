import mainReducer from "./mainReducer"
import authReducer from "./authReducer"
import { combineReducers } from 'redux'

 const homeReducer=combineReducers({
    mainReducer,
    authReducer
  })

  export default homeReducer