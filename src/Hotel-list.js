import React, { Component } from 'react';
import SingleHotel from './Single-hotel';

var hotels = [
  {
    hotelName: 'Miami',
    img: 'https://relax-irey.ru/sites/default/files/gallery/resh-400_0.jpg',
    text: 'Что то об отеле №1'
  },
  {
    hotelName: 'Moscow',
    img: 'http://www.zimaletta.com.ua/ufiles/hotels/photos/sherwood4-345.jpg',
    text: 'Что то об отеле №2'
  }
]

export default class HotelList extends Component {
  render(){

    var singleHotels = hotels.map(function(item, index){
      return <SingleHotel key={index} text={item.text} image={item.img} name={item.hotelName}/>
    })

    return(
      <div className="hotel-list">
        {singleHotels}
      </div>
    )
  }
}
