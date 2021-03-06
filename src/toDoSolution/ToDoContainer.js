import React, { Component } from 'react'
import ToDosForm from './ToDoForm'
import ToDoList from './ToDoList'

const style = {
  toDosList: {
    display: 'flex'

  }
}
export default class ToDo extends Component {
  state = {
    toDos: undefined,
    title: undefined,
    dueDate: undefined,
    completed: [],
    incomplete: []
  }
  componentDidMount () {
    const toDos = JSON.parse(localStorage.getItem('toDos')) || []
    console.log(toDos, 'localStorage toDos')
    this.setState({toDos: toDos})
    setTimeout(() => {
      this.sortByCompleted()
    }, 1000)
  }
  updateTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  updateDueDate = (e) => {
    this.setState({ dueDate: e.target.value })
  }
  addToDo = (e) => {
    e.preventDefault()
    const allToDo = this.state.toDos || []
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos
          ? this.state.toDos.length + 1
          : 1
      }
      allToDo.push(newToDo)
      this.setState({ toDos: allToDo })
      localStorage.setItem('toDos', JSON.stringify(allToDo))
      alert('This item has been added')
      this.setState({ title: '', dueDate: '' })
      this.sortByCompleted()
    } else {
      alert('Cannot have Title or Due Date')
    }
  }
  sortByCompleted = () => {
    console.log(this.state.toDos)
    const completed = this.state.toDos
      ? this.state.toDos.filter(item => item.complete)
      : []
    const incomplete = this.state.toDos
      ? this.state.toDos.filter(item => !item.complete)
      : []
    this.setState({ completed: completed, incomplete: incomplete })
  }
  markComplete = (e) => {
    const theToDo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theToDo)
    theToDo.complete = !theToDo.complete
    this.sortByCompleted()
  }
  resetToDos = () => {
    this.setState({ toDos: [], completed: [], incomplete: [] })
    localStorage.clear()
  }
  deleteToDo = (e) => {
    const theToDo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theToDo)
    const newArray = this.state.toDos.filter(item => {
      return item.id !== theToDo.id
    })
    console.log(newArray)
    this.setState({ toDos: newArray })
    localStorage.setItem('toDos', JSON.stringify(newArray))
    setTimeout(() => {
      this.sortByCompleted()
    }, 1000)
  }

  render () {
    return (
      <div>
        <ToDosForm
          addToDo={this.addToDo}
          title={this.state.title}
          dueDate={this.state.dueDate}
          updateDueDate={this.updateDueDate}
          updateTitle={this.updateTitle}
        />
        <small>If you see "Nothing to do" Click the "Clear all to do" button once to begin.</small>
        <button type='button' onClick={this.resetToDos}>Clear all to do</button>
        <div>
          {
            this.state.toDos
              ? (
                <div style={style.toDosList}>
                  <ToDoList toDos={this.state.completed}
                    markComplete={this.markComplete}
                    deleteToDo={this.deleteToDo}
                    title='Task/s Completed' />
                  <ToDoList toDos={this.state.incomplete}
                    markComplete={this.markComplete}
                    deleteToDo={this.deleteToDo}
                    title='Incomplete Task/s' />
                </div>
              )
              : 'Nothing to do'
          }
        </div>
      </div>
    )
  }
}
