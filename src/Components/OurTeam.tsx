import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const teamTitle = "Our Team";
const teamContent = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
const teamMembers = [
  {
    name: 'Mina Collins',
    position: 'Teacher in Math',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'staff_1.jpg',
    socialLinks: [
      { icon: <FacebookIcon />, url: '#' },
      { icon: <TwitterIcon />, url: '#' },
      { icon: <LinkedInIcon />, url: '#' }
    ]
  },
  {
    name: 'Anderson Matthew',
    position: 'Teacher in Music',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'staff_2.jpg',
    socialLinks: [
      { icon: <FacebookIcon />, url: '#' },
      { icon: <TwitterIcon />, url: '#' },
      { icon: <LinkedInIcon />, url: '#' }
    ]
  },
  {
    name: 'Cynthia Misso',
    position: 'Teacher English',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'staff_3.jpg',
    socialLinks: [
      { icon: <FacebookIcon />, url: '#' },
      { icon: <TwitterIcon />, url: '#' },
      { icon: <LinkedInIcon />, url: '#' }
    ]
  }
];

const TeamSection = () => {
  return (
    <Box component="section" bgcolor="#f8f9fa" >
      <Container>
        <Box textAlign="center" mb={5} mt={5}>
              <Box sx={{ display: 'inline-block', position: 'relative',marginTop:'50px' }}>
                    <Typography variant="h4" color="#005b8c">
                      {teamTitle}
                    </Typography>
                    <Box sx={{
                      position: 'absolute',
                      bottom: '-10px',  // Adjust as needed to position the line correctly
                      left: 0,
                      width:'50px',
                      right: 0,
                      height: '3px',
                      backgroundColor: '#ec661f',
                    }} />
                  </Box>
            <Typography  align='center'  mb={2} mt={2}>
              {teamContent}
            </Typography>        
          </Box>
        <Grid container spacing={5} >
          {teamMembers.map((member, index) => (
            <Grid
            key={index}
            item
            xs={12}
            md={4}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              mb={2}
              borderRadius="50%"
              overflow="hidden"
              width={200}
              height={200}
              display="flex"
              
            >
              <img src={member.image} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          
            <Typography variant="h6" mt={2} mb={1}>
              {member.name}
            </Typography>
            <Typography color="#999" sx={{ fontSize: '16px' }} mb={2}>
              {member.position}
            </Typography>
            <Typography mb={3}>
              {member.description}
            </Typography>
            
            <Box display="flex" justifyContent="center" mb={4}>
              {member.socialLinks.map((link, i) => (
                <Box
                  key={i}
                  component="a"
                  href={link.url}
                  mx={2} // Adds margin to left and right
                  color="#005b8c"
                  display="inline-flex" // Makes sure the icons are in line
                >
                  {link.icon}
                </Box>
              ))}
            </Box>
          </Grid>
          
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
