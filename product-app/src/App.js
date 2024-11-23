import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import Product from './components/Product';

const product = {
  name: "Sample Product",
  image: "https://via.placeholder.com/150",
  price: 29.99
};

const App = () => (
  <div className="App">
    <MyNavbar />
    <main className="container mt-4">
      <Product product={product} />
    </main>
  </div>
);

export default App;

