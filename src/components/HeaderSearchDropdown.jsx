import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import React from 'react'

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '400px',
    overflow: 'auto',
    padding: '10px',
  },
  listIcon: {
    width: '30px',
    overflow: 'hidden',
    borderRadius: 2,
    marginRight: '20px'
  },
  listText: {
    '& .MuiListItemText-primary': {
      fontWeight: 500,
    }
  }
}

const HeaderSearchDropdown = ({ categories }) => {
  return (
    <Paper sx={[styles.container]}>
      <MenuList>
        <MenuItem disabled>Browse Categories</MenuItem>
        {categories?.map(category => (
          <MenuItem key={category.id}>
            <ListItemIcon sx={[styles.listIcon]}>
              <img src={category.images['136x136']} alt={`${category.name} icon`} width='100%'/>
            </ListItemIcon>

            <ListItemText sx={[styles.listText]}>
              {category.short_name || category.name}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}

export default HeaderSearchDropdown