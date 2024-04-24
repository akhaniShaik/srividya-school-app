import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

interface ImageWithOverlayProps {
  imageUrl: string;
  title: string;
}

const ImageWithOverlay = ({ imageUrl, title }: ImageWithOverlayProps) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Fee"
          sx={{ objectFit: "cover", width: "100%"}}
        />
        <CardContent sx={{ position: "absolute", bottom: 0, left: 0, top : "50%", width: "100%", textAlign: "center", }}>
          <Typography variant="h4" component="div" sx={{ color: "#DC6B19", zIndex: 1, }}>
            {title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ImageWithOverlay;
