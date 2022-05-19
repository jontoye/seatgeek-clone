import { Box } from '@mui/material'
import React from 'react'
import FeaturedRow from './FeaturedRow'

const FeaturedGrid = () => {
  return (
    <Box>
      <FeaturedRow title='Categories' />
      <FeaturedRow title='Sports' />
      <FeaturedRow title='Concerts' />
      <FeaturedRow title='Broadway Shows' />
      <FeaturedRow title='Comedy' />
    </Box>
  )
}

export default FeaturedGrid