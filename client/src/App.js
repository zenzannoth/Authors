import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <CreateAuthor path="/authors/new" />
        <EditAuthor path="/authors/edit/:id" />
      </Router>
      
    </div>
  );
}

export default App;
