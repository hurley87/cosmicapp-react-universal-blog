// Header.js
import React, { Component } from 'react'

export default class Header extends Component {

  render(){
    
    const data = this.props.data
    const article = this.props.article;
    let hero = this.props.hero;
    if(data.page) hero = data.page.hero
    let headline = 'Righhhtttttt'
    if(data.page) headline = data.page.headline
    let subheadline = 'Im gonna have to get you to come in on Saturday'
    if(data.page) subheadline = data.page.subheadline
    
    return (
      <div>
        <header className="intro-header" style={ { backgroundImage: "url('" + hero + "')" } }>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="site-heading">

                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}