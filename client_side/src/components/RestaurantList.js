import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RestaurantCard from './RestaurantCard';
import { useSelector } from 'react-redux'


function RestaurantList({ping,setping}) {
  const restaurants= useSelector((state)=>state.restaurant?.restaurantlist);
  console.log(restaurants)
  const [text, settext] = useState("")
  return (
    <div>
    <center> <Form className="find" style={{display:'flex',marginTop:'5%',width:'50%'}}>
       <Form.Control
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
         onChange={(e) => settext(e.target.value) }
       />
       <Button className='btn_card' variant="outline-success" style={{backgroundColor:'#f15d00' , border:'none', color:'white'}} > Chercher </Button>
     </Form> </center>
   <div className='restaurant_list'>
   {restaurants?.filter((el)=>el?.adress.toLowerCase().includes(text.toLowerCase())).map((el)=> <RestaurantCard restaurant={el} />)}  
</div>
</div>
  )
}

export default RestaurantList