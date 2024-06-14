import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addrestaurant } from '../redux/restaurantSlice';

function AddRestaurant({ ping, setPing }) {
    const [show, setShow] = useState(false);
    const [restaurant, setRestaurant] = useState({
        name: "",
        adress: "",
        description: "",
        owner: "",
        image: "",
        horaire: "",
    });
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value });
    };

    const handleAddRestaurant = () => {
        dispatch(addrestaurant(restaurant));
        handleClose();
        // Réinitialiser le formulaire après l'ajout
        setRestaurant({
            name: "",
            adress: "",
            description: "",
            owner: "",
            image: "",
            horaire: "",
        });
    };

    return (
        <div>
            <>
                <Button style={{ background: '#f15d00', border: 'none', cursor: 'pointer' }} className='btn_add' onClick={handleShow}>
                    Ajouter un restaurant
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un restaurant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nom du restaurant</Form.Label>
                                <Form.Control type="text" placeholder="Entrez le nom du restaurant" name="name" value={restaurant.name} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Adresse du restaurant</Form.Label>
                                <Form.Control type="text" placeholder="Entrez l'adresse du restaurant" name="adress" value={restaurant.adress} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description du restaurant</Form.Label>
                                <Form.Control type="text" placeholder="Entrez la description du restaurant" name="description" value={restaurant.description} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="owner">
                                <Form.Label>Le propriétaire du restaurant</Form.Label>
                                <Form.Control type="text" placeholder="Entrez le nom du propriétaire du restaurant" name="owner" value={restaurant.owner} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>L'image du restaurant</Form.Label>
                                <Form.Control type="text" placeholder="Entrez l'image du restaurant" name="image" value={restaurant.image} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="horaire">
                                <Form.Label>L'horaire du restaurant (ex: 9:00 - 20:00)</Form.Label>
                                <Form.Control type="text" placeholder="Entrez l'horaire du restaurant" name="horaire" value={restaurant.horaire} onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Annuler
                        </Button>
                        <Button style={{ background: '#f15d00', border: 'none', cursor: 'pointer' }} variant="primary" onClick={handleAddRestaurant}>
                            Ajouter
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default AddRestaurant;
