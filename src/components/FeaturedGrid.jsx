import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FeaturedRow from './FeaturedRow'

import { getEvents } from '../api/seatgeek'

const FeaturedGrid = ({ categories, loading, city, date }) => {

  const [sports, setSports] = useState([])
  const [concerts, setConcerts] = useState([])
  const [broadway, setBroadway] = useState([])
  const [comedy, setComedy] = useState([])
  
  useEffect(() => {
    getEvents('sports', city, date)
      .then(data => setSports(data.events))
      .catch(error => console.log(error))
  }, [sports, city, date])

  useEffect(() => {
    getEvents('concert', city, date)
      .then(data => setConcerts(data.events))
      .catch(error => console.log(error))
  }, [concerts, city, date])

  useEffect(() => {
    getEvents('broadway_tickets_national', city, date)
      .then(data => setBroadway(data.events))
      .catch(error => console.log(error))
  }, [broadway, city, date])

  
  useEffect(() => {
    getEvents('comedy', city, date)
      .then(data => setComedy(data.events))
      .catch(error => console.log(error))
  }, [broadway, city, date])

  
  return (
    <Container sx={{ marginBottom: '120px' }}>
      <FeaturedRow title='Categories' items={categories} loading={loading} type='categories'/>
      <FeaturedRow title='Sports' items={sports} loading={loading} type='events'/>
      <FeaturedRow title='Concerts' items={concerts} loading={loading} type='events'/>
      <FeaturedRow title='Broadway Shows' items={broadway} loading={loading} type='events'/>
      <FeaturedRow title='Comedy' items={comedy} loading={loading} type='events'/>
    </Container>
  )
}

export default FeaturedGrid