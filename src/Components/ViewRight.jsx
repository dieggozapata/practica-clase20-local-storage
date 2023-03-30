import React, { useEffect } from 'react'
import { useGlobalStates } from '../Context/Context'

const ViewRight = () => {
    const {setValorStorage} = useGlobalStates()
    let valorLocalStorage = localStorage.getItem('hotel')    
    if (valorLocalStorage ){                   
        valorLocalStorage = localStorage.getItem('hotel').split("|")                          
    }

    const handleClick = (event) => {
        event.preventDefault()       
        const hotelSeleccionado = event.target.value
        valorLocalStorage = localStorage.getItem('hotel').split("|")       
        const valorNuevoStorage = valorLocalStorage.filter( valor => valor != hotelSeleccionado)        
        localStorage.setItem('hotel',valorNuevoStorage.join("|"))        
        setValorStorage(valorNuevoStorage)
    }           

  return (
    <div>
        {valorLocalStorage &&
            <div>
                    <h2>Hoteles Seleccionados</h2>
                    <table>
                    <thead>
                    <tr>
                        <th>Name</th>          
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {valorLocalStorage.map((hotel, key) => {
                        return (
                        <tr key={key}>
                            <td>{hotel}</td>                
                            <td><button value={hotel} onClick={handleClick}>Borrar</button></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        }
    </div>
  )
}

export default ViewRight