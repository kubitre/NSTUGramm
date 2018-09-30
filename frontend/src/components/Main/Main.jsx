//import foreign libraries for our component
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

import Nstugramm from '../Nstugramm/nstugramm';
import userPage from '../userPage/userPage';

export default class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      userPage: false,
      userExit: false,
    };
    this.callUserPage = this.callUserPage.bind(this);
  }

  callUserPage(ev){

  }

  render(){
    return(
      <Router>
        <div className="Nstugramm">
          {this.state.userPage ?
            <Redirect to='/userPage' />
            :
            <Main />
          }
          <Switch>
            <Route path='/userPage' component={userPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
