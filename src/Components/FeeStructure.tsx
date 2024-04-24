"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Grid,
  CardMedia,
} from "@mui/material";

const FeeStructure = () => {
  return (
    <Card sx={{ backgroundColor: "black", padding: 2 }}>
      <CardHeader
        title="Fee Structure - 24-25"
        sx={{ backgroundColor: "white" }}
      />
      <CardContent sx={{ backgroundColor: "white" }}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            padding={2}
          >
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography variant="body1" color="secondary">
                ₹ 5,000
              </Typography>
              <Typography variant="h6">Refundable Deposit</Typography>
              <Typography variant="body2">
                This is a one-time fee, refunded at the time of student leaving
                the school
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              image="/kidsImage.jpg"
              alt="Logo"
              sx={{ height: 200, position: "relative", objectFit: "cover",borderRadius:"2px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            padding={2}
          >
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography variant="body1" color="secondary">
                ₹ 57,800(PP 1 to Grade 9) <br /> ₹ 69,300(Grade 11)
              </Typography>
              <Typography variant="h6">Tuition Fee</Typography>
              <Typography variant="body2">
                Payable for 3 terms in an academic year. Tuition fee to be paid
                at the time of admission, 14th August and 15th December
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              image="/kidsImage-01.jpg"
              alt="Logo"
              sx={{ height: 200, position: "relative", objectFit: "cover",borderRadius:"2px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            padding={2}
          >
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography variant="body1" color="secondary">
                Slab 1 ₹ 10,835 <br /> Slab 2 ₹ 14,245 <br /> Slab 3 ₹ 15,210
              </Typography>
              <Typography variant="h6">Transport Fee (Optional)</Typography>
              <Typography variant="body2">
                Payable for 3 terms in a year: at the time of admission, 14th
                August and 14th December
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              image="/kidsImage-02.jpg"
              alt="Logo"
              sx={{ height: 200, position: "relative", objectFit: "cover",borderRadius:"2px" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeeStructure;
