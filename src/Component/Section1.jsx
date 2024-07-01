import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "./theme";

const Section1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage:
            "url('https://assets.nicepagecdn.com/d2cc3eaa/50595/images/modern-apartment-with-comfortable-a-min.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        //   py:2,
        }}
      >
        <Container>
          <Box
            sx={{
              float: "right",
              width: { xs: "100%", md: "50%" },
              bgcolor: "primary.contrastText",
              mt: { xs: 50, md:20,lg: 30 },
            //   mb: 20,
              p: { xs: 2, md: 4 },
              color: "secondary.light",
              //   transition: "background-color 0.3s",
              //   "&:hover": {
              //     bgcolor: "rgba(0, 0, 0, 0.5)",
              //   },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.2rem" },
                  fontWeight: 600,
                //   letterSpacing: 1,
                  fontFamily: "Open Sans",
                  mb:2
                }}
              >
                ABOUT STUDIO
              </Typography>
              <Typography
                variant="h4"
                sx={{

                  fontSize: { xs: "2.25rem", sm: "3rem" },
                  width:{xs:"100%",sm:"80%"},
                  lineCamp:8,
                  fontWeight: 100,
                  letterSpacing:2,
                  fontFamily: "Open Sans",
                }}
              >
                Welcome to Interior Studio
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
                }}
                color="secondary"
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section1;
