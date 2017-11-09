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

  resetMenuList = () => {
    this.setState({ menuItems: data.items, searchTerm: '' })
  }
  updateMenuList = (e) => {
    alert('you have an alert')
    e.preventDefault()
    const updateMenuItems = this.state.menuItems.filter(item => {
      const searchTerm = this.state.searchTerm.toLowerCase()
      const menuItem = item.name.toLowerCase()
      return menuItem.includes(searchTerm)
    })
    this.setState({ menuItems: updateMenuItems })
  }
  mild = () => {
    const mild = this.state.menuItems.filter(item => {
      return item.spiceLevel <= 3
    })
    this.setState({ menuItems: mild })
  }
  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
          resetMenuList={this.resetMenuList}
          searchTerm={this.state.searchTerm}
          mild={this.mild}
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
