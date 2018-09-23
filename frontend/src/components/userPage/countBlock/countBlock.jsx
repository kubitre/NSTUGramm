//import main libraries for our compoennt
import React, { Component } from 'react';

//import main stylesheet for our compoennt
import './countBlock.css';

export default class CountBlock extends Component{
  constructor(props){
    super(props);

    this.state = {
      count_placeholder: this.props.count_placeholder,
      data_counter: this.props.count,
    };
  }

  render(){
    return(
      <div className="count_block_">
        <span className="count_info">
          {this.state.data_counter}
        </span>
        <span className="text_block">
          {this.state.count_placeholder}
        </span>
      </div>
    );
  }
}
