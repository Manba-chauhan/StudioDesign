import { Container, Grid, ThemeProvider,Box, Typography ,Stack} from '@mui/material';
import React from 'react';
import theme from './theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Section3 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 20 }}>
        <Grid container>
          <Grid item md={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={8}>
                <Box
                  sx={{
                    width: "100%",
                    height: "500px",
                  }}
                >
                  {" "}
                  <img
                    src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/sofa-green-living-room-with-copy.jpg"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{ width: "100%", mt: { xs: 10, sm: 12, md: 26 }, px: 2 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "3.5rem", sm: "3.5rem",md:"3rem", lg: "3.5rem" },
                      fontFamily: "Oswald",
                      fontWeight: 200,
                    }}
                  >
                    Home is often the most valuable asset
                  </Typography>
                  <Box
                    sx={{
                      width: "25%",
                      height: "10px",
                      bgcolor: "#d9ca9e",

                      my: 2,
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    width: "100%",
                    height: "600px",
                  }}
                >
                  {" "}
                  <img
                    src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/modern-styled-entryway_23-2150695873.jpg"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Grid sx={{ height: "auto" }}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "30%",
                        flexGrow: 1,
                        pb: 3.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          mx: "auto",
                          mt: 6,
                        }}
                      >
                        <img
                          src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/57ce08b5.png"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: "center",
                          px: 2,
                          fontFamily: "sans-serif",
                          color: "secondary.text",
                          mt: 2,
                        }}
                        component={Box}
                      >
                        We believe it should support your lifestyle and elevate
                        wellbeing.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box sx={{ width: "100%", height: "400px" }}>
                      <Box sx={{ width: "100%", height: "100%" }}>
                        <img
                          src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/gray-ceramic-vase-with-mug-woode.jpg"
                          alt="img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "600px",
                  }}
                >
                  {" "}
                  <img
                    src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/2150794211.jpg"
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Section3;
