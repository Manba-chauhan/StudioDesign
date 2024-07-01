import { Box, Container, Typography ,Button, ThemeProvider} from '@mui/material';
import React from 'react';
import theme from './theme';

const Section4 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 10 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "200px",
                border: "25px solid #355247",
                borderRadius: "50%",
                bgcolor: "white",
                ml: { xs: 0, sm: -20, md: -50 },
              }}
            ></Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "300px", sm: "500px", md: "600px" },
                  height: { xs: "300px", sm: "500px", md: "600px" },
                  // border: "25px solid #355247",
                  borderRadius: "50%",
                  bgcolor: "#d9ca9e",
                  // position:"absolute",
                  // left:"20px"
                  ml: { xs: 0, sm: 0, md: 30 },
                  mt: { xs: 15, sm: "-60px" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "300px", sm: "500px", md: "600px" },
                    height: { xs: "300px", sm: "500px", md: "600px" },
                    // border: "25px solid #355247",

                    // bgcolor: "#d9ca9e",
                    // position:"absolute",
                    // left:"20px"
                    ml: { xs: 0, sm: 0, md: 10 },
                    mt: { xs: 10, sm: 30 },
                    // mt:-20
                  }}
                >
                  <img
                    src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/Untitled-3.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      position: "relative",
                      top: -100,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: {xs:"100%",sm:"80%",md:"60%"},
              height:"auto",
              bgcolor: "white",
              // boxShadow: 20,
              px: 5,
              position: "relative",
              top: {xs:0,sm:-100,md:-300},
              py: 4,
              mt:{xs:-15,sm:-20,md:0},
              ml:{xs:0,sm:6,md:0}
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", sm: "2rem",md:"3.5rem" },
                  fontWeight: 100,
                  //   letterSpacing: 1,
                  fontFamily: "Open Sans",
                  mb: 3,
                }}
                component={Box}
              >
                We believe that the essence of life is love
              </Typography>
              <Typography variant='body1' sx={{lineHeight:2,color:"GrayText"}}>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section4;
