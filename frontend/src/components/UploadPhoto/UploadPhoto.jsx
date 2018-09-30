//import main libraries for React
import React, {Component} from 'react';
import classNames from 'classnames/bind';

import './UploadPhoto.css';

import addButton from './addButton.png';
import exitButton from './exitButton.png';

import FilterCarousel from '../FilterCarousel/FilterCarousel';


export default class UploadPhoto extends Component{
  constructor(props){
    super(props);

    this.state={
      addNewPhoto: false,
      photoLoaded: false,
      FileUploading: false,
      image: {
        src: '',
        alt: '',
        body: ''
      }

    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handlerExit = this.handlerExit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  onChangeInput(event){
    console.log(event);
  }

  handlerExit(event){
    this.setState({
      addNewPhoto: false,
      photoLoaded: false,
      image: {},
      FileUploading: false
    })
  }

  handleClick(event){
    this.setState({
      addNewPhoto: true
    })
  }

  submitForm(event){
    event.preventDefault();

  }

  fileUploade(image){

  }

  createImage(file){
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        image: {
          src: e.target.result,
        },
        photoLoaded: true
      });
    };
    reader.readAsDataURL(file);
    console.log(this.state.image);
  }

  onChange(event){
    let files = event.target.files || event.dataTransfer.files;
    if(!files.length){
      return;
    }
    this.createImage(files[0]);
  }

  render(){
    return (
      <div className={classNames("container", {'withBack': this.state.addNewPhoto})}>
        {this.state.addNewPhoto ?
          <div className={classNames("uploadContainer", {'download': this.state.FileUploading})}>
            <div className="ContainerWithFormAnButton">
              <form className="form" onSubmit={this.submitForm}>
                <h1>Upload image and enter filter type</h1>
                <input type="text" name="body" placeholder="body" onChange={this.onChangeInput}/>
                <input type="text" name="alt" placeholder="alt"/>
                <div className="uploadingNewPhoto">
                  <input  type="file" onChange={this.onChange}/>
                </div>
                <button type="submit">Upload</button>
              </form>
              <div className="ExitButton" onClick={this.handlerExit}>
                <img src={exitButton} />
              </div>
            </div>
            {this.state.photoLoaded ?
              <div className="photoContainer">
                <FilterCarousel image={this.state.image}/>
              </div>
              :
              null
            }
          </div>
          :
          <div className="addImage" onClick={this.handleClick}>
            <img src={addButton} />
          </div>
        }
      </div>
    );
  }
}
