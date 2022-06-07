import React, { useEffect, useState } from 'react'
import { getTopCategories, getCurrentCityName } from '../api'
import { Box } from '@mui/material'

import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'

const Home = () => {
  const [coords, setCoords] = useState([]);

  const [topCategories, setTopCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [filterLocation, setFilterLocation] = useState('');
  const [filterDate, setFilterDate] = useState(new Date());

  useEffect(() => {
    getTopCategories()
      .then(data => {
        setTopCategories(data);
        setLoadingCategories(false);
      })
      .catch(error => console.error(error))
  },[])

  // Get user's current coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setCoords([pos.coords.longitude, pos.coords.latitude]);
    })
  }, [])

  // Use reverse geocoding to get city name from coords
  useEffect(() => {
    // only call API if coords have been set
    if (coords.length > 0) {
      getCurrentCityName(coords)
        .then(data => {
          const city = data.features[0].text;
          const region = data.features[0].context.find(item => item.id.startsWith('region')).short_code.replace(/\w*[-]/, '')
          setFilterLocation(`${city}, ${region}`)
        })
        .catch(err => console.error(err));
    }
  },[coords])

  return (
    <Box sx={{position: 'relative'}}>
      <Navbar />
      <Header categories={topCategories} />
      <Filter 
        location={filterLocation}
        date={filterDate}
        setDate={setFilterDate}
        setCoords={setCoords}
      />
      {topCategories.length > 0 && 
        <FeaturedGrid 
          categories={topCategories}  
          loading={loadingCategories}
          city={filterLocation.toLowerCase().split(',')[0]}
          date={filterDate}
        />
      }
      <Footer />
    </Box>
  )
}

export default Home