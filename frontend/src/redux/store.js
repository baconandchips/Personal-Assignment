import { combineReducers } from 'redux'
import { messages, visibilityFilter } from './reducers'

export default combineReducers({
    messages, 
    visibilityFilter
});