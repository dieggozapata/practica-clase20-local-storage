import React from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import Card from '../Components/Card'
const Details = ({hoteles}) => {  
  const navigate= useNavigate()
  const {name} = useParams()
  const hotel = hoteles.find(hotel => hotel.name == name)  
  return (
    <div>      
      <Card hotel = {hotel} />
      <button onClick={ () => navigate(-1)}>Atrás</button>
    </div>
  )
}

export default Details