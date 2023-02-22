import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComponent = ({ links, index }) => {
    const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
    <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
        {links.map((item) => (
            <ListItemButton
            onClick={() => setOpen(false)}
            key={index}
            >
                <ListItemText>{ item }</ListItemText>
            </ListItemButton>
        ))}
        </List>
    </Drawer>
    <IconButton 
    onClick={() => setOpen(true)}
    sx={{ ml: 'auto' }}>
        <MenuRoundedIcon color='white' />
    </IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent
