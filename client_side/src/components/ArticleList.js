import React from 'react'
import { useSelector } from 'react-redux'
import ArticleCard from './ArticleCard';



function ArticleList({ping,setping}) {
  const articles= useSelector((state)=>state.article?.articlelist);
  
  console.log(articles);
 

 
  return (
    <div>
    
   <div className='article_list' style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
   {articles?.map((el)=>  <ArticleCard  article={el} />)}  
</div>
</div>
  )
}

export default ArticleList