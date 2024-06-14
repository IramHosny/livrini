import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddRestaurant from './AddRestaurant';

import Table from 'react-bootstrap/Table';
import { deleterestaurant } from '../redux/restaurantSlice';
import Swal from 'sweetalert2';
import AddArticle from './AddArticle';
import EditRestaurant from './EditRestaurant';

function RestaurantListAdmin({ ping, setping }) {
    const user = useSelector(state => state.user?.user);
    const isAuth = localStorage.getItem('token');
    const restaurants = useSelector(state => state.restaurant?.restaurantlist);
    const dispatch = useDispatch();
    const alert = (a) => Swal.fire({
        title: "Voulez vous supprimer ce restaurant ?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "supprimer",
        denyButtonText: `annuler`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(deleterestaurant(a));
          Swal.fire("Le restaurant est supprimé");
          setTimeout(function(){ window.location.reload(); }, 2000);
  
        }
      });

    return (
        <>
            {(isAuth && user?.role === "admin") ? (
                <div className='restaurant-list-container' style={{ marginTop: '5%' }}>
                    <div className='add-restaurant-container'>
                        <AddRestaurant ping={ping} setping={setping} />
                    </div>
                    <div className="table-container">
                        <Table striped className='veterinarian-table'>
                            <thead>
                                <tr>
                                    <th> Nom</th>
                                    <th>Description</th>
                                    <th> Image</th>
                                    <th> Adresse </th>
                                    <th>Propriétaire </th>
                                    <th> Horaire </th>
                                    <th>  </th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {restaurants?.map(el => (
                                    <tr key={el._id}>
                                        <td>{el.name}</td>
                                        <td>{el.description}</td>
                                        <td>
                                            <img src={el.image} style={{ maxWidth: '50px', minWidth: '50px', maxHeight: '50px', minHeight: '50px' }} alt='Veterinarian' className='img_table' />
                                        </td>
                                        <td>{el.adress}</td>
                                        <td>{el.owner}</td>
                                        <td>{el.horaire}</td>
                                        <td><AddArticle  restaurantName={el.name} ping={ping} setping={setping}/></td>
                                        <td>
                                            {/* Utilisation du composant EditRestaurant */}
                                            <EditRestaurant restaurant={el} ping={ping} setping={setping} />
                                             
                                        </td>
                                        <td>
                                            <button className='btn_delete' style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => { alert(el?._id); }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1="4" y1="7" x2="20" y2="7" />
                                                    <line x1="10" y1="11" x2="10" y2="17" />
                                                    <line x1="14" y1="11" x2="14" y2="17" />
                                                    <path d="M5 7l1 12a2 2 0 002 2h8a2 2 0 002 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 011 -1h4a1 1 0 011 1v3" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            ) : (
                <div><center><img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" width={'80%'} height={'auto'} style={{ width: "80%", height: "auto" }} /></center></div>
            )}
        </>
    );
}

export default RestaurantListAdmin;