//
import React, { Component } from 'react';


//import stylesheet
import './usermenu.css';


export default class UserMenu extends Component{
  constructor(props){
    super(props);

    this.state = {
      user: {

      },
      profile_placeholder: "Профиль",
      extir_placeholder: "Выйти"
    }
    this.userPage = this.userPage.bind(this);
    this.userExit = this.userExit.bind(this);
  }
  userPage(){
    this.props.redirectToUserPage(1, true);
  }

  userExit(){
    this.props.redirectToUserPage(2, true);
  }

  render(){
    return (
        <div className="userMenu_container">
          <ul className="list_user_menu">
            <li className="profile_link" onClick={this.userPage}>{this.state.profile_placeholder}</li>
            <li className="separator_menu_item" />
            <li className="exit_link" onClick={this.userExit}>{this.state.extir_placeholder}</li>
          </ul>
        </div>
    );
  }
}
