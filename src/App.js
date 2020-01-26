import React from 'react';
import './App.css';
import SignupPage from './app_components/Signup.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import LoginPage from './app_components/Login.js'
import NavBar from './app_components/Navbar.js'
import Home from './app_components/Home.js'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import StreamSetup from './app_components/StreamSetup';
import StreamContainer from './app_components/StreamContainer'
import StashContainer from './app_components/StashContainer'
import { setNonDesktop } from './actions/isDesktop'
import ResetPassword from './app_components/ResetPassword';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();

    if(window.innerWidth <= 784){
      this.props.setNonDesktop()
    }

  }

  handleNavBar = () => {
    if(window.location.pathname !== "/stream/setup"){
      return(
        <NavBar loggedIn={this.props.loggedIn}></NavBar>
      )
    }
  }

  render(){
  return (
    <div className="App">
    {this.handleNavBar()}
    <Switch>
    <Route exact path='/' render={({history})=><Home history={history}/>}/>
    <Route exact path='/resetpassword' render={({history})=><ResetPassword history={history}/>}/>
    <Route exact path='/signup' render={({history})=><SignupPage history={history}/>}/>
    <Route exact path='/login' render={({history})=><LoginPage history={history}/>}/>
    <Route exact path='/stream/setup' render={({history})=><StreamSetup history={history}/>}/>
    <Route exact path='/stream' render={({history})=><StreamContainer user={this.props.user} history={history}/>}/>
    <Route exact path='/stash' render={({history})=><StashContainer user={this.props.user} history={history}/>}/>
    </Switch>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    user: state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, setNonDesktop })(App));
