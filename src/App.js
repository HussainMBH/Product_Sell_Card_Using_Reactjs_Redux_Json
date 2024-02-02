// App.js
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product';
import Products from './component/Products';
import ProductEdit from './component/ProductEdit';
import { Routes, Route } from 'react-router-dom';
import Cart from './component/Cart';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} /> {/* Add route for editing */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
