import React from 'react';
import { Box, Grid, IconButton, InputAdornment, Link, Stack, Typography, SvgIcon, TextField, useMediaQuery, useTheme } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ReactComponent as LogoIcon } from '../assets/logo.svg'
import { ReactComponent as AppleIcon } from '../assets/apple.svg'
import GoogleIcon from '../assets/google.png'

const RESOURCES = ['About', 'Press', 'Investors', 'Jobs', 'Inclusion', 'Event News', 'Help & Support', 'Sell on SeatGeek', 'SeatGeek Enterprise', 'SeatGeek Creators'];

const SOCIAL = ['Twitter', 'Facebook', 'Instagram'];

const DEVELOPERS = ['Platform', 'Developer Blog'];

const styles = {
  title: {
    fontWeight: '600',
    marginBottom: '20px'
  },
  section: {
    marginBottom: '20px'
  },
  logo: {
    width: '60px', 
    height: '40px',
    color: 'black',
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    width: '120px',
    height: '100%',
    color: 'black'
  }
}

const Footer = () => {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Grid container sx={{ padding: '35px'}}>
            <Grid item xs={6} md={4} sx={styles.section}>
              <Typography sx={styles.title} component='p'>Resources</Typography>
              <Stack spacing={2}>
              {RESOURCES.map(link => (
                <Typography color="gray"  key={link}>{link}</Typography>
              ))}

              </Stack>
            </Grid>
            <Grid item xs={6} md={8}>
              <Grid container>
                <Grid item xs={12} md={6} sx={styles.section}>
                  <Typography sx={styles.title} component='p'>Social</Typography>
                  <Stack spacing={2}>
                  {SOCIAL.map(link => (
                    <Typography color="gray" key={link}>{link}</Typography>
                  ))}

                  </Stack>
                </Grid>
                <Grid item xs={12} md={6} sx={styles.section}>
                  <Typography sx={styles.title} component='p'>Developers</Typography>
                  <Stack spacing={2}>
                    {DEVELOPERS.map(link => (
                      <Typography color="gray"  key={link}>{link}</Typography>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          {isDesktop && 
            <Box sx={{ padding: '0 35px'}}>
              <Typography sx={styles.title}>Download the App</Typography>
              <TextField 
                fullWidth
                placeholder='Enter phone number to send a link' 
                helperText='Message and data rates may apply.' 
                InputProps={{
                  endAdornment: <InputAdornment position="end"><IconButton><ArrowRightAltIcon /></IconButton></InputAdornment>
                }}
              />
    
            </Box>
          }
          <Box sx={{ padding: '0 35px', display: 'flex', alignItems: 'center'}}>
            <Link href='#'>
              <SvgIcon 
                sx={styles.button}
                component={AppleIcon} 
                inheritViewBox
              />
            </Link>
            <Link href="#">
              <img width='150px'src={GoogleIcon} alt="google play store" />
            </Link>
          </Box>
        </Grid>

      </Grid>





      <hr />

      <Box sx={{ padding: '35px', display: 'flex', justifyContent: 'space-between'}}>
        <Stack direction='row' spacing={2}>
          <Link href='#'>
            <SvgIcon 
              sx={[styles.logo]} 
              component={LogoIcon} 
              inheritViewBox
            />
          </Link>
          <Typography color="gray">&copy; 2022 SeatGeek. All rights reserved.</Typography>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Typography color="gray">Privacy</Typography>
          <Typography color="gray">Terms</Typography>
          <Typography color="gray">Site map</Typography>
        </Stack>
      </Box>
    </>
  )
}

export default Footer