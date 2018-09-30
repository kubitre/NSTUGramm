//import foreign libraries for our component
import React, { Component } from 'react';
import classNames from 'classnames/bind';

//import stylesheets
import './like.css';

export default class Like extends Component{
  constructor(props){
    super(props);

    this.state = {
      checked: this.props.liked,
    }

    this.liked = this.liked.bind(this);
  }

  liked(event){
    if(!this.state.checked){
      this.setState({
        checked: true
      })
      this.props.update(true);
    }
    else{
        this.setState({
          checked: false,
        })
        this.props.update(false);
    }
  }

  render(){
    return (
      <div className="hear_container">
        <button className={classNames("font_for_like toggle-icon", {'-checked': this.state.checked})} onClick={this.liked} title="❤ Понравилось?"/>
      </div>
    );
  }
}
