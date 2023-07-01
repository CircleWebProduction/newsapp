import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    console.log("Hello, I am a constructor from news component.")
    this.state={
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=bc45d267c15343c283a0c6e6260e0c5e";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  handlePrevClick = ()=>{
    console.log("Previous");

  }

  handleNextClick = ()=>{
    console.log("Next");
    
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
       <h1>News Circle- Top Headlines </h1>
  
       <div className="row">
       {this.state.articles.map((element)=>{
          return <div className="col-md-4"  key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} /> 
          </div>
       })}
       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
       <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>  
      </div>
    )
  }
}

export default News