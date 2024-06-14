import React from 'react'
import { useSelector } from 'react-redux'
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router-dom';



function ArticleList({ping,setping}) {
  const param = useParams();
  console.log(param)
  
  const articles= useSelector((state)=>state.article?.articlelist);
  const cat_articles = articles?.filter((el)=> el?.catégorie === param.cat && el?.nom_restaurant === param.name)
  const nb_article = cat_articles.length || 0 ;
  console.log(nb_article);
 

 
  return (
    <div>
    {nb_article>0?(
      <div className='article_list' style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
   {cat_articles?.map((el)=>  <ArticleCard  article={el} />)}  
</div>
    ):
    (<p style={{padding:'10%',textAlign:'center',fontWeight:'bold'}}>Aucun produit disponible pour le moment! vérifier les autres restaurants !</p>)
    }
   
</div>
  )
}

export default ArticleList