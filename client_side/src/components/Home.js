import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaCheck } from 'react-icons/fa';

function Home() {
  return (
    <div className='home' style={{backgroundColor:'beige'}}>
       <video autoPlay muted loop width={'100%'} height={'auto'}>
    <source src="./home.mp4" type="video/mp4"/>
    </video>
    <marquee  LOOP="30">
    <h2 style={{marginTop: '20px', textAlign: 'center'}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg" alt="restau1" style={{margin:'5px',  width: '300px', height:'300'}}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDcH_MxdsTsK6KMVon-Ybfa2WiT-R70ZjWw&s" alt="restau2" style={{margin:'5px',  width: '300px', height:'300'}}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyorGt76EuO7tHVWg29udDEfWJpehgtww5Vi7lGqjpQFz34ZFJS0mGD62XoPMZMusH8U&usqp=CAU" alt="restau3" style={{margin:'5px',  width: '300px', height:'300'}}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJS1HJdBIN9_Km8VX5TEgeGDLJrTaG_Oomg&s" alt="restau4" style={{margin:'5px',  width: '300px', height:'300'}}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvd4MGJ7NrRUeY9aaMurFpVIUUjQMNmVm_g&s" alt="restau5" style={{margin:'5px',  width: '300px', height:'300'}}/>
    </h2>
</marquee>

    <div  >
    <Fade> <div className='cards_mission' style={{display:'flex',justifyContent:'space-around',flexWrap:'nowrap',marginTop:'2%'}}>
    <Card style={{ width: '18rem',borderColor:'#f15d00',borderWidth:'5px' }}>
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 16 16" 
    className="bi bi-circle-fill" 
    fill="#f15d00" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ position: 'absolute', top:-30, left: 0 }}
  >
    <circle cx="8" cy="8" r="8" />
    <text x="50%" y="50%" textAnchor="middle" fill="black" style={{ fontFamily: 'cursive', fontWeight: 'bold', fontStyle: 'italic',fontSize:'10px' }}>1</text>
  </svg>
      <Card.Body>
        <Card.Title style={{color:"#f15d00",fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold',fontSize:'20px'}}>Vos avantages</Card.Title>
        <Card.Text style={{ fontStyle: 'italic', fontFamily: 'cursive', fontSize: '17px', fontWeight: 'bold', color: 'black' }}>
      <FaCheck style={{ marginRight: '8px' }} />
      Avec plus de 50 partenaires, vous bénéficiez d'un choix incroyable
      <br />
      <br />
      <FaCheck style={{ marginRight: '8px' }} />
      Commandez quand vous voulez, où vous voulez, comme vous voulez
    </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,borderColor:'#f15d00',borderWidth:'5px'}}>
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 16 16" 
    className="bi bi-circle-fill" 
    fill="#f15d00" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ position: 'absolute', top:-30, left: 0 }}
  >
    <circle cx="8" cy="8" r="8" />
    <text x="50%" y="50%" textAnchor="middle" fill="black" style={{ fontFamily: 'cursive', fontWeight: 'bold', fontStyle: 'italic',fontSize:'10px' }}>2</text>
  </svg>
      <Card.Body>
        <Card.Title style={{color:"#f15d00",fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold',fontSize:'20px'}}>Notre garantie</Card.Title>
        <Card.Text style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'17px',fontWeight:'bold',color:'black'}}>
        <FaCheck style={{ marginRight: '8px' }} />
         Un service d’exception
         <br />
         <br />
         <FaCheck style={{ marginRight: '8px' }} />
        Avis clients authentiques
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Fade>
    <Fade>
    <Row style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
  <Col style={{ display: 'flex', justifyContent: 'center' }}>
    <Card style={{ display: 'flex', flexDirection: 'row', width: '90%', height: '300px', borderColor: '#f15d00', borderWidth: '5px', margin: '10px' ,borderRadius:'10%'}}>
      <Card.Img 
        style={{ maxWidth: '300px', minWidth: '300px', maxHeight: '200px', minHeight: '200px',borderRadius:'10%' }} 
        variant="left" 
        src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg" 
        alt="Restaurant" 
      />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card.Title style={{ color: '#f15d00', fontSize: '30px' }}>Voulez devenir un partenaire</Card.Title>
        <Card.Text style={{ color: 'black', fontWeight: 'bold', marginTop: '20%' }}>
          Rejoignez-nous et bénéficiez d'une grande visibilité pour votre restaurant.
        </Card.Text>
        <Button href="/contact" style={{ backgroundColor: '#f15d00', borderColor: '#f15d00', color: 'black', fontWeight: 'bold',height:'50px' }}>Contactez-nous</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col style={{ display: 'flex', justifyContent: 'center' }}>
    <Card style={{ display: 'flex', flexDirection: 'row', width: '90%', height: '300px', borderColor: '#f15d00', borderWidth: '5px', margin: '10px',borderRadius:'10%' }}>
      <Card.Img 
        style={{ maxWidth: '300px', minWidth: '300px', maxHeight: '200px', minHeight: '200px' ,borderRadius:'10%'}} 
        variant="left" 
        src="https://static.vecteezy.com/ti/vecteur-libre/t1/5021061-livreur-de-nourriture-avec-motos-clients-commande-sur-l-application-mobile-le-motocycliste-va-selon-la-carte-gps-vectoriel.jpg" 
        alt="Livreur" 
      />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card.Title style={{ color: '#f15d00', fontSize: '30px' }}>Devenir un livreur avec LIVRINI</Card.Title>
        <Card.Text style={{ color: 'black', fontWeight: 'bold', marginTop: '20%' }}>
          Rejoignez notre équipe et commencez à livrer des repas dès aujourd'hui.
        </Card.Text>
        <Button href="/contact" style={{ backgroundColor: '#f15d00', borderColor: '#f15d00', color: 'black', fontWeight: 'bold', marginTop: '5%',height:'50px'  }}>Contactez-nous</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Fade>
    </div>
    </div>
  )
}

export default Home