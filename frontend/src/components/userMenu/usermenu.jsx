//
import React, { Component } from 'react';

//import stylesheet
import './usermenu.css';


export default class UserMenu extends Component{
  constructor(props){
    super(props);

    this.state = {
      profile_placeholder: "Профиль",
      extir_placeholder: "Выйти"
    }
  }

  render(){
    return (
      <div className="userMenu_container">
        <ul className="list_user_menu">
          <li className="profile_link">{this.state.profile_placeholder}</li>
          <li className="separator_menu_item" />
          <li className="exit_link">{this.state.extir_placeholder}</li>
        </ul>
      </div>
    );
  }
}
