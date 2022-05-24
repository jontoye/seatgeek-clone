import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
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
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [dateBtnText, setDateBtnText] = useState('Filter by date')

  const onDateChange = (newDate) => {
    setDate(newDate);
    setDateBtnText(format(newDate, 'MMM dd'))
  }
  console.log(date)

  const FilterButton = styled(Button)({
    textTransform: 'none',
    borderColor: '#bbb',
    borderRadius: '50px',
    padding: '3px 15px'
  })

  return (
    <Container>
        <Typography variant='subtitle' color='textSecondary'>
          Browse Events
        </Typography>
        <Typography mb={2} sx={{ fontWeight: 500 }} variant='h4'>{location}</Typography>

        <FilterButton
          variant='outlined'
          color='secondary'
          sx={{ marginRight: '15px' }}
        >
          Change Location
        </FilterButton>

        <FilterButton 
          variant='outlined' 
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