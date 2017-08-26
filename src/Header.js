import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component{
  render(){
    return(
      <div>
        <ul className="header">
          <li><NavLink exact to='/'>Главная</NavLink></li>
          <li><NavLink to='/hotels'>Отели</NavLink></li>
        </ul>
      </div>
    )
  }
}
