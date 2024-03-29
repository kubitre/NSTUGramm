//import foreign libraries for our component
import React, { Component } from 'react';

//import any components needs for our component
import Comment from '../comment/comment';
import Like from '../like/like';
import CommentButton from '../commentButton/commentButton';
import CommentField from '../commentField/commentField';

//import main stylesheet of our component
import './post.css';

export default class Post extends Component{
  constructor(props){
    super(props);

    this.data = this.props.data;
    this.updatePostWithLike = this.updatePostWithLike.bind(this);
    this.updatePostWithComment = this.updatePostWithComment.bind(this);

    this.state = {
      liked: this.data.liked,
      likesCount: this.data.likesCount,
      commentActivate: false,
    };

    console.log(this.data);

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
    }

  }

  updatePostWithComment(event){
    this.setState({
        commentActivate: true,
    })
  }

  render(){
    return(
      <div className="post">
        <div className="header level">
          <div className="level-left">
            <img className="image" src={this.data.userImage} />
            <span className="username">{this.data.userName}</span>
          </div>
          <div className="img_cont">
            <img className="image_container" src={this.data.path} onClick={this.Like}/>
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
            <p className="likes">{this.state.likes} likes</p>
            <p className="caption"><span>{this.data.userName}</span> {this.data.body}</p>

            {this.data.haveComment ?
              <div className="comments_container">
                <Comment comment = {this.data.endedcomment}/>
              </div>:
              null
            }
            <div className="commentInputField">
              <CommentField />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
