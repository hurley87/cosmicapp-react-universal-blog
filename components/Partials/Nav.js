// Nav.js
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {

  handleClick(){
    $('.navOverlay').hide();
  }

  closeMe(){
    $('.navOverlay').hide();
  }

  showMe() {
    $('.navOverlay').show();
  }



  render(){
    
    const data = this.props.data
    const nav_items = data.globals.nav_items
    
    // Prevent initial null
    if(!nav_items){
      return <div></div>
    }

    const menu_items = nav_items.map(( nav_item ) => {
      return (
        <li key={ 'key-' + nav_item.value }>
          <Link onClick={ this.handleClick } to={ '/' + nav_item.value }>{ nav_item.title }</Link>
        </li>
      )
    })

    return (
      <div>
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
              <img onClick={ this.showMe } src='https://cosmicjs.com/uploads/6769e9c0-043d-11e7-9730-f928dcc5c05d-menu.svg'/>
            <div className="navbar-header">
              <a className="navbar-brand logo" href="/">Apologue</a>
            </div>
          </div>
        </nav> 
        <div className='navOverlay'>
            <ul >
              { menu_items }
            </ul>
            <span onClick={ this.closeMe } className='closeMe'>close me</span>
        </div>
      </div>

    )
  }
}