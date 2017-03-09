// BlogList.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import Header from './Header'

export default class BlogList extends Component {

  render(){
    
    let data = this.props.data
    let item_num = data.item_num
    let articles = data.articles

    let load_more
    let show_more_text = 'Show More Articles'

    if(data.loading){
      show_more_text = 'Loading...'
    }

    if(articles && item_num <= articles.length){
      load_more = (
        <div>
          <button className="btn btn-default center-block" onClick={ this.props.getMoreArticles.bind(this) }>
            { show_more_text }
          </button>
        </div>
      )
    }

    articles = _.take(articles, item_num)
    
    let articles_html = articles.map(( article ) => {
      let date_obj = new Date(article.created)
      let created = (date_obj.getMonth()+1) + '/' + date_obj.getDate() + '/' + date_obj.getFullYear()
      console.log(article)
      const meta = article.metafields;
      const head = meta[0].value;
      const subhead = meta[1].value;
      const img = meta[2].url;
      return (
        <div key={ 'key-' + article.slug }>
          <div className="post-preview">
            <h2 className="post-title pointer">
              <Link to={ '/blog/' + article.slug }>{ head }</Link>
              <small>{subhead}</small>
            </h2>
            <img src={img} />
            <p className="post-meta">Posted on { created }</p>
          </div>
          <hr/>
        </div>
      )
    })

    return (
      <div>
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div>{ articles_html }</div>
           </div>
          </div>
        </div>
        { load_more }
      </div>
    )
  }
}