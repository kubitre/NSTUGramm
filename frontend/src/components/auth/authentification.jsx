//import foreign libraries for our component
import React, { Component } from 'react';

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
      registrationActivated: false,
    };
  }

  render(){
    return (
      !this.state.registrationActivated ?
        <Login />
      :
        <Registration />
    );
  }
}
