/**
 * manages state
 */
import { combineReducers } from 'redux';


 const counterReducer = (count = 0, action) => { // count=0 initializes state
   if (action.type === 'INCREMENT_COUNTER') {
     return count + action.increment; // action.increment is payload! +1 => +action.increment
   }
   else if (action.type === 'DECREMENT_COUNTER') {
     return count - action.decrement;
   }
   return count;
 }

export default combineReducers({
  count: counterReducer,
  // anotherKey: anotherReducer // all your reducers should be combined
})