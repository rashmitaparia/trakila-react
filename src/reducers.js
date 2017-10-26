import { combineReducers } from 'redux'
import {
  GET_TRAKILA_PRODUCTS,
  GOT_TRAKILA_PRODUCTS,
  GOT_TRAKILA_PRODUCTS_ERROR,
} from './actions'


 

function offerdata(state = {error:false,offers:[]}, action) {
  switch (action.type) {
    case GOT_TRAKILA_PRODUCTS:
      return Object.assign({}, state, {
        offers: action.offers,
        error: action.error,
        message: action.message,
        lastUpdated: action.receivedAt
      })
    default:

    return Object.assign({}, state)
   }
}

 

function itemsIsLoading(state=false, action){
  switch(action.type){
    case GET_TRAKILA_PRODUCTS:
     return action.isLoading;
    default:
    return Object.assign({}, state)
  }
}

 

function error(state= {isError:false,message:""}, action){
  switch(action.type){
    case GOT_TRAKILA_PRODUCTS_ERROR:
    return Object.assign({}, state, {
        isError: action.isError,
        message: action.message
      })
    default:
            return {state};
       }
}

const rootReducer = combineReducers({
  itemsIsLoading,
  error,
  offerdata
})

export default rootReducer

