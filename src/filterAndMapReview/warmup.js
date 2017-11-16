const classes = [
  {
    name: 'Knitting for Beginners',
    length: 3,
    cost: 50,
    instructor: 'Suzy Moxley',
    location: 'Beads, Yarns and Threads'
  },
  {
    name: 'How to Tie a Tie',
    length: 1,
    cost: 100,
    instructor: 'Dr. Johnson',
    location: 'UC - 2nd floor, Room 101'
  },
  {
    name: 'Basket Weaving',
    length: 5,
    cost: 300,
    instructor: 'Phylis Taylor',
    location: 'Online'
  },
  {
    name: 'Intro to Guitar',
    length: 3,
    cost: 0,
    instructor: 'Professor Anderson',
    location: 'Music Building, Room 406'
  },
  {
    name: 'How to make Royal Icing for Sugar Cookies',
    length: 2,
    cost: 20,
    instructor: 'Ms. ButterBottom',
    location: 'The Good Food Store'
  },
  {
    name: 'FREE Resume Building Course',
    length: 2,
    cost: 0,
    instructor: 'Professor Haslam',
    location: 'UC - main floor'
  }
]
const mapNames = (arr) => { // /////// const mapNames = () => {
  return arr.map(item => { // ////////   return classes.map(item => {
    return item.name // //////////////     return item.name
  })// ///////////////////////////////   })
} // ///////////////////////////////// }
// console.log(mapNames(classes)) // //// console.log(mapNames()) 

const mapInfo = () => {
  return classes.map(info => {
    return `${info.name} is ${info.length} hours, cost ${info.cost} and is located ${info.location}`
  })
}
// console.log(mapInfo())

const freeClasses = classes.filter(free => {
  return free.cost === 0
}).map(i => {
  return i.name
})
// console.log(freeClasses)

const onlineClasses = classes.filter(online => {
  return online.location === 'Online'
}).map(i => {
  return i.name
})
// console.log(onlineClasses)

const goodClasses = classes.filter(good => {
  return good.length < 3 && good.cost <= 50
}).map(i => {
  return i.name
})
// console.log(goodClasses)
