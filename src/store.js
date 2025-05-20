import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import homeReducer from "./reducer/homeReducer"

export const store = createStore(homeReducer,applyMiddleware(thunk))






// store.dispatch({
//     type: 'ADD_TODO',
//     text: 'Use Redux'
//   })
//   console.log(store.getState())