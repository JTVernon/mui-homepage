import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'img1.jpg',
    title: 'Mario Cake',
    rows: 2,
    cols: 2,
  },
  {
    img: 'img2.jpg',
    title: 'Succulent Cake',
  },
  {
    img: 'img5.jpg',
    title: 'Wedding Cake',
  },
  {
    img: 'img8.jpg',
    title: 'Lego Cake',
    cols: 2,
  },
  {
    img: 'img7.jpg',
    title: 'Mr & Mrs Cake',
    cols: 2,
  },
  {
    img: 'img3.jpg',
    title: 'Wedding Cake',
    rows: 2,
    cols: 2,
  },
  {
    img: 'img6.jpg',
    title: 'Flower Cake',
  },
  {
    img: 'img9.jpg',
    title: 'Rainbow Cake',
  },
];