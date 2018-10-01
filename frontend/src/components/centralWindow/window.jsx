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
      photos: [
        {
        _id: 1,
        userName: "test",
        userImage: "https://cdn.trinixy.ru/pics5/20180523/highest_net_worth_01.jpg",
        photo: "https://cdn.trinixy.ru/pics5/20180420/thousand_words_01.jpg",
        alt: "Орёл!",
        body: "тут чуток текста!",
        liked: false,
        likesCount: 152,
        endedcomment: {
          haveComment: true,
          body: "endedcomment(тест)",
        },
        upVoted: true,
      },
      {
        _id: 2,
        userName: "test",
        userImage: "https://cdn.trinixy.ru/pics5/20180523/highest_net_worth_01.jpg",
        photo: "http://www.rosphoto.com/images/u/articles/1510/3_13.jpg",
        alt: "Орёл!",
        body: "ВАУ!! ЭТО СУПЕР!!!",
        endedcomment: {
          haveComment: true,
          body: "test comment",
        },
        likesCount: 23,
        upVoted: true,
      },
    ],
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
        "photos": photos.data
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
          <Post key={pst._id} data={pst} />
        )}
      </div>
    );
  }
}
