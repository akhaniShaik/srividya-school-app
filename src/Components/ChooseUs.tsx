"use client"; // Add this directive if needed for client-side hooks
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Stats from "./Stats";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";

const whyChooseUsTitle = "Why Choose Us?";
const whyChooseUsContent =
  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.";
const whyChooseUsList = [
  "Separated they live",
  "Bookmarksgrove right at the coast",
  "Large language ocean",
];

const ChooseUs = () => {
  return (
    <Box component="div">
      <Container>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ gap: 2 }} mt={4}>
              <Box sx={{ display: "inline-block", position: "relative" }}>
                <Typography variant="h4" color="#005b8c">
                  {whyChooseUsTitle}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-10px", // Adjust as needed to position the line correctly
                    left: 0,
                    width: "50px",
                    right: 0,
                    height: "3px",
                    backgroundColor: "#ec661f",
                  }}
                />
              </Box>

              <Typography textAlign="justify" lineHeight={2} mt={2} mb={2}>
                {whyChooseUsContent}
              </Typography>
              <ul
                className="mb-5"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ listStyleType: "none" }}
              >
                {whyChooseUsList.map((item, index) => (
                  <li
                    key={index}
                    className={index === 0 ? "primary" : ""}
                    style={{ position: "relative", lineHeight: "2" }}
                  >
                    <DoneIcon sx={{ color: "#005b8c", fontSize: "25px" }} />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <Stats />
              <Box mt={4} mb={4}>
                <Link
                  href="/"
                  color="#FFFFFF"
                  sx={{
                    bgcolor: "#005b8c",
                    borderRadius: "30px",
                    px: 3,
                    py: 2,
                    mr: 2,
                    textDecoration: "none",
                  }}
                >
                  Admission
                </Link>
                <Link
                  href="/"
                  color="#005b8c"
                  sx={{
                    border: "1px solid #007bff",
                    borderRadius: "30px",
                    px: 3,
                    py: 2,
                    textDecoration: "none",
                  }}
                >
                  Learn More
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={6} mt={4}>
            <Typography
              variant="h2"
              color="#005b8c"
              sx={{ position: "relative", zIndex: -1, borderRadius: "5px" }}
            >
              <div
                className="bg-1"
                style={{
                  position: "absolute",
                  width: "65%",
                  height: "100%",
                  right: "-5%",
                  top: "-20px",
                  zIndex: -1,
                  background: "rgba(15, 183, 141, 0.2)",
                }}
              ></div>
              <a
                href="https://vimeo.com/342333493"
                data-fancybox
                className="video-wrap"
              >
                <span className="play-wrap">
                  <span className="icon-play"></span>
                </span>
                <Image
                  src="/10.jpg"
                  alt="About Srividya"
                  width={540}
                  height={360}
                  style={{
                    width: "100%", // Set width to 100% by default
                    height: "auto", // Maintain aspect ratio
                  }}
                />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
