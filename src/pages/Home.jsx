import React, { useEffect, useState } from 'react'
import { getTopCategories } from '../api'
import { Box } from '@mui/material'

import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'

const Home = () => {
  const [topCategories, setTopCategories] = useState([])
  const [filterLocation, setFilterLocation] = useState('Toronto, ON')
  const [filterDate, setFilterDate] = useState(new Date())

  useEffect(() => {
    getTopCategories()
      .then(data => setTopCategories(data))
      .catch(error => console.error(error))
  },[])

  return (
    <Box sx={{position: 'relative'}}>
      <Navbar />
      <Header categories={topCategories} />
      <Filter 
        location={filterLocation}
        date={filterDate}
        setLocation={setFilterLocation}
        setDate={setFilterDate}
      />
      <FeaturedGrid />
      <Footer />
    </Box>
  )
}

export default Home