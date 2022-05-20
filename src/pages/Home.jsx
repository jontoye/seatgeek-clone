import React, { useEffect, useState } from 'react'
import { getTopCategories } from '../api'
import { Box } from '@mui/material'
import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  const [topCategories, setTopCategories] = useState([])

  useEffect(() => {
    getTopCategories()
      .then(data => setTopCategories(data))
      .catch(error => console.error(error))
  },[])

  return (
    <Box sx={{position: 'relative'}}>
      <Navbar />
      <Header categories={topCategories} />
      <FeaturedGrid />
      <Footer />
    </Box>
  )
}

export default Home