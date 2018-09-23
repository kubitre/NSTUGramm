//import foreign libraries for our component
import React, { Component } from 'react';

//import stylesheet main of our component
import './comment.css';

export default class Comment extends Component{
  constructor(props){
    super(props);

    this.state = {
      altUserImage: "test",
    }

    this.data = this.props.comment;
  }

  render(){
    return(
      <div className="comment_container">
        <div className="comment_author__container">
            <img className="container_photo" src={this.data.userImage} alt={this.state.altUserImage}/>
            <span className="font_awesome author_name">{this.data.author_name}</span>
        </div>
        <div className="comment_body__container">
          {
            this.data.haveComment ?
              <p className="replis_ font_awesome">{this.data.reply_tag}</p>
            :<span className="font_awesome">{this.data.body_of_comments}</span>
          }
        </div>
      </div>
    );
  }
}
