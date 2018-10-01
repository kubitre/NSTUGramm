//imports libraries needs to our component
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//imports another component for our component
import Authentification from './components/auth/authentification';
import Main from './components/Main/Main';

//imports styles
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuth: false,
      pathTo: '/gramm'
    }
  }
  render() {
    return (
      <Router exact path="/">
        <div>
        {!this.state.isAuth ?
          <Redirect to={'/auth'} />
          :
          <Redirect to={'/gramm'} />
        }
        <Switch>
          <Route path={'/gramm'} component={Main}/>
          <Route path={'/auth'} component={Authentification}/>
        </Switch>
        </div>

      </Router>
    )
  }
}

export default App;
