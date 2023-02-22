import { Box } from '@mui/material'
import React from 'react'
import ContentItem from './ContentItem';


const contentArray = [
    {
        title: 'Classic Weddings', 
        description: 'Artisan cake designs with wonderful flavor that will make every moment sweet.  Ask about the events we cater to and our vegan and gluten free options.',
        img: '/1.jpg',
    },
     {
        title: 'Birthday Parties', 
        description: 'Artisan cake designs with wonderful flavor that will make every moment sweet.  Ask about the events we cater to and our vegan and gluten free options.',
        img: '/2.jpg',
    },
     {
        title: 'Artisan Design', 
        description: 'Artisan cake designs with wonderful flavor that will make every moment sweet.  Ask about the events we cater to and our vegan and gluten free options.',
        img: '/3.jpg',
    },
];

const Content = () => {
  return (
    <Box
    bgcolor='#fbf2f2'
    display='flex'
    justifyContent={'center'}
    flexDirection='column'
    width='100%'
    height='10%'
    >
        {contentArray.map((cont, index) => (
        <ContentItem 
        title={cont.title} 
        description={cont.description} 
        img={cont.img} 
        key={index}
        swap={index % 2 === 0}
        />
        ))}
    </Box>
  )
}

export default Content
