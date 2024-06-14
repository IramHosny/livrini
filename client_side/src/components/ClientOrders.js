import React from 'react'
import { useSelector } from 'react-redux'
import './CSS/ClientOrders.css'

function ClientOrders() {
    const user = useSelector((state)=>state.user?.user);
    const orders = useSelector((state)=>state.order?.order);
    const client_orders= orders?.filter((el)=>el?.current_user ===user?.email);
    console.log(client_orders);
  return (
    <div className='orders'>
        {client_orders?.reverse().map((el)=>(
          <div className='orderItem'>
            <span>{"Commande numero : "+ el?._id} </span>
           <span>{"Etat de la commande: "+ el?.orderStatus}</span>
           <span>{"Total à payer: "+ el?.orderTotal}</span>

          </div>
        ))}
        
    </div>
  )
}

export default ClientOrders