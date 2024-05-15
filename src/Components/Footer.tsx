import React from "react";
import { Box, Container, Grid, Typography, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Image from 'next/image';

const socialMediaIcons = [
  { icon: InstagramIcon, href: '#' },
  { icon: TwitterIcon, href: '#' },
  { icon: FacebookIcon, href: '#' },
  { icon: LinkedInIcon, href: '#' },
  { icon: PinterestIcon, href: '#' },
];

const galleryImages = [1, 2, 3, 4, 5, 6];

const contactInfo = [
  { type: 'tel', value: '+91 7997994570', href: 'tel:+917997994570' },
  { type: 'tel', value: '+91 7997994838', href: 'tel:+917997994838' },
  { type: 'mailto', value: 'adminco@srividyaschools.com', href: 'mailto:adminco@srividyaschools.com' },
];
const galleryTitle = "Gallery";
const contactTitle = "Contact";

const footerText = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
const addressText = "9-44/1 Laxmidevipalli, Kothagudem. Landmark: Beside Vijaya Nursing home lane.";
const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <Image src="/logo.JPG" alt="Sri Logo" width={304} height={91} />
            </Box>
            <Typography variant="body1" width={304} sx={{ fontSize: '14px', fontStyle: 'normal' }}>
              {footerText}  
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '16px', fontStyle: 'normal', mt: 3, fontWeight: 500 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              {socialMediaIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <IconButton
                    key={index}
                    color="default"
                    href={item.href}
                    sx={{ backgroundColor: 'white', borderRadius: '50%', width: 30, height: 30 }}
                  >
                    <IconComponent sx={{ color: 'black', width: 20, height: 20 }} />
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ fontSize: '16px' }}>{ galleryTitle }</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
              {galleryImages.map((i) => (
                <Box key={i} sx={{ width: 72, height: 72 }}>
                  <Link href={`/gal_${i}.jpg`} target="_blank">
                    <Image src={`/gal_${i}.jpg`} alt={`Gallery ${i}`} width={72} height={72} layout="fixed" />
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ fontSize: '16px', mb: 3 }}>{ contactTitle }</Typography>
            <Typography component="address" sx={{ fontSize: '14px', fontStyle: 'normal' }}>
              {addressText}
            </Typography>
            <List>
              {contactInfo.map((info, index) => (
                <ListItem key={index} sx={{ padding: 0 }}>
                  <Link href={info.href} color="rgba(255, 255, 255, 0.5)" underline="none">
                    <ListItemText
                      primary={info.value}
                      primaryTypographyProps={{ sx: { fontSize: '12px', fontWeight: 'bold' } }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} All Rights Reserved. &mdash; Designed by{' '}
            <Link href="https://www.roboxautomation.com/" color="#a30fb7">
              Robox Automation
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


