import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import { Slide } from 'react-slideshow-image';
import Footer from './components/Footer';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
