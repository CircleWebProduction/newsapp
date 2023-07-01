import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div classNAme="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2023/06/WhatsApp-Image-2023-06-30-at-8.35.53-AM-770x433.jpeg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
