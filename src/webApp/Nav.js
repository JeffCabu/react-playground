import React from 'react'
import Link from './Link'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'question-circle-o'} name={'ABOUT'} />
      <Link icon={'btc'} name={'PRODUCTS'} />
      <Link icon={'address-book'} name={'CONTACT'} />
    </nav>
  )
}

export default NavigationBar
