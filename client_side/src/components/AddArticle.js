import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addarticle } from '../redux/articleSlice';

function AddArticle({ restaurantName,ping, setping }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [article, setArticle] = useState({
    name: "",
    catégorie: "",
    description: "",
    nom_restaurant: restaurantName,
    prix: "",
    image: "",
  });
  useEffect(() => {
    setArticle(prevArticle => ({
      ...prevArticle,
      nom_restaurant: restaurantName
    }));
  }, [restaurantName]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  }
  const handleSubmit = () => {
    dispatch(addarticle(article));
    handleClose();
  };

  return (
    <div>
      <>
        <Button
          style={{ background: '#f15d00', border: 'none', cursor: 'pointer', marginTop: '2%' }}
          className='btn_add'
          onClick={handleShow}
        >
          Ajouter un article
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nom de l'article</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le nom de l'article"
                  name="name"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCategories">
                <Form.Label>Catégorie de l'article</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="catégorie"
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez une catégorie</option>
    <option value="Petit-déjeuners">Petit-déjeuners</option>
    <option value="Sandwichs-et-Pizzas">Sandwichs-et-Pizzas</option>
    <option value="Plats">Plats</option>
    <option value="Sucreries-et-Gâteaux">Sucreries-et-Gâteaux</option>
    <option value="Boissons">Boissons</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description de l'article</Form.Label>
                <Form.Control
                  type="text"
                
                  name="description"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRestaurant">
                <Form.Label>Le restaurant</Form.Label>
                <Form.Control
                  type="text"
                  value={restaurantName}
                  name="nom_restaurant"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrix">
                <Form.Label>Le prix de l'article</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le prix de l'article"
                  name="prix"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>L'image de l'article</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez l'image de l'article"
                  name="image"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button
              style={{ background: '#f15d00', border: 'none', cursor: 'pointer' }}
              variant="primary"
              onClick={handleSubmit}
            >
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddArticle;
