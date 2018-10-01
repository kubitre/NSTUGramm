
//import main libraries needing for our component
import React, { Component } from 'react';


//import main styles for our componennt
import './userPage.css';


//imports component needing for our component
import CountBlock from './countBlock/countBlock';
import UserPhoto from './userPhoto/userPhoto';

//services
import ApiClient from '../../services/ApiClient';


export default class UserPage extends Component{
  constructor(props){
    super(props);

    this.data = this.props.user;

    this.state = {
      placeholder_posts_count: "Постов",
      placeholder_followings_count: "Подписок",
      placeholder_followers_count: "Подписчиков",
      userInfo: {
        userName: 'undefined'
      },

      userid: 1,

      postsCount: 2,
      followingsCount: 2,
      followersCount: 2,

      photos: [
        {
          id: 1,
          photoUrl: "https://images.pexels.com/photos/1049887/pexels-photo-1049887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          filterName: "test",
          countLikes: 1,
          countComments: 1,
        },
        {
          id: 2,
          photoUrl: "https://images.pexels.com/photos/1216491/pexels-photo-1216491.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          filterName: "test",
          countLikes: 15,
          countComments: 3,
        },
        {
          id: 3,
          photoUrl: "http://diarrea.eu/wp-content/uploads/2018/02/gatto-interno2-e1481812668842-678x381.jpg",
          filterName: "test",
          countLikes: 0,
          countComments: 4
        },
        {
          id: 4,
          photoUrl: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=adorable-animal-blur-617278.jpg&fm=jpg",
          filterName: "test",
          countLikes: 0,
          countComments: 5
        }
      ],
    }

    this.clientapi = new ApiClient();
  }

  fetchPhotosUser(){

  }

  componentDidMount(){
    this.clientapi.get(`api/user/${this.state.userid}`).then((user)=>{
      console.log(user);
      this.setState({
        userInfo: {
          id: user.data.id,
          userName: user.data.username,
          userImage: user.data.userImage
        },
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  render(){
    var style={
      backgroundImage: `url(${this.state.userInfo.userImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: '50%',
      border: '1px solid rgba(0,0,0,0.3)',
      width: '200px',
      height: '200px'
    }
    return(
        <div className="userpage_container">
          <div className="user_block__container">
            <div className="user_info">
              <div className="user_photo">
                <div style={style} />
              </div>
              <div className="user_name_folowers_post_info">
                <div className="username">{this.state.userInfo.userName}</div>
                <div className="block_counts">
                  <div className="post_counter">
                    <CountBlock count_placeholder={this.state.placeholder_posts_count} count={this.state.postsCount}/>
                  </div>
                  <div className="followers_counter">
                    <CountBlock count_placeholder={this.state.placeholder_followings_count} count={this.state.followingsCount}/>
                  </div>
                  <div className="followings_counter">
                    <CountBlock count_placeholder={this.state.placeholder_followers_count} count={this.state.followersCount}/>
                  </div>
                </div>
                <div className="button_follow">

                </div>
              </div>
            </div>
            <div className="user_photo_container">
                <UserPhoto key={1} userPhoto={this.state.photos[0]}/>
                <UserPhoto key={2} userPhoto={this.state.photos[1]}/>
                <UserPhoto key={3} userPhoto={this.state.photos[2]}/>
                <UserPhoto key={4} userPhoto={this.state.photos[3]}/>
                <UserPhoto key={5} userPhoto={this.state.photos[0]}/>
                <UserPhoto key={6} userPhoto={this.state.photos[1]}/>
                <UserPhoto key={7} userPhoto={this.state.photos[2]}/>
                <UserPhoto key={8} userPhoto={this.state.photos[3]}/>
                <UserPhoto key={9} userPhoto={this.state.photos[0]}/>
                <UserPhoto key={10} userPhoto={this.state.photos[1]}/>
                <UserPhoto key={11} userPhoto={this.state.photos[2]}/>
                <UserPhoto key={12} userPhoto={this.state.photos[3]}/>
                <UserPhoto key={13} userPhoto={this.state.photos[0]}/>
                <UserPhoto key={14} userPhoto={this.state.photos[1]}/>
                <UserPhoto key={15} userPhoto={this.state.photos[2]}/>
                <UserPhoto key={16} userPhoto={this.state.photos[3]}/>
            </div>
          </div>
        </div>
    );
  }
}
