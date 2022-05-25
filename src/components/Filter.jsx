import React, { useState } from 'react';
import { Button, Container, InputAdornment, Modal, OutlinedInput, Paper, Popover, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { format } from 'date-fns';
import {  styled } from '@mui/system'

const Filter = ({
  location,
  date,
  setLocation,
  setDate,
}) => {

  const [dateBtnText, setDateBtnText] = useState('Filter by date');
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [cityFilterAnchor, setCityFilterAnchor] = useState(null);

  const onDateChange = (newDate) => {
    setDate(newDate);
    setDateBtnText(format(newDate, 'MMM dd'))
  }

  const handleCityClick = (event) => {
    setCityFilterAnchor(event.currentTarget);
  }

  const handleCityClose = () => {
    setCityFilterAnchor(null)
  }

  const isCitySearchOpen = Boolean(cityFilterAnchor)

  const FilterButton = styled(Button)({
    textTransform: 'none',
    borderColor: '#bbb',
    borderRadius: '50px',
    padding: '3px 15px',
    position: 'unset',
  })

  return (
    <Container>
        <Typography variant='subtitle' color='textSecondary'>
          Browse Events
        </Typography>
        <Typography mb={2} sx={{ fontWeight: 500 }} variant='h4'>{location}</Typography>

        <FilterButton
          id='cityBtn'
          variant='outlined'
          color='secondary'
          sx={{ marginRight: '15px' }}
          onClick={handleCityClick}
        >
          Change Location
        </FilterButton>

        <Popover
          open={isCitySearchOpen}
          onClose={handleCityClose}
          anchorEl={() => document.getElementById('cityBtn')}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{ marginTop: '10px' }}
        >
            <OutlinedInput
              size='small'
              variant='outlined'
              sx={{ width: '320px', borderRadius: '50px', margin: '20px 10px' }}
              placeholder='Search by city...'
              startAdornment={
                <InputAdornment position='start'>
                  <SearchIcon color='primary' />
                </InputAdornment>
              }
            />        
        </Popover>

        <FilterButton 
          variant={dateBtnText === 'Filter by date' ? 'outlined' : 'contained'} 
          color='secondary'
          onClick={() => setDatePickerOpen(isDatePickerOpen => !isDatePickerOpen)}
        >
          {dateBtnText}
        </FilterButton>

        {isDatePickerOpen && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              disablePast
              open={isDatePickerOpen}
              onOpen={() => setDatePickerOpen(true)}
              onClose={() => setDatePickerOpen(false)}
              inputFormat='MM/dd/yyyy'
              value={date}
              onChange={onDateChange}
              renderInput={(params) => <TextField sx={{visibility: 'hidden' }} {...params} /> }
            />
          </LocalizationProvider>
        )}

      </Container>
  )
}

export default Filter