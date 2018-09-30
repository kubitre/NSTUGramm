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

import addButton from './addButton.png';

export default class Nstugramm extends Component{
  constructor(props){
    super(props);

    this.state = {
      userPage: false,
      currentUser: {
        postsCount: 12,
        followersCount: 1,
        followingsCount: 1,
        userImage: "https://png.icons8.com/color/1600/avatar.png",
        username: "test",
        alt: "test",
      },
      menu_small: false,
    };
    this.updateWindowWithOpenUserPage = this.updateWindowWithOpenUserPage.bind(this);

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
    })
  }



  render(){
    return(
        <div className="NSTUGramm">
          <div className="navbar">
            <Navbar updateWindow={this.updateWindowWithOpenUserPage} smallMenu={this.state.menu_small}/>
          </div>
          {this.state.userPage ?
            <div className="userPage_container">
              <UserPage user={this.state.currentUser}/>
            </div>
           :
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
          }
        </div>
    );
  }
}
