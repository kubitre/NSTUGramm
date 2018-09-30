//import react libraries
import React, { Component } from 'react';
import classNames from 'classnames/bind';

//import styles
import './registration.css';

//import logotype
import logo_temp from '../../../../src/img/logo_temp.png' ;

export default class Registration extends Component{
  constructor(props){
    super(props);

    this.state = {
      placeholderLogin: "никнейм",
      placeholderEmail: "email",
      placeholderPassword: "пароль",
      valueLogin: '',
      valueEmail: '',
      valuePassword: '',
      input_effect: false,
    };

    this.clickWork = this.clickWork.bind(this);

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeLogin(event){
    this.setState(
      {
        valueLogin: event.target.value
      }
    );
    // console.log("login: " + event.target.value);
  }

  handleChangeEmail(event){
    this.setState({
      valueEmail: event.target.value
    });

    // console.log("email: " + event.target.value);
  }

  handleChangePassword(event){
    this.setState({
      valuePassword: event.target.value
    });

    // console.log("password: " + event.target.value);
  }

  handleSending(event){
    console.log(
    "Nick: "
    + this.state.valueLogin +
    "; email: "
    + this.state.valueEmail +
    "; password:"
    + this.state.valuePassword );

    event.preventDefault();
  }

  clickWork(event){

  }

  render(){

    return (
      <div className="registration_container">
        <div className="registration_form">
          <div className="label_image">
            <img src={logo_temp} alt="nstugramm"/>
          </div>
          <form onSubmit={this.handleSending}>
            <div className="login_input">
              <div className={classNames("input", {'has-content': this.trueEffect})}>
                <input className={classNames('effect', {'has-content': this.trueEffect})} onClick={this.changeFocus} type="text" placeholder=""/>
                <label>{this.state.placeholderLogin}</label>
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="email_input">
              <input className="inputs font_form" type="email" placeholder={this.state.placeholderEmail} onChange={this.handleChangeEmail}/>
            </div>
            <div className="password_input">
              <input className="inputs font_form" type="password" placeholder={this.state.placeholderPassword} onChange={this.handleChangePassword}/>
            </div>
            <div className="submit">
              <input className="submit_button font_form" type="submit" value="Зарегистрироваться"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
