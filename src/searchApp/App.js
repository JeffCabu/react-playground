import React, { Component } from 'react'
import data from './sentences'
// import algorithm from './algorithm'

class App extends Component {
  state = {
    sentences: undefined,
    searchTerm: undefined
  }
  componentDidMount = () => {
    this.setState({ sentences: data.sentences })
  }
  reset = () => {
    this.setState({ sentences: data.sentences, searchTerm: '' })
  }
  handleSearchTermChange = (params) => {
    let wordToSearch = params.target.value
    this.setState({ searchTerm: wordToSearch })
  }
  submitForm = (params) => {
    params.preventDefault()
    const sentences = this.state.sentences
    const searchTerm = this.state.searchTerm
    // console.log(this.state.searchTerm)
    if (!searchTerm) {
      alert('Go get food, you need rest.')
    } else {
      const matchedSentences = sentences.filter(sentence => {
        return sentence.split(' ').includes(searchTerm)
      })
      console.log(matchedSentences)
      if (matchedSentences.length === 0) {
        this.setState({ sentences: ['No matched sentences'] })
      } else {
        this.setState({ sentences: matchedSentences })
      }
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h2>Google</h2>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='Search'
          />
          <button type='submit'>Search</button>
        </form>
        <h1>hello</h1>
        <ul>
          {
            this.state.sentences
              ? this.state.sentences.map((sentence, index) => {
                return <li key={index}>{sentence}</li>
              })
              : <p>Loading sentences</p>
          }
        </ul>
        <button type='button' onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default App
