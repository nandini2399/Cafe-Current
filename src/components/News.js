import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const articles1= [
   
    ];

    const [articles,setArticles] = useState(articles1);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const [totalResults,setTotalResults] = useState(0);



    

    useEffect(()=>{
      // props.setProgress(20);
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a2e467418074d18a7dd801b81c83edc&pageSize=${props.pageSize}`;
    
      // setLoading(true);
      // let data = await fetch(url);
      
      // data=await data.json();
      // props.setProgress(50);
      // setArticles(data.articles);
      // setPage(1);
      // setLoading(false);
      // setTotalResults(data.length);
      // console.log("Hi"+data.totalResults);
      // console.log("Hi"+articles.length);
      // props.setProgress(100);
      fetchMoreData();
    },[])

    

    // handlePrev = async() =>{
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a2e467418074d18a7dd801b81c83edc&page=${page+1}&pageSize=${props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);

    //   data=await data.json();
      
    //   this.setState({
    //     articles:data.articles,
    //     page:page-1,
    //     loading:false
    //   })
    // }

    const fetchMoreData = async() =>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6a2e467418074d18a7dd801b81c83edc&page=${page+1}&pageSize=${props.pageSize}`;
      
      setLoading(true)
      let data = await fetch(url);

      data=await data.json();
      console.log("Hi"+data.totalResults);
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
      setPage(page+1);
      setLoading(false);
      
    }

    
      return (
      <>
       
        <h2 className='my-4 text-center'>Cafe Current - Top {(props.category).charAt(0).toUpperCase()+(props.category).substring(1,props.category.length)} News</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loading/>}
        >
           <div className='container my-3 text-center'>
          
        <div className='row'>
        {loading && <Loading/>}
          {articles.map((elem)=>{
            return <div className='col-md-4' key={elem.url?elem.url:""}>
              <NewsItem url={elem.url?elem.url:""} title ={elem.title?elem.title:""} description = {elem.description?elem.description:""} imageUrl={elem.urlToImage?elem.urlToImage:""} author={elem.author?elem.author:"Unknown"} publishedAt={elem.publishedAt} source={elem.source.name}/>
            </div>
          })}
              
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-2">
        <button disabled={page<=1} type="button" onClick={this.handlePrev} className="btn btn-dark "> &larr; Previous</button>
        <button disabled={page>=12} type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>

        </div> */}
        
        
        
        </>
      )
    
}


News.defaultProps = {
  country:"us",
  pageSize:"6",
  category:"entertainment"
} 

News.propTypes = {
  country : PropTypes.string,
  pageSize :  PropTypes.string,
  category : PropTypes.string
}

export default News;