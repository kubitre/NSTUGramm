//import foreign libraries for our component
import React, { Component } from 'react';

//import any components needs for our component
import Comment from '../comment/comment';
import Like from '../like/like';
import CommentButton from '../commentButton/commentButton';
import CommentField from '../commentField/commentField';

import ApiClient from '../../services/ApiClient';

//import main stylesheet of our component
import './post.css';

export default class Post extends Component{
  constructor(props){
    super(props);

    this.data = this.props.data;
    this.updatePostWithLike = this.updatePostWithLike.bind(this);
    this.updatePostWithComment = this.updatePostWithComment.bind(this);

    this.state = {
      user: this.props.user,
      liked: this.data.liked,
      likesCount: this.data.likesCount,
      commentActivate: false,
    };

    this.clientApi = new ApiClient();

  }

  updatePostWithLike(ev){
    if(ev === true){
      this.setState({
        liked: ev,
        likesCount: this.state.likesCount + 1,
      })
    }
    else{
      this.setState({
        liked: ev,
        likesCount: this.state.likesCount - 1,
      })
    };


    let sentUpdateLike = {
      'photoId': this.data.photoId,
      'likesCount': this.data.likesCount,
    };

    this.clientApi.post('api/like', JSON.stringify(sentUpdateLike)).then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  updatePostWithComment(event){
    this.setState({
        commentActivate: true,
    })
  }

  render(){
    var style = {
      backgroundImage: 'url('+this.data.photoAddress+')',
      paddingTop: '50px',
      marginTop: '25px',
      height: '700px',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      border: 'none',
      borderBottom: '1 px solid #e6e6e6',
    };

    return(
      <div className="post">
        <div className="header">
          <img className="image" src={this.data.userImage} alt="your avatar" />
          <span>{this.data.userName}</span>
        </div>
        <div className="img_cont">
          <div className="image_container" style={style} alt={this.data.photoAlr} onClick={this.Like}/>
        </div>
        <div className="content">
          <div className="button_container">
            <div className="heart">
              <Like update={this.updatePostWithLike} liked={this.data.liked}/>
            </div>
            <div className="comment">
              <CommentButton update={this.updatePostWithComment}/>
            </div>
          </div>
          <p className="likes">{this.state.likesCount} likes</p>
          <p className="caption"><span>{this.data.userName}</span> {this.data.photoBody}</p>

          {this.data.haveComment ?
            <div className="comments_container">
              <Comment comment = {this.data.endedcomment}/>
            </div>:
            null
          }
          <div className="commentInputField">
            <CommentField userid={this.state.userid}/>
          </div>
        </div>
      </div>
    )
  }
}
