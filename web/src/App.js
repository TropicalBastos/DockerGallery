import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageService from './imggallery/ImageService';
import ImageGallery from './imggallery/ImageGallery';

function App() {
  return (
    <div className="App">
      <h1 className="title">Docker Image Gallery</h1>
      <ImageService>
        <ImageGallery />
      </ImageService>
    </div>
  );
}

export default App;
