// BlogList.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import Header from './Header'
import Nav from './Nav'

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
      let meta = []
      if(article) meta = article.metafields;
      let head = 'headline'      
      if(meta[0]) head = meta[0].value;
      let subhead = 'subheadline';
      if(meta[1]) subhead = meta[1].value; 
      let img = 'https://cosmicjs.com/uploads/78921f50-00f1-11e7-bf7e-59fc82b92268.jpeg'
      if(meta[2]) img = meta[2].url;
      return (
        <div key={ 'key-' + article.slug }>
          <div className="post-preview">
            <img src={img} />
            <h2 className="post-title pointer">
              <Link to={ '/blog/' + article.slug }>{ head }</Link>
              <small>{subhead}</small>
            </h2>
            <p className="post-meta">Posted on { created }</p>
          </div>
          <hr/>
        </div>
      )
    })

    const menu = 'https://cosmicjs.com/uploads/caa90140-04fd-11e7-af3c-bb44d6707cb7-hamburger.svg';
    const logo = "https://cosmicjs.com/uploads/3dbe6290-0596-11e7-af3c-bb44d6707cb7-Apologue-logo.svg";

    return (
      <div>
        <Nav data={ data } menu={menu} logo={logo}/>
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