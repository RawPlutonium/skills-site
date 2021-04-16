import React, {Component} from 'react' 
import './App.scss';
import HomePage from './components/HomePage';
import EditSkill from './components/EditSkill';
import {BrowserRouter,Switch , Route} from 'react-router-dom'
class App extends Component {
 
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/edit' component={EditSkill}/>
          </Switch>
        </BrowserRouter>
      
  
      
    );
  }
}

export default App;
