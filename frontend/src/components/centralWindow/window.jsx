//import foreign libraries for our component
import React, { Component } from 'react';

//import stylesheet main of our component
import './window.css';

//Component
import Post from '../post/post';

//import service
import ApiClient from '../../services/ApiClient';

export default class Window extends Component{
  constructor(props){
    super(props);

    this.state = {
      photos: [],
    }
    this.clientApi = new ApiClient();
  }

  componentWillMount(){
    console.log("Start api request!");
    const options = {
      'params': {
        'filter': {
          'limit': 50,
          'offset': 0,
        }
      }
    };
    this.clientApi.get('api/photo', options).then((photos)=>{
      console.log(photos);
      this.setState({
        photos: photos.data
      });
      console.log(this.state.photos);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  render(){
    return(
      <div className="Posts">
        {this.state.photos.map((pst)=>
          <Post key={pst.photoId} data={pst} />
        )}
      </div>
    );
  }
}
