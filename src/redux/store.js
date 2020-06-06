import { createStore, combineReducers } from 'redux'
import { messages, visibilityFilter } from './reducers'

export default createStore(combineReducers({messages, visibilityFilter}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())