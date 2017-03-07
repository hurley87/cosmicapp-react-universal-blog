// Header.js
import React, { Component } from 'react'

export default class Header extends Component {

  render(){
    
    const data = this.props.data
    const hero = data.page.hero
    const headline = data.page.headline
    const subheadline = data.page.subheadline
    
    return (
      <div className='header'>
        <h1>{ headline }</h1>
      </div>
    )
  }
}