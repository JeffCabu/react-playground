import React from 'react'
import PropTypes from 'prop-types'
import ContentItems from './ContentItems'
const cardStyle = {
  flex: {
    border: '2px solid green',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    borderBottom: 'black 2px solid',
    textAlign: 'center'
  }
}
const FoodCard = ({items}) => {
  return (
    <div>
      <div>
        <h2 style={cardStyle.title}>Amazing Appetizers</h2>
        <div style={cardStyle.flex}>
          {
            items.filter(item => {
              return item.category === 'Amazing Appetizers'
            }).map(i => {
              return <ContentItems items={i} />
            })
          }
        </div>
        <h2 style={cardStyle.title}>Incredible Entrees</h2>
        <div style={cardStyle.flex}>
          {
            items.filter(item => {
              return item.category === 'Incredible Entrees'
            }).map(i => {
              return <ContentItems items={i} />
            })
          }
        </div>
        <h2 style={cardStyle.title}>Spicy Spcials</h2>
        <div style={cardStyle.flex}>
          {
            items.filter(item => {
              return item.category === 'Spicy Specials'
            }).map(i => {
              return <ContentItems items={i} />
            })
          }
        </div>
        <h2 style={cardStyle.title}>Delicious Desserts</h2>
        <div style={cardStyle.flex}>
          {
            items.filter(item => {
              return item.category === 'Delicious Desserts'
            }).map(i => {
              return <ContentItems items={i} />
            })
          }
        </div>
      </div>
    </div>
  )
}

FoodCard.propTypes = {
  items: PropTypes.string.isRequired
}
export default FoodCard
// items.filter(items => {
//           return <ContentItems items={items.category === 'spiceLevel'} />
//        }).map((items) => {
//   return <ContentItems items={items} />
// })

// items.map((items) => {
//   return <ContentItems items={items} />
// })

// const categoryS = items.filter(item => {
//   return item.category === 'Spicy Specials'
// }).map(i => {
//   return i
// })
// console.log(categoryS)
