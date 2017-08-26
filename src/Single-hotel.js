import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleHotel extends Component {
  render(){
    return(
      <Link to={{
        pathname:`hotels/${this.props.name}`,
        text: `${this.props.text}`
      }}>
        <div className="hotel">
          <img className="hotel__image" alt={this.props.name} src={this.props.image}/>
          <span className="hotel__name">{this.props.name}</span>
        </div>
      </Link>
    )
  }
}
