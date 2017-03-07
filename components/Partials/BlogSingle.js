// BlogSingle.js
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class BlogSingle extends Component {
  
  render(){
    
    const article = this.props.article

    const style = {
      marginBottom: 20
    }
    
    return (
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <br />
            <br />
            <br />
            <br />
            <Link to="/" className="btn btn-default" style={ style }>&lt;&lt; Back to Article List</Link>
            <h2>{ article.title }</h2>
            <div dangerouslySetInnerHTML={ {__html: article.content } }></div>
          </div>
        </div>
      </div>
    )
  }
}