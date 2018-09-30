import React, { Component } from 'react';

import './userPhoto.css';

import Like from '../../like/like';

export default class UserPhoto extends Component{
  constructor(props){
    super(props);
    console.log(this.props.userPhoto);
    this.state = {
      open: false,
      userPhoto: this.props.userPhoto
    };

    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);

  }
    // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true,
      })
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false
      })
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render(){
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: '62vw',
        height: '62vw',
        backgroundImage: `url(${this.props.userPhoto.photoUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none'
      };
    } else {
      tileStyle = {
        width: '18vw',
        backgroundImage: `url(${this.props.userPhoto.photoUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '16vw'
      };
    }

    return(
        <div className="user_photo">
          <div onMouseEnter={this._mouseEnter} onMouseLeave={this._mouseLeave} onClick={this._clickHandler} alt="u photo" style={tileStyle}/>
          {this.state.isHover ?
            <div className="hover_info_photo">
              <div className="likes_container">
                <Like checked={false} update={this.updateCountLikes}/>
              </div>
            </div>
            :
            null
          }
        </div>
    )
  }
}
