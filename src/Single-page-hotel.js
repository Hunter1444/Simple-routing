import React, { Component } from 'react';

export default class SinglePageHotel extends Component{
  render(){
    console.dir(this);
    return(
      <div>
        {this.props.match.params.hotel}<br/>
        {this.props.location.text}
      </div>
    )
  }
}
