import { Box, Container } from '@mui/material'
import React from 'react'
import FeaturedRow from './FeaturedRow'

const FeaturedGrid = () => {
  return (
    <Container>
      <FeaturedRow title='Categories' />
      <FeaturedRow title='Sports' />
      <FeaturedRow title='Concerts' />
      <FeaturedRow title='Broadway Shows' />
      <FeaturedRow title='Comedy' />
    </Container>
  )
}

export default FeaturedGrid