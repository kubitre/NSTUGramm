//import foreign libraries for our component
import React, { Component } from 'react';

//import stylesheet main of our component
import './footer.css';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: {
        username: "kubitre",
        userImage: "https://png.pngtree.com/element_origin_min_pic/16/10/28/ac3ce995048c3a29ae1428f33ee132b2.jpg"
      },
      CompanyName: "NSTUGramm",
      CopyRight: "2018. Powered by ",
      authorName: "kubitre",
      linkAuthor: "https://kubitre.github.io/"
    };

    this.handleUserPage = this.handleUserPage.bind(this);
  }

  handleUserPage(event){
    console.log("route to user page!")
  }

  render(){
    return(

      <div className="panel_container__footer">
        <div className="userInfo" onClick={this.handleUserPage}>
          <span className="userImage">
            <img src={this.state.currentUser.userImage} alt={this.state.currentUser.alt}/>
          </span>
          <span className="userName">{this.state.currentUser.username}</span>
        </div>
        <div className="about__footer">
          <p className="CompanyName">{this.state.CompanyName}</p>
          <p className="CopyRight">{this.state.CopyRight}<a href={this.state.linkAuthor}>{this.state.authorName}</a></p>
        </div>
      </div>
    );
  }
}
