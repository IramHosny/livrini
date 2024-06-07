import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
<<<<<<< HEAD
import Dashboard from './components/Dashboard';
=======
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './components/Dashboard';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getusers } from './redux/usersSlice';
import { userCurrent } from './redux/userSlice';
import Subscribe from './components/Subscribe';

>>>>>>> c181d500db50036a93f2ec973bdcf2950206d309
function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getusers());
    dispatch(userCurrent());
    
  }, [ping])
  const isAuth = localStorage.getItem("token");
  const user = useSelector((state)=>state.user?.user);
  return (
    
    <div className="App">

  <Navbarr />

     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/about" element={ <About/> } />
     <Route path="/contact" element={ <Contact/> } />
     <Route path="/login" element={ <Login/> } />
     <Route path="/subscribe" element={ <Subscribe/> } />
     <Route path="/userprofile" element={ <PrivateRoute><UserProfile/></PrivateRoute> } />
     <Route path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute> } />
     </Routes>
     
    </div>
  );
}

export default App;
