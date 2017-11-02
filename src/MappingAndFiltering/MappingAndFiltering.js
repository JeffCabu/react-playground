import React from 'react'

const AllNames = ({names}) => {
  const filteredNames = names.filter(name => {
    return name.length === 4
  })
  const mappedNames = filteredNames.map(name => {
    return <li>{name}</li>
  })
  return (
    <div>
      <ul>
        {
          mappedNames
        }
      </ul>
    </div>
  )
}

const NumbersComponent = ({numbers}) => {
  const filteredNumbers = numbers.filter(number => {
    return number > 30 && number < 70
  })
  const mappedNumbers = filteredNumbers.map(number => {
    return <p>{number}</p>
  })
  return (
    <div>
      {
        mappedNumbers
      }
    </div>
  )
}

const DisplayBooks = ({books}) => {
  const mappedBooks = books.map(book => {
    return (
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    )
  })
  return (
    <div>
      {
        mappedBooks
      }
    </div>
  )
}
const MappingAndFiltering = ({Data}) => {
  return (
    <div>
      <AllNames names={Data.names} />
      <NumbersComponent numbers={Data.numbers} />
      <DisplayBooks books={Data.books} />
    </div>
  )
}

export default MappingAndFiltering
