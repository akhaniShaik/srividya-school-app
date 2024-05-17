// Import necessary components and styles
"use client";
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Fancybox as FancyBox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import SearchIcon from '@mui/icons-material/Search';
import Masonry from '@mui/lab/Masonry';  // Import Masonry from MUI lab

// CSS for the overlay and icon
const overlayStyles = {
  position: 'relative',
  borderRadius: 1, // Rounded borders
  overflow: 'hidden', // Ensure the rounded borders are applied
  '&:hover:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)', // Black overlay with opacity
    zIndex: 1,
  },
  '&:hover .icon': {
    opacity: 1,
  },
  '& img': {
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)', // Zoom effect on hover
  }
};

const iconStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: 48, // Size of the icon
  opacity: 0,
  transition: 'opacity 0.3s',
  zIndex: 2,
};

// Component definition
const ImageGallery = () => {
  useEffect(() => {
    FancyBox.bind('[data-fancybox="gallery"]', {});
    return () => {
      FancyBox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  const images = [
    { src: '/img-school-2-min.jpg' },
    { src: '/img_9.jpg' },
    { src: '/img_6.jpg' },
    { src: '/img_7.jpg' },
    { src: '/img_10.jpg' },
    { src: '/img-school-5-min.jpg' },
    { src: '/img_1.jpg' },
    { src: '/img_2.jpg' },
    { src: '/img_3.jpg' },
    { src: '/img-school-1-min.jpg' },
    { src: '/img_4.jpg' },
    { src: '/img_5.jpg' },
    { src: '/img_8.jpg' },
   
  ];

  return (
    <Box component="section">
      <Box component="div" >
        <Grid container spacing={2} justifyContent="center" alignItems="center" mt={2} mb={2}>
          <Grid item xs={10}>
            <Masonry columns={{ xs: 1, sm: 1, md: 3 }} spacing={2}>
              {images.map((image, index) => (
                <Box
                  key={index}
                  component="a"
                  href={image.src}
                  className="item-wrap mb-4"
                  data-fancybox="gallery"
                  sx={overlayStyles}
                  alignItems="center" // Center align content
                >
                  <Box sx={iconStyles} className="icon">
                    <SearchIcon />
                  </Box>
                  <Image src={image.src} alt={`Gallery image ${index + 1}`} layout="responsive" width={600} height={400} />
                </Box>
              ))}
            </Masonry>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ImageGallery;
