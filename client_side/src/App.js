import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getusers } from './redux/usersSlice';
import { userCurrent } from './redux/userSlice';
import Subscribe from './components/Subscribe';
import RestaurantList from './components/RestaurantList';
import { getrestaurant } from './redux/restaurantSlice';
import MenuRestaurant from './components/MenuRestaurant';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import { getarticle } from './redux/articleSlice';
import RestaurantListAdmin from './components/RestaurantListAdmin';
import ArticleListAdmin from './components/ArticleListAdmin';
import UserListAdmin from './components/UserListAdmin';

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);

  useEffect(() => {
    dispatch(getusers());
    dispatch(userCurrent());
    dispatch(getrestaurant());
    dispatch(getarticle());
  }, [ping]);

  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<RestaurantList ping={ping} setping={setping} />} />
        <Route path="/articles" element={<ArticleList ping={ping} setping={setping} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/menurestaurant/:name" element={<MenuRestaurant />} />
        <Route path="/userprofile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/restauadmin" element={<PrivateRoute><RestaurantListAdmin /></PrivateRoute>} />
        <Route path="/artiadmin" element={<PrivateRoute><ArticleListAdmin /></PrivateRoute>} />
        <Route path="/usersadmin" element={<PrivateRoute><UserListAdmin /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
