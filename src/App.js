import React, {Component} from 'react' 
import './App.css';
import HomePage from './components/HomePage';
import EditSkill from './components/EditSkill';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import
class App extends Component {
 
  render(){
    return (
      <HashRouter>
        <div>
          <HomePage/>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
