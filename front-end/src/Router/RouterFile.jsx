import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Featured from '../Components/Products/Featured'
import BigSale from '../Components/Products/BigSale'
import Footer from '../Components/Footer/Footer'
const RouterFile = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Featured/>
      <BigSale />
      <Footer/>
    </div>
  )
}

export default RouterFile
