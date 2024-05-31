import React from 'react'
import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    <div> 
     
     <div className='about_container' style={{marginTop:"5%"}}>
   <section className="py-5">
  <div className="container">
    <div className="row gx-4 align-items-center justify-content-between">
      <div className="col-md-5 order-2 order-md-1">
        <div className="mt-5 mt-md-0">
          <span className="text-muted" style={{color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold'}}>Our Story</span>
          <h2 className="display-5 fw-bold" style={{color:'#f15d00',fontStyle:'italic',fontFamily:'cursive',fontSize:'50px',fontWeight:'bold'}}>About Us</h2>
          <Fade><p className="lead" style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold',marginTop:'5%'}}>
          Bienvenue sur <span style={{color:'#f15d00'}}> Livrini</span>, votre solution de livraison de fast-food multi-restaurant. Avec Livrini, découvrez une variété de saveurs, allant des burgers juteux aux sushis frais, le tout à portée de clic. Notre plateforme 
          intuitive vous permet de commander facilement vos plats préférés 
          depuis plusieurs restaurants partenaires, garantissant une livraison rapide et fiable. 
          Que ce soit pour une soirée entre amis ou un déjeuner au bureau, 
          <span style={{color:'#f15d00'}}> Livrini</span> est là pour satisfaire toutes vos envies culinaires.. 
          </p>
          <p className="lead" style={{color:'#f15d00',fontStyle:'italic',fontFamily:'cursive',fontSize:'18px',fontWeight:'bold'}}>
          Livrini : Vos saveurs préférées, livrées en un clic !
          </p>
          </Fade>
        </div>
      </div>
      <div className="col-md-6 offset-md-1 order-1 order-md-2">
        <div className="row gx-2 gx-lg-3">
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://s1.1zoom.me/big0/358/Fast_food_Hamburger_Fire_Vegetables_Chili_pepper_535315_1280x822.jpg"
               alt=""/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://tse3.explicit.bing.net/th?id=OIP.h32UzS4n4vsbuO4Bk7aXWQHaE9&pid=Api&P=0&h=180"
               alt=""/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://foundersguide.com/wp-content/uploads/2019/09/delivery.jpg"
              alt=""/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://www.cuisinart.com/globalassets/catalog/appliances/food-processors/complete-chef-cooking-food-processor/tacosamericanos_ss1262600101.jpg"
              alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
      </div>
  )
}

export default About