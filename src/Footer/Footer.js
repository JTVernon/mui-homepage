import { Box, Button } from '@mui/material'
import React from 'react'
import { CustomizedTypography } from '../styles/styles'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

const Footer = () => {
  return (
    <Box 
    display='flex'
    flexDirection='column'
    >
     <CustomizedTypography
     fontWeight='bold'
     fontSize={{lg: 30, md: 24, sm: 18, xs: 14}}
     variant='h3'
     paddingTop={10}
     textAlign='center'
     >
        Ready for any event
     </CustomizedTypography>
     <CustomizedTypography
     fontSize={{lg: 24, md: 20, sm: 16, xs: 14}}
     variant='div'
     textAlign='center'
     padding={4}
     >
         Customized for every person
    </CustomizedTypography>
    <Box 
    display='flex'
    margin='auto'
    justifyContent={'center'}
    padding={5}
    >
        <Button 
        endIcon={<MailRoundedIcon />}
        variant='contained'
        sx={{ 
            mr: 2,
            fontSize:{lg: 18, md: 17, sm: 12, xs: 8}
        }}
        >Email</Button>
        <Button 
        endIcon={<LocalOfferRoundedIcon />}
        variant='outlined'
        sx={{ 
            ml: 2,
            fontSize:{lg: 18, md: 17, sm: 12, xs: 8}
        }}
        >Order Form</Button>
    </Box>
    </Box>
  )
}

export default Footer
