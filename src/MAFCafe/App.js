import React from 'react'
import Data from './Data'
import DrinkList from './DrinkList'
// import DrinkItem from './DrinkItem'

const App = () => {
  const classicEspresso = Data.filter(item => {
    return item.category === 'Classic Espresso Drinks'
  })
  const signatureEspresso = Data.filter(item => {
    return item.category === 'Signature Espresso Drinks'
  })
  const noMilk = Data.filter(item => {
    let itemArray = item.beveragePrep.split(' ')
    return itemArray[itemArray.length - 1] !== 'Milk'
  })
  // const test = Data.filter(item => {
  //   let itemArray = item.beveragePrep.split(' ')
  //   return itemArray[itemArray.legnth - 1] !== '\u00ae'
  // })
  console.log(classicEspresso)
  return (
    <div>
      {
        classicEspresso.map(item => {
          return (
            <div>
              {/* <h2>Classic Espresso</h2>
              <DrinkList data={classicEspresso} />
              <h2>Signature Espresso</h2>
              <DrinkList data={signatureEspresso} /> */}
              {/* <DrinkItem /> */}
              {/* <p>{item.beveragePrep}</p> */}

              <DrinkList data={noMilk} />

            </div>
          )
        })
      }
    </div>
  )
}

export default App
