import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NewsItem from '../../components/NewsItem/NewsItem';
import { NewsWrapper } from './NewsElement';
import Circles from '../../components/circle/Circles';
const date = new Date();
function News() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${date.getFullYear()+date.getDay()+date.getDay()}&sortBy=popularity&apiKey=f679c22ee8614297a5e1a7a77076a230`);
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    if (articles.length === 0) { 
        return (
            <>
              <div className='a-loader'>
                <Circles className='loader'/>
              </div>
            </>
          )
    }else{
  return (
      <NewsWrapper>
         {articles.map((article) => {
         return (
            <div>
              <NewsItem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
             />
            </div>
           )
          })}
        
      </NewsWrapper>
  )
    }
}

export default News