import React from 'react';
import AddMessage from './components/addMessage'
import MessageList from './components/messageList'
import VisibilityFilter from './components/visibilityFilter'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

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
