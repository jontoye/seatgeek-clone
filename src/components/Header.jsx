import { Box } from '@mui/material'
import React from 'react'

const styles = {
  container: {
    width: '100vw',
    height: {xs: '60vh', md: '70vh'},
    position: 'relative',
    backgroundColor: '#000',
    zIndex: -2,
    transform: 'translateY(-80px)'
  },
  heroImg: {

    backgroundImage: {
      xs: "url('/images/homepage-xsmall@2x.jpeg')",
      sm: "url('/images/homepage-medium@2x.jpeg')",
      md: "url('/images/homepage-medium@2x.jpeg')",
      rg: "url('/images/homepage-large.jpeg')",
      lg: "url('/images/homepage-xlarge@2x.jpeg')"
    },
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: { xs: 'contain', sm: 'cover'},
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    maxWidth: '1440px',
    position: 'absolute',
    zIndex: -1,
    top: '-80px',
    left: { xl: '50%'},
    transform: { xl: 'translateX(-50%)'}
  }
}

const Header = () => {
  return (
    <Box sx={[styles.container]}>
      <Box sx={[styles.heroImg]}>
      </Box>
    </Box>

  )
}

export default Header