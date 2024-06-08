import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addrestaurant } from '../redux/restaurantSlice';
function AddRestaurant({ping,setping}) {
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [restaurant, setrestaurant] = useState({
    name :"" ,
    adress: "",
    description: "",
    owner:"",
    image:"",
    })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button style={{ background: '#f15d00', border: 'none', cursor: 'pointer' }} className='btn_add'  onClick={handleShow}>
      Ajouter un restaurant  
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Ajouter un restaurant </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Nom du restaurant </Form.Label>
        <Form.Control type="text" placeholder="Entrez le nom du restaurant" onChange={(e)=>setrestaurant({...restaurant, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Adresse du restaurant </Form.Label>
        <Form.Control type="text" placeholder="Entrez l'adresse du restaurant"  onChange={(e)=>setrestaurant({...restaurant, adress:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Description du restaurant  </Form.Label>
        <Form.Control type="text" placeholder="Entrez la description du restaurant"  onChange={(e)=>setrestaurant({...restaurant, description:e.target.value})}/>
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Le propriétaire du restaurant  </Form.Label>
        <Form.Control type="text" placeholder="Entrez le nom du propriétaire du restaurant" onChange={(e)=>setrestaurant({...restaurant, owner:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>L'image du restaurant </Form.Label>
        <Form.Control type="text" placeholder="Entrez l'image du restaurant" onChange={(e)=>setrestaurant({...restaurant, image:e.target.value})} />
      </Form.Group>
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
        <Button style={{ background: '#f15d00', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(addrestaurant(restaurant)); 
       
             handleClose();
             window.location.reload();}}
             >
          Ajouter
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    </div>
  )
}

export default AddRestaurant