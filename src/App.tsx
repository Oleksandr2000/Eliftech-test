import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

const App: React.FC = () => {
  return (
    <div className="wrapper container m-auto mt-10">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
