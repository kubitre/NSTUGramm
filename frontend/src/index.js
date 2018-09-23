import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}/>
    <Route path="/userpage" component={userPage}/>
    <Route path="/photo" component={photoPage}/>
    <Route path="/login" component={login}/>
    <Route path="/register" component={register}/>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
