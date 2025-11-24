// src/Pages/Home/Home.jsx
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Featured from '../../Components/Products/Featured';
import BigSale from '../../Components/Products/BigSale';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <BigSale />
      <Footer />
    </>
  );
};

export default Home;
