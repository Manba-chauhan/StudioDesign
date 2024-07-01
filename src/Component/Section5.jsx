import { ThemeProvider, Box, Container, Typography,Button } from "@mui/material";
import React from "react";
import theme from "./theme";

const Section5 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage:
            "url('https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/cbaf297c984b5f0caa2ceedc/h-min.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: { md: "100vh", xs: "auto" },
          mt: {xs:10,sm:10,md:-15},
          display: "flex",
          alignItems: "center", // Center content vertically
        }}
      >
        <Container>
          <Box
            sx={{
              width: { xs: "100%", sm: "60%" },
              float: "right",
              mt: { xs: 10, md: -20 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textAlign: { xs: "center", sm: "right" },
                color: "secondary.main",
                fontFamily: "sans-serif",
                fontWeight: 100,
                lineClamp: 2,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                display: "block", // To ensure lineClamp works
                overflow: "hidden", // To ensure lineClamp works
                textOverflow: "ellipsis", // To ensure lineClamp works
                whiteSpace: "normal", // To ensure lineClamp works
                WebkitBoxOrient: "vertical", // To ensure lineClamp works
                WebkitLineClamp: 2, // To ensure lineClamp works
              }}
            >
              Your new home features an impressive array of design-forward
              elements hand curated by our award-winning team.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                letterSpacing: 4,
                mt: 5,
                px: 5,
                py: 1.5,
                border: "1px solid",
                fontFamily: "Open Sans",
                fontWeight: 100,
                color: "secondary.main",
                "&:hover": {
                  bgcolor: "white",
                  color: "primary.main",
                  borderColor: "white",
                },
                float:"right",
                mb:4,
              }}
              color="secondary"
            >
              LEARN MORE
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section5;
