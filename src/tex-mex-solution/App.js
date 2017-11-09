import React from 'react'
import data from '../mexicanRestaurant/data'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

const TexMexSolution = () =>
  <div>
    <RestaurantInfo
      name={data.company[0].title}
      address={data.address}
      phone={data.phone}
    />
    <MenuContainer />
  </div>

export default TexMexSolution
