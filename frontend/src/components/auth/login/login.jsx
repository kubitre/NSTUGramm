import React, { Component } from 'react';

import './login.css';

import ApiClient from '../../../services/ApiClient';

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
    this.handleSending = this.handleSending.bind(this);

    this.clientApi = new ApiClient();
  }

  handleSending(event){
    event.preventDefault();
    //const params = new URLSearchParams(`username=${this.state.valueLogin}&password=${this.state.valuePassword}`);
    this.clientApi.get('api/user/login', {auth:{username:this.state.valueLogin,password:this.state.valuePassword}}).then(response=>{
      console.log(response);
    })
    .catch(err=>console.log(err));
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
            <span>{this.state.nameProject}</span>
          </div>
          <form onSubmit={this.handleSending}>
            <div className="inputstyle">
              <input className="form-control" type="text" onChange={this.handleChangeLogin} required/>
              <label>login:</label>
            </div>
            <div className="inputstyle">
              <input className="form-control" type="password" onChange={this.handleChangePassword} required/>
              <label>password:</label>
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
