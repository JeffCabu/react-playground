import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Jumbotron from './Jumbotron'
import Customers from './Customers'
import CustomerCard from './CustomerCard'
import CardMap from './CardMap' // <<<<testing
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
          {/* vvvvvv-testing-vvvvvv */}
          <CardMap
            arr={data.customer}
          />
          {/* ^^^^^^-testing-^^^^^^ */}

          {/* <div className='zeroCard'>
            <CustomerCard
              img={data.customers[0].img}
              name={data.customers[0].name}
              email={data.customers[0].email}
            />
          </div>
          <div className='oneCard'>
            <CustomerCard
              name={data.customers[1].name}
              email={data.customers[1].email}
              img={data.customers[1].img}
            />
          </div>
          <div className='twoCard'>
            <CustomerCard
              name={data.customers[2].name}
              email={data.customers[2].email}
              img={data.customers[2].img}
            />
          </div>
          <div className='threeCard'>
            <CustomerCard
              name={data.customers[3].name}
              email={data.customers[3].email}
              img={data.customers[3].img}
            />
          </div>
          <div className='fourCard'>
            <CustomerCard
              name={data.customers[4].name}
              email={data.customers[4].email}
              img={data.customers[4].img}
            />
          </div>
          <div className='fiveCard'>
            <CustomerCard
              name={data.customers[5].name}
              email={data.customers[5].email}
              img={data.customers[5].img}
            />
          </div> */}
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
