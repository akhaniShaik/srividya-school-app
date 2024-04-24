"use client";

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const SchoolPage = () => {
  const leaders = [
    {
      name: "John Doe",
      title: "Director",
      image: "/director-image.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Jane Smith",
      title: "Chairman",
      image: "/chairman-image.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Michael Johnson",
      title: "CEO",
      image: "/ceo-image.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* Management Section */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Management
          </Typography>
          <Grid container spacing={3}>
            {leaders.map((leader) => (
              <Grid item xs={12} md={4} key={leader.title}>
                <Card>
                  <CardMedia
                    component="img"
                    image={leader.image}
                    alt={leader.title}
                    sx={{
                      width: "auto",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "2px",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#c39d63" }}>
                      <span style={{ marginRight: "0.5rem" }}>
                        {leader.name}
                      </span>{" "}
                      - <span style={{ color: "#000000" }}>{leader.title}</span>
                    </Typography>
                    <Typography variant="body2">
                      {leader.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Vision and Mission */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Vision and Mission
          </Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Grid>

        {/* School Policies */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            School Policies
          </Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SchoolPage;
