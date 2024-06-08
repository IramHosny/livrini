import React from 'react';
import './CSS/Restau.css';
import './CSS/RestauCard.css';

const RestaurantCard = ({restaurant}) => {
  return (
    <div className='restocard'>
  
  <div className="colombia_card">
  <img
    className="colombia_card__background"
    src={restaurant?.image}
    alt=" "
     style={{maxWidth:'1920',minWidth:'1920',
    maxHeightheight:'2193', minHeighth:'2193'}}
  />
  <div className="colombia_card__content | flow">
    <div className="colombia_card__content--container | flow">
      <h2 className="colombia_card__title">{restaurant?.name}</h2>
      <p className="colombia_card__description">
        {restaurant?.description}
        <h5> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20"> <path fill="#f15d00" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> {restaurant?.adress}</h5>
      </p>
    </div>
  </div>
</div>

    </div>
    
  );
}

export default RestaurantCard;