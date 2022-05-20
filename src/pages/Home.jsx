import { Box } from '@mui/material'
import React from 'react'
import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Box sx={{position: 'relative'}}>
      <Navbar />
      <Header />
      <FeaturedGrid />
      <Footer />
    </Box>
  )
}

export default Home