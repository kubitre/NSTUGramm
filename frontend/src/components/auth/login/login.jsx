import React, { Component } from 'react';

import './login.css';

//import logotype
import logo_temp from '../../../../src/img/logo_temp.png' ;

export default class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      nameProject: "NSTUGramm",
      placeholderLogin: "никнейм или email",
      placeholderPassword: "пароль",
      valueLogin: '',
      valuePassword: ''
    };

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleSending(event){
    event.preventDefault();
  }

  handleChangeLogin(event){
    this.setState({
      valueLogin: event.target.value
    });
  }

  handleChangePassword(event){
    this.setState({
      valuePassword: event.target.value
    })
  }

  render(){
    return (
      <div className="login_container">
        <div className="login_form">
          <div className="label_image">
            <img src={logo_temp} alt={this.state.nameProject}/>
          </div>
          <form onSubmit={this.handleSending}>
            <div className="login_input font_form">
              <input type="text" placeholder={this.state.placeholderLogin} onChange={this.handleChangeLogin}/>
            </div>
            <div className="password_input font_form">
              <input type="password" placeholder={this.state.placeholderPassword} onChange={this.handleChangePassword}/>
            </div>
            <div className="input_button font_form">
              <input type="submit" value="Войти" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
