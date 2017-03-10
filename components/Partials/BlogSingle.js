// BlogSingle.js
import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Nav from './Nav'

export default class BlogSingle extends Component {
  
  render(){
    
    const article = this.props.article

    const style = {
      marginBottom: 20
    }

    const menu = "https://cosmicjs.com/uploads/caa90140-04fd-11e7-af3c-bb44d6707cb7-hamburger.svg"
    const logo = "https://cosmicjs.com/uploads/ca868520-04fd-11e7-af3c-bb44d6707cb7-arrow2.svg"
    
    return (
        <div>
          <Nav data={ this.props.data } menu={menu} logo={logo}/>
          <Header article={article} data={ this.props.data }/>
          <div id="main-content" className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <h2>{ article.title }</h2>
                <div dangerouslySetInnerHTML={ {__html: article.content } }></div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}