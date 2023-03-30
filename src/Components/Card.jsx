import React from 'react'

const Card = ({hotel}) => {
  return (
    <div className='card'>
        <h2>{hotel.name}</h2>
        <img src={hotel.img} alt="hotel" />
        <h3>Price: {hotel.daily_price}</h3>
        <h3>Stars: {hotel.stars}</h3>
        <h3>City: {hotel.city}</h3>
        <h3>Wifi: {hotel.wifi ? 'Si': 'No' }</h3>
        <h3>Air Conditioned: {hotel.air_conditioned ? 'Si': 'No' }</h3>
        <h3>Phone: {hotel.phone}</h3>
        <h3>Emial: {hotel.email}</h3>
        <p>{hotel.description}</p>
    </div>
  )
}

export default Card