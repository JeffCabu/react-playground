import React, { Component } from 'react'
import ListArray from './ListArray'
import ToDos from './ToDos'
import Jumbotron from './Jumbotron'
import Completed from './Completed'
import FormToDo from './FormToDo'

const style = {
  jumbotron: {
    border: '1px white solid',
    // opacity: '.5',
    textAlign: 'center',
    width: '100%'
  },

  finishedContainer: {
    border: 'red solid 1px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  toDoContainer: {
    border: '2px green solid',
    background: 'rgba(161, 159, 159, 0.4)'
  },
  completed: {
    border: '2px green solid',
    background: 'rgba(161, 159, 159, 0.4)'
  }
}
export default class componentName extends Component {
  state = {
    toDos: undefined,
    dueDate: undefined,
    title: undefined,
    addNewToDo: undefined
  }
  componentDidMount () {
    const list = ListArray.list
    this.setState({ toDos: list })
  }

  handleDueDateChange = (e) => {
    this.setState({ dueDate: e.target.value })
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  addNewToDo = (e) => {
    e.preventDefault()
    const newToDo = {title: this.state.title, dueDate: this.state.dueDate}
    const newToDoList = this.state.toDos
    newToDoList.push(newToDo)
    this.setState({ toDos: newToDoList })
  }
  // if nothing is in is enterd in both "duedate" and "todomessage" then you cannot submit 
  render () {
    return (
      <div>
        <div style={style.jumbotron}>
          <Jumbotron />
        </div>
        <div style={style.finishedContainer}>
          <div style={style.toDoContainer}>
            <h2>Uncompleted Tasks</h2>
            {
              this.state.toDos
                ? <ToDos toDo={this.state.toDos} />
                : <h1>Nothing to do!</h1>
            }
          </div>
          <div>
            <FormToDo
              handleDueDateChange={this.handleDueDateChange}
              handleTitleChange={this.handleTitleChange}
              addNewToDo={this.addNewToDo}
            />
          </div>
          <div style={style.completed}>
            <h2>Completed</h2>
            <Completed />
          </div>
        </div>
      </div>
    )
  }
}
