import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupPage from './app_components/Signup.js'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  render(){
  return (
    <div className="App">
    <Route exact path='/signup' render={({history})=><SignupPage history={history}/>}/>
    </div>
  );
  }
}

export default App;
