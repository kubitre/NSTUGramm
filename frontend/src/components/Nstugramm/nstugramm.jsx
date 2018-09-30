//import foreign libraries for our component
import React, { Component } from 'react';

//import main stylesheet
import './nstugramm.css';

//imports component need
import Navbar from '../navbar/navbar';
import UserPage from '../userPage/userPage';
import Window from '../centralWindow/window';
import Footer from '../footer/footer';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

import ApiClient from '../../services/ApiClient';

import addButton from './addButton.png';

export default class Nstugramm extends Component{
  constructor(props){
    super(props);

    this.state = {
      userPage: false,
      currentUser: {
        userImage: '',
        alt: ''
      },
      currentUserId: 1,
      menu_small: false,
      userPage: false,
      userExit: false,
    };
    this.updateWindowWithOpenUserPage = this.updateWindowWithOpenUserPage.bind(this);
    this.redirectToUserPage = this.redirectToUserPage.bind(this);
  }



  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);


  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let lastscrollY = window.scrollY;
    if(lastscrollY >= 90){
      this.setState({
        menu_small: true,
      });
    }
    else{
      this.setState({
        menu_small: false
      });
    }
  }

  updateWindowWithOpenUserPage(flag){
    this.setState({
      userPage: flag,
    });
  }

  redirectToUserPage(ev){
    if(ev === 1){
      this.setState({
        userPage: true
      });
    }
    else if(ev === 2){
      this.setState({
        userExit: true
      });
    }
  }


  render(){
    return(
        <div className="NSTUGramm">
            <div className="navbar">
              <Navbar updateWindow={this.updateWindowWithOpenUserPage} smallMenu={this.state.menu_small} redirectToUserPage={this.redirectToUserPage}/>
            </div>
            <div className="group_container">
              <div className="uploadContainer">
                <UploadPhoto />
              </div>
              <div className="window">
                <Window />
              </div>
              <div className="footer">
                <Footer currentUser={this.state.currentUser}/>
              </div>
            </div>
        </div>
    );
  }
}
