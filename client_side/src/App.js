import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantList from './components/RestaurantList';
import Avis from './components/Avis';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
     <Navbarr/>
     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/about" element={ <About/> } />
     <Route path="/restaurant" element={ <RestaurantList/> } />
     <Route path="/avis" element={ <Avis/> } />
     <Route path="/contact" element={ <Contact/> } />
     </Routes>
    </div>
  );
}

export default App;
