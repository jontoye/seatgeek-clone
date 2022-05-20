import React from 'react'
import { Box, Button, IconButton, Link, SvgIcon } from '@mui/material'
import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
      padding: '0 60px',
    },
    navGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      color: '#eee',
      '& .MuiButton-root': {
        color: 'inherit',
        textTransform: 'none',
        fontSize: '15px',
        width: '78px',
        fontWeight: 400,
      },
    },
    btnGroup: {
      display: { xs: 'none', md: 'block' }
    },
    logo: {
      width: '46px', 
      height: '32px',
      color: 'primary',
      display: 'flex',
      alignItems: 'center'
    },
    loginBtn: {
      display: { xs: 'none', md: 'block' },
      borderRadius: 3,
    },
    loginLogo: {
      color: 'secondary',
      display: { xs: 'block', md: 'none' },
      backgroundColor: '#eee',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: '#eee',
        transform: 'scale(1.04)'
      }
    },
    extraBtns: {
      display: { xs: 'none', reg: 'block' }
    }
  }
  return (
    <Box sx={[styles.container]}>
      <Box sx={[styles.navGroup]}>
        <Link href='#'>
          <SvgIcon 
            sx={[styles.logo]} 
            component={LogoIcon} 
            inheritViewBox
          />
        </Link>

        <Box sx={[styles.btnGroup]}>
          <Button variant='text'>Sports</Button>
          <Button variant='text'>Music</Button>
          <Button variant='text'>More</Button>
        </Box>
      </Box>

      <Box sx={[styles.navGroup]}>
        <IconButton sx={[styles.loginLogo]}>
          <PersonOutlineOutlinedIcon/>
        </IconButton>

        <Box sx={[styles.extraBtns]}>
          <Button variant='text'>Sell</Button>
          <Button variant='text'>Support</Button>
        </Box>

        <Button sx={[styles.loginBtn]} variant='contained' color='secondary' size='small'>Log in</Button>
      </Box>
    </Box>
  )
}

export default Navbar