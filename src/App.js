import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './redux/store';
import AddMessage from './components/addMessage'
import MessageList from './components/messageList'
import VisibilityFilter from './components/visibilityFilter'
import './App.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() { // this is how you make a functional component
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Hello Shrek</h1>
      <AddMessage />
      <MessageList />
      <VisibilityFilter />
    </div>
    </Provider>
    
  );
}

export default App;
