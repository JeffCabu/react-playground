import React, { Component } from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

export default class ListContainer extends Component {
  state = {
    gifts: undefined,
    giftName: undefined,
    giftPrice: undefined,
    budget: 2000,
    totalPrice: undefined
  }
  componentDidMount () {
    const giftArray = [{name: 'Apple TV', price: 300}, {name: 'Nokia 3310', price: 50}]
    this.setState({ gifts: giftArray })
  }
  handleGiftNameChange = (e) => {
    this.setState({ giftName: e.target.value })
  }
  handleGiftPriceChange = (e) => {
    this.setState({ giftPrice: e.target.value })
  }
  addNewGift = (e) => {
    e.preventDefault()
    const newGift = {name: this.state.giftName, price: this.state.giftPrice}
    const newGiftList = this.state.gifts
    newGiftList.push(newGift)
    let totalPrice = this.getTotalPrice()
    let giftPrice = Number(newGift.giftPrice)
    let budget = this.state.budget
    if (this.getTotalPrice() + newGift.giftPrice > this.state.budget) {
      alert('Insufficient price to budget')
      return
    } else {
      this.setState({ gifts: newGiftList })
      this.setState({ giftName: '' })
      this.setState({ giftPrice: '' })
    }
    this.setState({ gifts: newGiftList })
  }
  getTotalPrice = () => {
    const list = this.state.gifts
    let totalPrice = 0
    for (let i = 0; i < list.length; i += 1) {
      totalPrice += Number(list[i].price)
    }
    return totalPrice
  }
  render () {
    return (
      <div>
        <h4>Im working (dynamic)</h4>
        <GiftForm
          handleGiftNameChange={this.handleGiftNameChange}
          handleGiftPriceChange={this.handleGiftPriceChange}
          addNewGift={this.addNewGift}
        />
        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h1>No gifts for you!</h1>
        }
      </div>
    )
  }
}
