import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing text='Andrés Rodríguez' />} />
        <Route path='/pictures' element={<ImageSlider slides={SliderData} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;