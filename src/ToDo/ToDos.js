import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '2px solid black',
    width: '300px'
  },
  dateAndCompelte: {
    // border: '2px solid blue',
    display: 'flex',
    flexDirectin: 'row',
    maxHeight: '30px'
  },
  title: {
    // border: '2px solid red',
    borderTop: '2px solid grey',
    marginTop: '1px',
    maxWidth: '300px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  date: {
    // border: '2px solid purple',
    maxHeight: '21px',
    width: '100px',
    margin: '0'
  },
  uncompleted: {
    // border: '2px solid purple',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '200px',
    maxHeight: '21px',
    margin: '0',
    hover: '(backgroundColor: green)', // make hover work
    cursor: 'pointer'
  }
}
// line 45: figure out how to make the cursor: pointer for both the check box and the "Task complete".
// 45 continued: figure out how to make the task complete also check the box when clicked. 
// " " make it fade out but not completely after being checked. also input the time it was completed.
const ToDos = ({toDo}) => {
  return (
    <div>
      {
        toDo.map(dos => {
          return (
            <div style={style.container}>
              <div style={style.dateAndCompelte}>
                <p className='fa fa-calendar'style={style.date}>{dos.dueDate}</p>
                <div>
                  <lable style={style.uncompleted}>Task complete<input type='checkbox' value='' /></lable>
                </div>
                {/* {<p >{dos.complete}</p>} */}
              </div>
              <div>
                <p style={style.title}>{dos.title}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

ToDos.propTypes = {
  toDo: PropTypes.array.isRequired
}
export default ToDos
