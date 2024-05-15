import React from 'react';
import CountUp from 'react-countup';
import { Box, Container, Grid, Typography, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';


const statsData = [
  { number: 12023, label: 'No. Students', delay: '0' },
  { number: 49, label: 'No. Teachers', delay: '100' },
  { number: 12, label: 'No. Awards', delay: '200' }
];

const Stats = () => {
  return (
    <Box className="row mb-5"  mt={4}>
      {statsData.map((stat, index) => (
        <Grid item xs={12} md={4} key={index} data-aos="fade-up" data-aos-delay={stat.delay}>
        <CountUp
          start={0}
          end={stat.number}
          duration={3}
          separator=","
          style={{ fontSize: '25px',color: '#005b8c' }}
        />
        {stat.number >= 1000 ? '+' : '' }
        <Typography variant="body2" sx={{color: '#555', fontSize:'16px'}}>{stat.label}</Typography>
        </Grid>
      ))}
    </Box>


  );
};

export default Stats;
