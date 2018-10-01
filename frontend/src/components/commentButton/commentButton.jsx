import React, { Component } from 'react';

import './commentButton.css';


export default class CommentButton extends Component{
  constructor(props){
    super(props);

    this.state = {
      titleCommentButton: "Оставить комментарий",
    };

    this.commented = this.commented.bind(this);
  }

  commented(event){
    this.props.updatePostWithComment(true);
  }

  render(){
    // var styleButton = {
    //   backgroundImage: `url(${})`
    // }
    return(
      <div className="comment_button_container">
        <div className="button" onClick={this.commented} />
      </div>
    );
  }
}
