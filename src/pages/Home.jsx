import React from 'react'
import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FeaturedGrid />
      <Footer />
    </>
  )
}

export default Home