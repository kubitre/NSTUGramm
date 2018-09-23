//imports main libraries need for our component
import React, { Component } from 'react';

//import stylesheet for our component
import './commentField.css';

export default class CommentField extends Component{
  constructor(props){
    super(props);
    this.state = {
      placeholderComment: "введите здесь ваш комментарий",
      value_comment: '',
    }
    this.handleSubmitSend = this.handleSubmitSend.bind(this);
  }

  handleSubmitSend(event){
    console.log("")
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmitSend} className="sending_comment_form">
        <input className="input_field" type="text" value={this.state.value_comment} placeholder={this.state.placeholderComment}/>
        <input type="submit" className="sendButton"/>
      </form>
    );
  }
}
