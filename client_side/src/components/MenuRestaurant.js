import React from 'react';
import { Link, useParams} from 'react-router-dom';
import './CSS/MenuRestaurant.css';
import { useSelector } from 'react-redux';

function MenuRestaurant() {
  const article= useSelector((state)=>state.article?.articlelist);
  const resto = useParams() ;
  console.log(resto)

  return (
    <>
    
    
<div className='categorie'>
<h1 className='title'>   </h1> 
  <div className='category'> 
    <marquee>
        <h2  style={{ marginTop:"30px",textAlign:"center"}}> Petit déjeuners &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sandwichs & Pizzas  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Plats   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sucreries & gâteaux  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boissons
                </h2></marquee>
    </div>
    </div>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>home</title>
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:300,400,500,700" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/style.css" />

       
      </head>
       <div classname="body">
        <div className="wrapper-grey padded">
          <div className="container">
            <h2 className="text-center"> Menu </h2>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="card" style={{ background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://cdn.sortiraparis.com/images/1001/100812/835348-l-escarpolette-coffee-shop-salon-de-the-restaurant-a-paris.jpg')" }}>
                 <div className="card-description">
                    <h2> <Link style={{textDecoration:'none',color:'white',fontSize:'28px',marginBottom:'30px',fontWeight:'bolder'}} to={`/${resto?.name}/petit_dejeuners/articles`}>Petit déjeuners </Link></h2>
                    </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="card" style={{ background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://i0.wp.com/societefacile.com/wp-content/uploads/2024/01/Tout-savoir-sur-le-Marche-des-fast-food.webp')" }}>
                  
                  <div className="card-description">
                    <h2><Link style={{textDecoration:'none',color:'white',fontSize:'28px',marginBottom:'30px',fontWeight:'bolder'}} to={`/${resto?.name}/sandwich_pizza/articles`}>Sandwichs et Pizzas </Link></h2>
                   
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="card" style={{ background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://9a4yti-fi-dari.com/wp-content/uploads/2020/11/10.jpeg')" }}>
                
                  <div className="card-description">
                    <h2><Link style={{textDecoration:'none',color:'white',fontSize:'28px',marginBottom:'30px',fontWeight:'bolder'}} to={`/${resto?.name}/plat/articles`}> Plats </Link> </h2>
                   
                  </div>
                  
                </div>
              </div>
             
              <div className="col-xs-12 col-sm-4">
                <div className="card" style={{ background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://img.cuisineaz.com/660x660/2016/05/30/i90732-tartines-de-gaufres-coco-au-nutella-fraises-bananes-et-noix.jpg')" }}>
                  
                  <div className="card-description">
                    <h2><Link style={{textDecoration:'none',color:'white',fontSize:'28px',marginBottom:'30px',fontWeight:'bolder'}} to={`/${resto?.name}/sucres/articles`}>Sucreries et gâteaux </Link> </h2>
                 
                  </div>
                 
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="card" style={{ background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwTwq3LrN3vA7Jz0TnrXBnDC_gaVeELSFmw&s')" }}>
                 
                  <div className="card-description">
                    <h2> <Link style={{textDecoration:'none',color:'white',fontSize:'28px',marginBottom:'30px',fontWeight:'bolder'}} to={`/${resto?.name}/boissons/articles`}> Boissons </Link> </h2>
                   
                  </div>
                  
                </div>
              </div>
         
            </div>
          </div>
        </div>

       
      </div>
    </html>
 
    </>
  );
}

export default MenuRestaurant;
