//import foreign libraries for our component
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//import my component of registration and login
import Login from './login/login';
import Registration from './registration/registration';

//import logotype of our application

//import style of our component
import './authentification.css';

export default class Authentification extends Component{
  constructor(props){
    super(props);

    this.state = {
      placeholderLogin: "никнейм или email",
      placeholderPassword: "пароль",
      registrationActivated: true,
    };
  }

  render(){
    return (
      <Router>
        <div className="authPanel">
            {!this.state.registrationActivated ?
              <Redirect to='/registration' />
            :
              <Login />
            }
            <Switch>
              <Route path='/registration' Component={Registration}/>
            </Switch>
        </div>
      </Router>
    );
  }
}
