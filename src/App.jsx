import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import ReviewSection from './components/ReviewSection';
import RouteError from './components/RouteError';


function App() {

  return (
    <>
      <RouteError />
      <Navbar />
      <ReviewSection />
    </>
  )
}

export default App
