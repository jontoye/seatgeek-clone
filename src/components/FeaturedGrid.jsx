import { Box, Container } from '@mui/material'
import React from 'react'
import FeaturedRow from './FeaturedRow'

const FeaturedGrid = ({ categories, loading }) => {
  return (
    <Container sx={{height: '100vh'}}>
      <FeaturedRow title='Categories' categories={categories} loading={loading}/>
      {/* <FeaturedRow title='Sports' />
      <FeaturedRow title='Concerts' />
      <FeaturedRow title='Broadway Shows' />
      <FeaturedRow title='Comedy' /> */}
    </Container>
  )
}

export default FeaturedGrid