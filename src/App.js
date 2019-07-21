import React from 'react';
import './App.css';
import SignupPage from './app_components/Signup.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import LoginPage from './app_components/Login.js'
import NavBar from './app_components/Navbar.js'
import Home from './app_components/Home.js'

class App extends React.Component {

  render(){
  return (
    <div className="App">
    <NavBar></NavBar>
    <Switch>
    <Route exact path='/' render={({history})=><Home history={history}/>}/>
    <Route exact path='/signup' render={({history})=><SignupPage history={history}/>}/>
    <Route exact path='/login' render={({history})=><LoginPage history={history}/>}/>
    </Switch>
    </div>
  );
  }
}

export default App;
