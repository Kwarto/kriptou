import React from 'react'
import {NewsApp} from './NewsItemElement'
function NewsItem({title, description, url, urlToImage}) {
  return (
      <>
       <NewsApp>
         <div className="news-item">
            <img src={urlToImage} alt={urlToImage} />
            <div>
            <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
            <p>{description}</p>
            </div>
         </div>
       </NewsApp>
      </>
  )
}

export default NewsItem