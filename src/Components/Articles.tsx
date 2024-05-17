"use client";

import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

const articles = [
  {
    image: "kidsImage-01.jpg",
    title: "Refundable Deposit",
    cost: "₹ 5,000",
    link: "#",
    description:
      "This is a one-time fee, refunded at the time of student leaving the school.",
    delay: 100,
  },
  {
    image: "kidsImage.jpg",
    title: "Transport Fee (Optional)",
    cost: "Slab 1 ₹ 10,835, Slab 2 ₹ 14,245, Slab 3 ₹ 15,210",
    link: "#",
    description:
      "Payable for 3 terms in a year: at the time of admission, 14th August and 14th December.",
    delay: 100,
  },
  {
    image: "kidsImage-02.jpg",
    title: "Tuition Fee",
    cost: "₹ 57,800(PP 1 to Grade 9), ₹ 69,300(Grade 11)",
    link: "#",
    description:
      "Payable for 3 terms in an academic year. Tuition fee to be paid at the time of admission, 14th August and 15th December.",
    delay: 100,
  },
];

function Articles() {
  return (
    <Grid container spacing={4} alignContent="center" justifyContent="center">
      {articles.map((article, index) => (
        <Grid
          item
          xs={12}
          mt={2}
          md={10}
          mb={1}
          key={index}
          data-aos="fade-up"
          data-aos-delay={article.delay}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            sx={{
              height: "100%",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // Adding shadow to all sides
              overflowY: "hidden", // Adjusting overflow-y
            }}
          >
            <Box
              component="figure"
              sx={{
                mr: 2,
                overflow: "hidden",
                width: 400,
                height: 250,
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={article.image}
                alt={article.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ mb: 1, mt: 2 }} color="#005b8c">
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                color="#ccc"
                sx={{ whiteSpace: "pre-line" }}
                mb={1}
              >
                {article.cost.split(", ").map((slab, index) => (
                  <span key={index}>
                    {slab}
                    <br />
                  </span>
                ))}
              </Typography>
              <Typography variant="body2">{article.description}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Articles;
