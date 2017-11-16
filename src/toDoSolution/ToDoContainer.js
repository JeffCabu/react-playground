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
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    console.log(toDos, 'localStorage toDos')
    this.setState({toDos: toDos})
    setTimeout(() => {
      this.sortByCompleted()
    }, 3000)
  }
  // this.setState is A-sync (top => down)
  updateTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  updateDueDate = (e) => {
    this.setState({ dueDate: e.target.value })
  }
  addToDo = (e) => {
    e.preventDefault()
    const allToDo = this.state.toDos
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos.length + 1
      }
      allToDo.push(newToDo)
      this.setState({ toDos: allToDo })
      this.sortByCompleted()
      localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
      alert('This item has been added')
      this.setState({ title: '', dueDate: '' })
    } else {
      alert('Cannot have Title or Due Date')
    }
  }
  sortByCompleted = () => {
    const completed = this.state.toDos.filter(item => item.complete)
    const incomplete = this.state.toDos.filter(item => !item.complete)
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
        <div>
          {
            this.state.toDos
              ? (
                <div style={style.toDosList}>
                  <ToDoList toDos={this.state.completed}
                    markComplete={this.markComplete}
                    title='Task/s Completed' />
                  <ToDoList toDos={this.state.incomplete}
                    markComplete={this.markComplete}
                    title='Incomplete Task/s' />
                </div>
              )
              : 'Loading'
          }
        </div>
      </div>
    )
  }
}
