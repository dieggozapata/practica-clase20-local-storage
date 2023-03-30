import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalStates } from '../Context/Context'
const ViewLeft = ({hoteles}) => {    
    const {setValorStorage} = useGlobalStates()
    const handleClick = (event) => {
        event.preventDefault()
        const hotelSeleccionado = event.target.value
        let valorLocalStorage = localStorage.getItem('hotel')        
        if (!valorLocalStorage ){            
            setValorStorage(hotelSeleccionado)
            localStorage.setItem('hotel',hotelSeleccionado)
        }else{
            valorLocalStorage = localStorage.getItem('hotel').split("|")
            if (!valorLocalStorage.includes(hotelSeleccionado)){
                valorLocalStorage.push(hotelSeleccionado)
                setValorStorage(valorLocalStorage)
                localStorage.setItem('hotel',valorLocalStorage.join("|"))
            }            
        }
    }
  return (
    <div>
        <h2>Hoteles Disponibles</h2>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Stars</th>
            <th>Detail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {hoteles.map((hotel, key) => {
            return (
              <tr key={key}>
                <td>{hotel.name}</td>
                <td>{hotel.city}</td>
                <td>{hotel.stars}</td>
                <td><Link to={'/details/' + hotel.name}>Ver</Link></td>
                <td><button value={hotel.name} onClick={handleClick}>Adicionar</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ViewLeft