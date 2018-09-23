//imports libraries needs to our component
import React, { Component } from 'react';


//imports another component for our component
import Authentification from './components/auth/authentification';
import Nstugramm from './components/Nstugramm/nstugramm';

//imports styles
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuth: false,
    }
  }
  render() {
    return (
      this.state.isAuth ?
          <Authentification />
          :
          <Nstugramm />

    )
  }
}

export default App;
