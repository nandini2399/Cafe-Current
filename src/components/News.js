import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  articles= [
   
    ];


    static defaultProps = {
      country:"us",
      pageSize:"6",
      category:"entertainment"
    }

    static propTypes = {
      country : PropTypes.string,
      pageSize :  PropTypes.string,
      category : PropTypes.string
    }

    constructor(){
      super();
      this.state={
        articles:this.articles,
        page :1,
        loading:false,
        totalResults:0
      }
    }


    async componentDidMount(){
      this.props.setProgress(20);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a2e467418074d18a7dd801b81c83edc&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      
      data=await data.json();
      this.props.setProgress(50);
      this.setState({
        articles:data.articles,
        page:1,
        loading:false,
        totalResults:data.length
      })
      console.log("Hi"+data.totalResults);
      console.log("Hi"+this.state.articles.length);
      this.props.setProgress(100);
    }

    

    // handlePrev = async() =>{
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a2e467418074d18a7dd801b81c83edc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);

    //   data=await data.json();
      
    //   this.setState({
    //     articles:data.articles,
    //     page:this.state.page-1,
    //     loading:false
    //   })
    // }

    fetchMoreData = async() =>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a2e467418074d18a7dd801b81c83edc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);

      data=await data.json();
      console.log("Hi"+data.totalResults);
      this.setState({
        articles:this.state.articles.concat(data.articles),
        totalResults:data.totalResults,
        page:this.state.page+1,
        loading:false
      })
    }

    render() {
      return (
      <>
       
        <h2 className='my-4 text-center'>Cafe Current - Top {(this.props.category).charAt(0).toUpperCase()+(this.props.category).substring(1,this.props.category.length)} News</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Loading/>}
        >
           <div className='container my-3 text-center'>
          
        <div className='row'>
        {this.state.loading && <Loading/>}
          {this.state.articles.map((elem)=>{
            return <div className='col-md-4' key={elem.url?elem.url:""}>
              <NewsItem url={elem.url?elem.url:""} title ={elem.title?elem.title:""} description = {elem.description?elem.description:""} imageUrl={elem.urlToImage?elem.urlToImage:""} author={elem.author?elem.author:"Unknown"} publishedAt={elem.publishedAt} source={elem.source.name}/>
            </div>
          })}
              
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-2">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrev} className="btn btn-dark "> &larr; Previous</button>
        <button disabled={this.state.page>=12} type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>

        </div> */}
        
        
        
        </>
      )
    }
}
