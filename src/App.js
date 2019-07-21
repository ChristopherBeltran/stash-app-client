import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupPage from './app_components/Signup.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import LoginPage from './app_components/Login.js'

class App extends React.Component {

  render(){
  return (
    <div className="App">
    <Route exact path='/signup' render={({history})=><SignupPage history={history}/>}/>
    <Route exact path='/login' render={({history})=><LoginPage history={history}/>}/>
    </div>
  );
  }
}

export default App;
