import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, id, complete, markComplete}) => {
  return (
    <div>
      <button type='button' onClick={markComplete} id={id}>
        {
          complete
            ? 'Mark as Incomplete'
            : 'Mark as Complete'
        }</button>

      <p>{title}</p>
      <p>{dueDate}</p>
      <p>{complete}</p>
    </div>
  )
}

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default ToDo
