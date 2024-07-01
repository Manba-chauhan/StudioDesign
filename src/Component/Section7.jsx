import { Container,Box, Typography,Grid } from '@mui/material';
import React from 'react';

const Section7 = () => {
  return (
    <Box sx={{ mt:{xs:10,sm:10,md:-40} }}>
      <Container>
        <Box sx={{ width: { xs: "100%", sm: "80%", md: "50%" }, mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontFamily: "Oswald",
              textAlign: "center",
              letterSpacing: 3,
            }}
          >
            Information partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "sans-serif",
              textAlign: "center",
              fontSize: "16px",
              px: { xs: 0, md: 8 },
              my: 2,
              color: "GrayText",
            }}
          >
            Our ​forward-thinking work featured in Architectural Digest, Elle
            Decor, GQ Italia and others.
          </Typography>
        </Box>
        <Grid
          container
          spacing={{xs:2,sm:10}}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ width: "100%", height: "366px" }}>
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/1.png"
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ width: "100%", height: "366px" }}>
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/4.png"
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ width: "100%", height: "366px" }}>
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/5.png"
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ width: "100%", height: "366px" }}>
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/50595/images/2.png"
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Section7;
