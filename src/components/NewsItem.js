import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {

    let {title,description,imageUrl,url,author,publishedAt,source} = this.props;
    return (
        <div className='container'> 
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target='_blank' className= "btn btn-primary">Read More</a>
                        <div className="card-footer text-muted">
                          Published by {author} on {publishedAt}
                        </div>
                    </div>
                </div>   

        </div>
    )
  }
}
