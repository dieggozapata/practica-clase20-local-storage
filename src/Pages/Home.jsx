import React from 'react'
import ViewLeft from '../Components/ViewLeft'
import ViewRight from '../Components/ViewRight'
const Home = ({hoteles}) => {
  return (
    <div>
      <ViewLeft hoteles={hoteles} />
      <ViewRight />
    </div>
  )
}

export default Home