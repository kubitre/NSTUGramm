//imports main libraries need for our component
import React, { Component } from 'react';

import ApiClient from '../../services/ApiClient';

//import stylesheet for our component
import './commentField.css';

export default class CommentField extends Component{
  constructor(props){
    super(props);
    this.state = {
      userid: this.props.userid,
      placeholderComment: "введите здесь ваш комментарий",
      value_comment: '',
    }
    this.handleSubmitSend = this.handleSubmitSend.bind(this);
    this.handleValidateInputText = this.handleValidateInputText.bind(this);

    this.clientapi = new ApiClient();
  }

  handleValidateInputText(event){
    this.setState({
      value_comment: event.target.value
    });
  }

  handleSubmitSend(event){

    let comment = {
      userid: this.state.userid,
      content: this.state.value_comment
    };

    console.log(comment);

    event.preventDefault();
  }

  render(){
    return(
      <div className="form">
        <input className="input_field" type="text" placeholder={this.state.placeholderComment} onChange={this.handleValidateInputText}/>
        <div className="button" onClick={this.handleSubmitSend}/>
      </div>
      // <form onSubmit={this.handleSubmitSend} className="sending_comment_form">
      //   <input className="input_field" type="text" placeholder={this.state.placeholderComment}/>
      //   <input type="submit" className="sendButton" value=""/>
      // </form>
    );
  }
}
