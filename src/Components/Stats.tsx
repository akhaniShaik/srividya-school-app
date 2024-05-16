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
    <Box mt={4}>
      <Grid container spacing={2} className="mb-5"> {/* Adds spacing between grid items */}
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={stat.delay}>
            {/* Ensure the container for the number and potential '+' sign is properly aligned */}
            <Box sx={{ fontSize: '25px', color: '#005b8c', display: 'flex', alignItems: 'center' }}>
              <CountUp
                start={0}
                end={stat.number}
                duration={3}
                separator=","
              />
              {stat.number >= 1000 && '+'}
            </Box>

            {/* Description label */}
            <Typography variant="body2" sx={{color: '#555', fontSize:'16px'}}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
