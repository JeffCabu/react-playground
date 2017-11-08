import React, { Component } from 'react'
import data from '../mexicanRestaurant/data'
import Menu from './Menu'
import SearchForm from './SearchForm'

export default class MenuContainer extends Component {
  state = {
    menuItems: undefined,
    searchTerm: undefined
  }
  componentDidMount () {
    this.setState({ menuItems: data.items })
  }
  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  updateMenuList = (e) => {
    alert('you have an alert')
    e.preventDefault()
    const updateMenuItems = this.state.menuItems.filter(item => {
      return item.name === this.state.searchTerm // return the input value
    })
    console.log(updateMenuItems)
  }

  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
        />
        {
          this.state.menuItems
            ? <Menu foodItems={this.state.menuItems} />
            : <h3>you dont have menuItems</h3>
        }
      </div>
    )
  }
}
