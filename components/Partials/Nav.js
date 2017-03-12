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
    const logo = this.props.logo;
    const menu = this.props.menu;
    
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

    const style = {
      cursor: 'pointer'
    }
    const noPadding = {
      padding: '0px'
    }

    return (
      <div>
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">
              <img style={style} onClick={ this.showMe } src={menu}/>
            <div className="navbar-header">
              <a className="navbar-brand logo" href="/"><img style={noPadding} src={logo}/></a>
            </div>
          </div>
        </nav> 
        <div className='navOverlay'>
          <img style={style} onClick={ this.closeMe } src='https://cosmicjs.com/uploads/caa7efd0-04fd-11e7-af3c-bb44d6707cb7-cross2.svg'/>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-lg-offset-2 col-md-4 col-md-offset-4'>
                <ul >
                  { menu_items }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}