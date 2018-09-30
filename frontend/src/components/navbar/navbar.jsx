//import foreign libraries for our component
import React, { Component } from 'react';
import classNames from 'classnames/bind';

//import stylesheet main of our component
import './navbar.css';

//
import testImage from '../../../src/img/worker.png';
import logotype from '../../../src/img/logo_temp.png';

//
import UserMenu from '../userMenu/usermenu';

export default class Navbar extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: {
        username: "test",
        alt: "avatar",
      },
      openMenu: false,
      nameProject: 'NSTUGramm',
      menu_small: this.props.smallMenu,
      separator: '|',
    };

    this.openUserMenu = this.openUserMenu.bind(this);
    this.redirectToUserPage = this.redirectToUserPage.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps);
    if(nextProps.smallMenu === true && nextProps.smallMenu !== this.state.menu_small){
      this.setState({
        menu_small: true,
      });
      return true;
    }
    else if(nextProps.smallMenu === false && nextProps.smallMenu !== this.state.menu_small){
      this.setState({
        menu_small: false,
      });
      return true;
    }
    else if(nextState.openMenu !== this.state.openMenu){
      return true;
    }
    else{
      return false;
    }
  }

  openUserMenu(event){
    if(this.state.openMenu){
      this.setState({
        openMenu: false,
      })
    }
    else{
      this.setState({
        openMenu: true
      });
    }

  }

  redirectToUserPage(ev){
    this.props.redirectToUserPage(ev);
  }

  render(){
    return (
      <div className="container">
        <div className={classNames('container__navbar', {'smallMenu': this.state.menu_small})}>
          <div className="left_side__navbar">
            <div className={classNames("logotype__navbar", {'menusmall_logotype': this.state.menu_small})}>
              <img src={logotype} alt={this.state.nameProject}/>
            </div>
            <div className={classNames("separator__navbar text_size_big", {'menu_small_without_text': this.state.menu_small})}>
              <span>{this.state.separator}</span>
            </div>
            <div className={classNames("name_project__navbar text_size_big", {'menu_small_without_text': this.state.menu_small})}>
              <span>{this.state.nameProject}</span>
            </div>
          </div>
          <div className="user__navbar block_" onClick={(e)=>this.openUserMenu(e)}>
            <div className="user_profile_image__navbar block_">
              <img src={testImage} alt={this.state.currentUser.alt}/>
            </div>
          </div>
        </div>
        <div className="user_menu">
        {this.state.openMenu ?
          <div className="user_menu">
            <UserMenu user={this.state.currentUser} redirectToUserPage={this.redirectToUserPage}/>
          </div>
          : null
        }
        </div>
      </div>
    );
  }
}
