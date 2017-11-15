import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    color: 'grey',
    display: 'flex',
    flexDirection: 'column'

  },
  text: {
    border: '2px solid ',
    width: '100%',
    minWidth: '300px',
    minHeight: '200px',
    height: '150px',
    padding: '12px 20px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    backgroundColor: 'rgba(45, 59, 192, 0.39)',
    color: 'white',
    resize: 'none'
  },
  button: {
    cursor: 'pointer'
  }
}

const FormToDo = ({handleDueDateChange, handleTitleChange, addNewToDo}) => {
  return (
    <div style={style.container}>
      <div>
        <label>Date due</label>
        <input placeholder='MM/DD/YY' onChange={handleDueDateChange} />
      </div>
      <div>
        <label>To Do<button type='button' onClick={addNewToDo} style={style.button}>Submit</button></label>
        <input placeholder='What to do?' onChange={handleTitleChange} style={style.text} />
      </div>
    </div>
  )
}

FormToDo.propTypes = {
  handleDueDateChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  addNewToDo: PropTypes.func.isRequired
}
export default FormToDo
