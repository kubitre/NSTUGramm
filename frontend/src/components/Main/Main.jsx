//import foreign libraries for our component
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


import ApiClient from '../../services/ApiClient';

import Nstugramm from '../Nstugramm/nstugramm';
import Loading from '../LoadingDat/LoadingDat';
import userPage from '../userPage/userPage';

export default class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      currentUser: {},
      dataLoading: false,
      userPage: false,
      userExit: false,
    };
    this.loading;
    this.clientapi = new ApiClient();
  }

  componentDidMount(){
    this.clientapi.get(`api/user/${1}`)
    .then(response=>{
      console.log("response 2");
      this.loading = true;
      this.setState((prevState)=>{
        return{  dataLoading: !(prevState.dataLoading),
          currentUser: response.data,}
      });
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    if(this.state.dataLoading){
      this.forceUpdate();
    };
    return(
      <Router>
        <div className="Nstugramm">
          {this.state.userPage ?
            <Redirect to='/userPage' />
            :
            <Loading dataLoading={this.state.dataLoading} user={this.state.currentUser}/>
          }
          <Switch>
            <Route path='/userPage' component={userPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
