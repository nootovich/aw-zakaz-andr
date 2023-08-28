import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
  admin: adminReducer
})

export const store = createStore(rootReducer, composeWithDevTools(thunk))