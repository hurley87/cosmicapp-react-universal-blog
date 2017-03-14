// BlogSingle.js
import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Nav from './Nav'

export default class BlogSingle extends Component {
  
  render(){
    
    const article = this.props.article
    console.log(article)

    const style = {
      marginBottom: 20
    }

    const menu = "https://cosmicjs.com/uploads/3dbcdbf0-0596-11e7-af3c-bb44d6707cb7-Hamburger-white.svg"
    const logo = "https://cosmicjs.com/uploads/ca868520-04fd-11e7-af3c-bb44d6707cb7-arrow2.svg"
    const headline = article.metafield.headline.value;
    const subheadline = article.metafield.subheadline.value;
    const hero = article.metafield.hero.url;
    const twitterMsg =  subheadline + " " + window.location.href;
    // 
    return (
        <div>
          <Nav data={ this.props.data } menu={menu} logo={logo}/>
          <Header article={article} data={ this.props.data } hero={hero}/>
          <div id="main-content" className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 preview blogpage">
                <h2>{ headline } <span>{subheadline}</span></h2>
                <a className='shareBtn facebook' href="https://www.facebook.com/sharer/sharer.php?u=http%3A//mrowe.cosmicapp.co/"><img src='https://cosmicjs.com/uploads/e033ed20-08e2-11e7-a5af-6324c7536877-Facebook-White.svg'/> Share this</a>
                <a className='shareBtn twitter' href={`https://twitter.com/home?status=${twitterMsg}`}><img src='https://cosmicjs.com/uploads/de6d5df0-08e2-11e7-a5af-6324c7536877-Twitter-White.svg'/> Tweet this</a>
                <div className='blogContent' dangerouslySetInnerHTML={ {__html: article.content } }></div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}