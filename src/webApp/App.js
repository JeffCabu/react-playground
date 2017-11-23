import React from 'react'
import faker from 'faker'
import './index.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './Nav'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Jumbotron} />

        <NavigationBar />
        <Jumbotron
          title={faker.name.title()}
          desc={faker.lorem.sentence()}
        />
        <Section
          sectionStyle='about'
          title={'About Us'}
          content={'This is the best about section'}
        />
        <Section
          sectionStyle='services'
          title={'Services'}
          content={'We have a ton of services that we will not name them all'}
        >
          <div className='servicesCardHolder'>
            <ServicesCard
              title={'Service Title'}
              details={'Not much to say, just look around'}
            />

            <ServicesCard
              title={'Service Title'}
              details={'Not much to say, just look around'}
            />

            <ServicesCard
              title={'Service Title'}
              details={'Not much to say, just look around'}
            />

            <ServicesCard
              title={'Service Title'}
              details={'Not much to say, just look around'}
            />
          </div>
        </Section>

        <Section
          sectionStyle='products'
          title={'Products'}
          content={'Just wish for anything and we have it'}
        >
          <div className='productCardContainer'>
            <ProductCard
              product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
            <ProductCard
              product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
            <ProductCard
              product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
            <ProductCard
              product={faker.commerce.product()}
              price={faker.commerce.price()}
              img={faker.random.image()}
            />
          </div>
        </Section>
      </div>
    </Router>
  )
}

export default App
