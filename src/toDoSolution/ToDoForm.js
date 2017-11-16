import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(73, 8, 8, 0.685)',
    width: '80vw',
    border: '1px black solid',
    padding: 20,
    borderRadius: 3
  },
  fieldHolder: {
    display: 'flex'
  },
  field: {
    border: '3px solid purple',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '40vw'
  },
  button: {
    cursor: 'pointer',
    width: 150
  },
  input: {
    padding: '15px',
    borderRadius: '20px'
  }
}
const ToDoForm = ({addToDo, title, dueDate, updateDueDate, updateTitle}) => {
  return (
    <form style={style.container}>
      <div style={style.fieldHolder}>
        <div style={style.field}>
          <lable>Title</lable>
          <input style={style.input} type='text' value={title} onChange={updateTitle} />
        </div>
        <div style={style.field}>
          <lable>Date Due</lable>
          <input style={style.input} type='date' className='fa fa-calendar' value={dueDate} onChange={updateDueDate} />
        </div>
      </div>
      <div>
        <button style={style.button}type='button' onClick={addToDo}>Submit</button>
      </div>
    </form>
  )
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  updateDueDate: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}
export default ToDoForm
