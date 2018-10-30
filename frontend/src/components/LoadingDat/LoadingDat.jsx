import React, { Component } from 'react';

import Nstugramm from '../Nstugramm/nstugramm';
import ClipLoader from 'react-spinners/ClipLoader';

export default class Loading extends Component{
  constructor(props){
    super(props);

    this.state = {
      dataLoading: this.props.dataLoading,
      currentUser: this.props.user,
      menu_small: false,
    };

    this.callUserPage = this.callUserPage.bind(this);
  }

  callUserPage(ev){
    if(ev === 1){
      this.setState({
            userPage: true
      });
    }
  }

  render(){
    console.log(this.state.dataLoading);
    return(
      <div>
        {this.state.dataLoading ?
            <Nstugramm updateWindow={this.callUserPage} user={this.state.currentUser} dataLoading={this.state.dataLoading} updateWindow={this.props.redirectToUserPage}/>
          :
            <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={!this.state.dataLoading}
          />
        }
      </div>
    )
  }
}
