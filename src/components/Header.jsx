import { Box, Input, InputAdornment, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { createRef, useEffect, useState } from 'react'
import HeaderSearchDropdown from './HeaderSearchDropdown';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
    width: '100vw',
    height: {xs: '60vh', md: '70vh'},

    backgroundColor: '#000',
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
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    maxWidth: '1440px',
    position: 'absolute',
    top: '-80px',
    left: { xl: '50%'},
    transform: { xl: 'translateX(-50%)'}
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#eee',
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    maxWidth: '660px',
    marginBottom: '40px',
    lineHeight: 1.6,
    padding: '0 50px',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '25px',
  },
  heroSubtitle: {
    fontSize: '20px',
    fontWeight: 400,
  },
  search: {
    margin: '25px 0',
    width: '100%',
    position: 'relative',
  },
  searchBar: {
    width: '100%',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: 3,
    color: '#000',
    fontWeight: 600,
  }
}

const Header = ({ categories }) => {
  const [openSearchMenu, setOpenSearchMenu] = useState(false)

  const searchContainer = createRef()

  const handleSearchBarClick = () => {
    if (!openSearchMenu) { setOpenSearchMenu(true) }
  }

  // For closing dropdowns when clicked outside of container
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (
        searchContainer.current &&
        !searchContainer.current.contains(target)
      ) {
        setOpenSearchMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchContainer])
  
  return (
    <Box sx={[styles.container]}>
      <Box sx={[styles.heroImg]} />

      <Box sx={[styles.heroContent]}>
        <Typography variant='h4' sx={[styles.heroTitle]}>Let there be live</Typography>
        <Typography variant='h6' sx={[styles.heroSubtitle]}>Your next best-night-ever is waiting.</Typography>
        <Typography variant='h6' sx={[styles.heroSubtitle]}>And we have the tickets.</Typography>
        <Box sx={[styles.search]} ref={searchContainer}>
          <Input 
            sx={[styles.searchBar]} 
            onClick={handleSearchBarClick}
            placeholder='Search by team, artist, event, or venue'
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon color='secondary' />
              </InputAdornment>
            }
          >
          </Input>

          {openSearchMenu &&
          <HeaderSearchDropdown categories={ categories } />
          } 
        </Box>
      </Box>
    </Box>

  )
}

export default Header