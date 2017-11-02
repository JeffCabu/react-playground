import React, {Component} from 'react'

const Counter = ({count, sayHello, increaseCount, decreaseCount, resetCount}) => {
  return (
    <div>
      <p> Count : {count} </p>
      <button onClick={sayHello}> Say Hello </button>
      <button onClick={increaseCount}> Increase Count </button>
      <button onClick={decreaseCount}> Decrease Count </button>
      <button onClick={resetCount}> Reset Count </button>
    </div>
  )
}

class SmartApp extends Component {
  state = {
    count: 10
  }
  sayHello = () => {
    alert('Thanks for clicking me')
  }
  increaseCount = () => {
    this.setState({ count: this.state.count += 1 })
  }
  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count -= 1 })
    } else {
      alert('can not set count below 0')
    }
  }
  resetCount = () => {
    this.setState({ count: this.state.count = 0 })
  }
  handleCountInputChange = (event) => {
    console.log('You Entered:', event.target.value)
    const updatedCount = Number(event.target.value)
    this.setState({ count: updatedCount })
  }
  render () {
    return (
      <div>
        <div>
          <div>
            <h3>Enter a number to begin</h3>
            <input
              onChange={this.handleCountInputChange}
              type='Number'
              placeholder='please enter number to begin'
            />
          </div>
          <div>
            <Counter
              count={this.state.count}
              sayHello={this.sayHello}
              increaseCount={this.increaseCount}
              decreaseCount={this.decreaseCount}
              resetCount={this.resetCount}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default SmartApp
