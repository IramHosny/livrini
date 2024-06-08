import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addarticle } from '../redux/articleSlice';
function AddArticle({ping,setping}) {
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [article, setarticle] = useState({
    name :"" ,
    catégorie: "",
    description: "",
    restaurant:"",
    prix:"",
    image:"",
    })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} className='btn_add'  onClick={handleShow}>
      Ajouter un article
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Ajouter un article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Nom de l'article </Form.Label>
        <Form.Control type="text" placeholder="Entrez le nom de l'article" onChange={(e)=>setarticle({...article, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Catégorie de l'article </Form.Label>
        <Form.Control type="text" placeholder="Entrez la catégorie de l'article"  onChange={(e)=>setarticle({...article, catégorie:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Description de l'article  </Form.Label>
        <Form.Control type="text" placeholder="Entrez la description de l'article"  onChange={(e)=>setarticle({...article, description:e.target.value})}/>
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Le restaurant  </Form.Label>
        <Form.Control type="text" placeholder="Entrez le nom du restaurant" onChange={(e)=>setarticle({...article, restaurant:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Le prix de l'article </Form.Label>
        <Form.Control type="text" placeholder="Entrez le prix de l'article" onChange={(e)=>setarticle({...article, prix:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>L'image de l'article </Form.Label>
        <Form.Control type="text" placeholder="Entrez l'image de l'article" onChange={(e)=>setarticle({...article, image:e.target.value})} />
      </Form.Group>
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
        <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(addarticle(article)); 
       
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

export default AddArticle