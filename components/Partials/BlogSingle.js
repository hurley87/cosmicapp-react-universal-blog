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

    const menu = "https://cosmicjs.com/uploads/3dbcdbf0-0596-11e7-af3c-bb44d6707cb7-Hamburger-white.svg"
    const logo = "https://cosmicjs.com/uploads/ca868520-04fd-11e7-af3c-bb44d6707cb7-arrow2.svg"
    const headline = article.metafield.headline.value;
    const subheadline = article.metafield.subheadline.value;
    return (
        <div>
          <Nav data={ this.props.data } menu={menu} logo={logo}/>
          <Header article={article} data={ this.props.data }/>
          <div id="main-content" className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 preview">
                <h2>{ headline } <span>{subheadline}</span></h2>
                <div dangerouslySetInnerHTML={ {__html: article.content } }></div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}