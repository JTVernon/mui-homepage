import { AppBar, Toolbar, Box, Tabs, Tab, Button, Link, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import DrawerComponent from './DrawerComponent';
import { CustomizedTypography } from '../styles/styles';
import QuiltedImageList from '../Content/ImageList/ImageList'

const links = ['Cakes', 'Recipes', 'About', 'Contact']

const Header = () => {
    const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <AppBar sx={{bgcolor: 'transparent', boxShadow: '0', position: 'sticky'}}>
        { isMatch ? (
        <Box display='flex'>
            <CakeRoundedIcon sx={{color: 'black', padding: 1}} />
            <CustomizedTypography 
            sx={{
                padding: 0.5,
                color: 'black'
            }}
            variant='h6' 
            fontFamily='fantasy'
            >
                Broken Bowl
            </CustomizedTypography>
            <DrawerComponent links={links} />
        </Box> 
        ) : (
        <Toolbar>
          <Box sx={{
              display: 'flex', 
              width: '100%', 
              alignItems: 'center',
              }}>
            <CakeRoundedIcon sx={{color: 'black', padding: 1}} />
            <Box>
                <Tabs component={Link} sx={{textDecoration: 'none'}}>
                    {links.map((link, index) => (
                    <Tab 
                    sx={{
                    fontWeight: 'bold', 
                    textDecoration: 'none',
                    ':hover': {
                        textDecoration: 'underline',
                        textUnderlineOffset: '5px',
                        },
                    }}
                    key={index}
                    label={link} />
                    ))}
                </Tabs>
            </Box>
            <Box display='flex' marginLeft={'auto'}>
                <Button href='https://www.instagram.com/thebrokenbowlblog/' target="_blank">
                <InstagramIcon sx={{color: 'black', padding: 1}} />
                </Button>
                <Button 
                sx={{ ml: 2 }}
                variant='contained'
                >Order Form</Button>
            </Box>
          </Box>
        </Toolbar>
        )}
        <Box width='100%' height='100vh'>
            <Box
            display = "flex"
            justifyContent={'center'}
            alignContent='center'
            marginTop={3}
            marginBottom={5}
            >
            <QuiltedImageList/>
            </Box>
            <Box display='flex' width='100%'>
                <CustomizedTypography 
                fontWeight='bold'
                fontSize={{lg: 30, md: 24, sm: 18, xs: 14}}
                margin='auto' 
                variant='h4' 
                color='black' 
                textAlign={'center'}
                >
                    Find The Right Cake For Your Sweet Moment
                </CustomizedTypography>
            </Box>
        </Box>
    </AppBar>
  )
}

export default Header
