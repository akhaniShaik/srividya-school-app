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
    <Box component="section" bgcolor="#f8f9fa">
      <Container>
        <Box textAlign="center" mb={5} mt={5}>
          <Typography variant="h4" className="line-bottom" >
              {teamTitle}
            </Typography>
            <Typography  align='center'  mb={2} mt={2}>
              {teamContent}
            </Typography>        
          </Box>
        <Grid container spacing={4} >
          {teamMembers.map((member, index) => (
            <Grid  key={index} item xs={12} sm={6} md={4} data-aos="fade-up" data-aos-delay={index * 100}>
              <Box textAlign='center'>
                <Box textAlign='center' mb={2} borderRadius="50%" overflow="hidden" width={200} height={200} >
                  <img src={member.image} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Box>
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <p>{member.description}</p>
                  <Box>
                    {member.socialLinks.map((link, i) => (
                      <Box key={i} component="a" href={link.url} mx={2}>
                        {link.icon}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
