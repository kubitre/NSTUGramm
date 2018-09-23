import React, { Component } from 'react';

import './userPhoto.css';

import Like from '../../like/like';
import Comment from '../../comment/comment';

export default class UserPhoto extends Component{
  constructor(props){
    super(props);

    this.state = {
      isHover: false,
      userPhoto: this.props.userPhoto
    };

    this.mouse_hover_event = this.mouse_hover_event.bind(this);
    this.mouse_out_event = this.mouse_out_event.bind(this);
  }

  mouse_out_event(event){
    this.setState({
      isHover: false,
    })
  }

  mouse_hover_event(event){
    this.setState({
      isHover: true,
    })
  }

  render(){
    return(
      <div className="userPhoto_container">
        <div className="user_photo">
          <img src={this.state.userPhoto.photo_url} onMouseOver={this.mouse_hover_event} onMouseOut={this.mouse_out_event}/>
          {this.state.isHover ?
            <div className="hover_info_photo">
              <div className="likes_container">
                <Like checked={false}/>
              </div>
              //TODO: write component for comment activate and adding this component to post component
            </div>
            :
            null
          }
          <div className="info_photo">
            <span className="username_photo_info">
              {this.state.userPhoto.username}
            </span>
            <span className="filter_photo_info">
              {this.state.userPhoto.filterName}
            </span>
            <span className="user_comment_photo_info">
              {this.state.userPhoto.alt}
            </span>
            <div className="block_info_likes_and_comments">
              <Like />

            </div>
          </div>
        </div>
      </div>
    )
  }
}
