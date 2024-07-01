import { Container, Box, ThemeProvider, Stack, Paper, Typography,Button } from "@mui/material";
import React from "react";
import theme from "./theme";

const Section2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 10 }}>
        <Container sx={{ width: "100%", mx: "auto" }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "298px", sm: "380px", md: "543px" },
                height: { xs: "368px", sm: "442px", md: "660px" },
                mx: "auto",
              }}
            >
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/-min.jpg"
                alt="imges"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  bgcolor: "#d9ca9e",
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  position: "relative",
                  left:{xs:'-20px',sm:'-120px',md:'-60px'},
                  top: -110,
                  zIndex: 200,
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                // position: "relative",
                width: {xs:"100%",sm:"80%",md:"50%"},
                height: "300px",
                bgcolor: "primary.contrastText",
                mt: { xs: 60, sm: 70, md: 50 },
                ml: { xs: 0, sm: 10, md: -30 },
                // right:-120
              }}
            >
              <Box
                sx={{
                  width: {xs:"85%",sm:"85%"},
                  height: "550px",
                  bgcolor: "secondary.main",
                  boxShadow: 10,
                  position: "relative",
                  mt:{xs:-30,sm:-43},
                  px: 5,
                  py: 4,
                  mb: 2,
                  //   ml:-20
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "2.25rem", sm: "3rem" },
                    width: { xs: "100%", sm: "80%" },
                    lineCamp: 8,
                    fontWeight: 100,
                    letterSpacing: 2,
                    fontFamily: "Open Sans",
                  }}
                >
                  Real-time Visualization
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: { xs: "14px", sm: "17px" },
                    lineHeight: 2,
                    mt: 2,
                    fontWeight: 400,
                    color: "secondary.Text",
                    // px:,
                    // fontFamily:'serif'
                  }}
                  component={Box}
                >
                  Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus
                  mauris vitae ultricies leo integer malesuada. Massa enim nec
                  dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus
                  suspendisse faucibus interdum.
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: { xs: "14px", sm: "18px" },
                    lineHeight: 2,
                    mt: 2,
                    // fontWeight: 400,
                    color: "primary",
                    // px:,
                    letterSpacing: 1,
                    fontFamily: "Open sans",
                  }}
                  component={Box}
                  //   color="primary.light"
                >
                  Images from Freepik
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    letterSpacing: 4,
                    mt: 4,
                    px: 5,
                    py: 1.5,
                    border: "2px solid",
                    fontFamily: "Open Sans",
                    fontWeight: 100,
                    // color: "secondary.main",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "secondary.main",
                      borderColor: "white",
                    },
                  }}
                  color="secondary"
                >
                  LEARN MORE
                </Button>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      bgcolor: "#d9ca9e",
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      position: "relative",
                    //   mt:-600,
                      left: {xs:120,sm:200, md:250,lg:300},
                      top: {xs:"-550px",sm:"-550px" },
                      zIndex: -200,
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section2;
