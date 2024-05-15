"use client"; // Add this directive if needed for client-side hooks
import React from "react";
import { Box, Container, Grid, Typography, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';
import Stats from './Stats';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';


const whyChooseUsTitle = "Why Choose Us?";
const whyChooseUsContent = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.";
const useStyles = makeStyles((theme) => ({
  ulCheck: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  listItem: {
    position: 'relative',
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: '-0.2rem',
    color: '#007bff',
    fontSize: '22px',
    paddingRight: theme.spacing(2),
  },
  primaryIcon: {
    color: '#005b8c',
  },
  whiteIcon: {
    color: '#ffffff',
  },
}));

const whyChooseUsList = [
  "Separated they live",
  "Bookmarksgrove right at the coast",
  "Large language ocean"
];

const ChooseUs = () => {
    return (
        <Box component="div" >
        <Container>
          <Grid container spacing={4} >
            <Grid item xs={12} md={5}>
              <Box sx={{ gap: 2 }} mt={4}>
                <Typography variant="h4" className="line-bottom" >
                  {whyChooseUsTitle}
                </Typography>
                <Typography className="justify-text">
                  {whyChooseUsContent}
                </Typography>
                <Box component="ul" className={classes.ulCheck} data-aos="fade-up" data-aos-delay="200">
                  {whyChooseUsList.map((item, index) => (
                    <li key={index} className={classes.listItem}>
                      <span className={classes.icon}>✔</span>
                      {item}
                    </li>
                  ))}
                </Box>

                <Stats />
                <Box mt={4} mb={4}>
                <Link href="https://www.roboxautomation.com/" color="#FFFFFF" sx={{ bgcolor: '#005b8c', borderRadius: '30px', px: 4, py: 2, mr: 2, textDecoration:'none' }}>
                  Admission
                </Link>
                <Link href="https://www.roboxautomation.com/" color="#005b8c" sx={{ border:'1px solid #007bff', borderRadius: '30px', px: 4, py: 2,textDecoration:'none' }}>
                  Learn More
                </Link>
              </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={6} mt={4}>
              <Typography variant="h2" color="#005b8c" sx={{ position: 'relative', zIndex: -1 ,borderRadius: '5px'}}>
                <div className="bg-1" style={{ position: 'absolute', width: '65%', height: '100%', right: '-10%', top: '-20px', zIndex: -1, background: 'rgba(15, 183, 141, 0.2)' }}></div>
                <a href="https://vimeo.com/342333493" data-fancybox className="video-wrap">
                  <span className="play-wrap"><span className="icon-play"></span></span>
                  <Image src="/10.jpg" alt="About Srividya" width={540} height={360}/>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
    );
  };

export default ChooseUs;