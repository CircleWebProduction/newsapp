import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
       <h2>News Circle-Top Headlines </h2>
       <div className="row">
        <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc" url="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0628%2Fr1191750_1296x729_16%2D9.jpg"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc"/>
        </div>
       </div>  
      </div>
    )
  }
}

export default News