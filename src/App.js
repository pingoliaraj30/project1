import './App.css';

import { Route, Routes } from 'react-router-dom';
import Layouts from './layout/Layouts';
import FAQ from './Components/Faq';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Gallery from './Components/Gallery';
// import ProductApp from './Components/ProductApp';
// import Product from './Components/Product';
import Products from './Components/Products';
import PageNotFound from './layout/PageNotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts><Gallery /></Layouts>} />
        <Route path="/Faq's" element={<Layouts><FAQ /></Layouts>} />
        <Route path="/AboutUs" element={<Layouts><AboutUs /></Layouts>} />
        <Route path="/contact" element={<Layouts><Contact /></Layouts>} />
        <Route path="/login" element={<Layouts><Login /></Layouts>} />
        <Route path="/signup" element={<Layouts><Signup /></Layouts>} />
        <Route path="/product" element={<Layouts><Products /></Layouts>} />
        <Route path="/*" element={<Layouts><PageNotFound /></Layouts>} />




      </Routes>
    </>
  );
}

export default App;
