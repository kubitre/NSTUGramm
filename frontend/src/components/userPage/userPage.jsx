
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


      followingsCount: 1,
      followersCount: 0,

      photos: [
        {
          id: 1,
          path: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100"
        },
        {
          id: 2,
          path: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg"
        },
        {
          id: 3,
          path: "https://cdn.cnn.com/cnnnext/dam/assets/150324154010-04-internet-cats-restricted-super-169.jpg"
        },
        {
          id: 4,
          path: "https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg"
        }
        ,
        {
          id: 5,
          path: "https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg"
        }
      ]
      ,
      postsCount: 5,
    }
    
    this.clientapi = new ApiClient();
  }

  fetchPhotosUser(){
    this.clientapi.get(`api/photo/${this.state.userid}`).then((photos)=>
    {
      this.setState({
        photos: photos.data
      });
    })
    .catch(err=>{
      console.log("err: " + err);
    })
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

    if(this.state.userid){
      this.clientapi.get(`api/photo/${this.state.userid}`).then((photos)=>{
        this.setState({
          photos: photos.data
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
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
    console.log("userPage:");
    console.log(this.state.photos);
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
                  <UserPhoto key={0} userPhoto={this.state.photos[0]}/>
                  <UserPhoto key={1} userPhoto={this.state.photos[1]}/>
                  <UserPhoto key={2} userPhoto={this.state.photos[2]}/>
                  <UserPhoto key={3} userPhoto={this.state.photos[3]}/>
                  <UserPhoto key={4} userPhoto={this.state.photos[4]}/>
            </div>
          </div>
        </div>
    );
  }
}
