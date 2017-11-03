import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Jumbotron from './Jumbotron'
import Customers from './Customers'
import CardMap from './CardMap'
// import Test from './Test'
import Company from './Company'

const App = ({data}) => {
  return (
    <div className='page'>
      <Jumbotron
        title={data.company[0].title}
      />
      <Customers
        list={'Something goes here'}
      >
        <div className='customerCardContainer'>
          <CardMap
            arr={data.customers}
          />
        </div>
      </Customers>
      <Company
        title={data.company[0].title}
        street={data.company[0].street}
        city={data.company[0].city}
        state={data.company[0].state}
        zip={data.company[0].zip}
        phoneNumber={data.company[0].phoneNumber}
      />
      {/* {<Test
      />} */}
    </div>
  )
}

App.propTypes = {
  data: PropTypes.object.isRequired
}

export default App
