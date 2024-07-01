import { Container ,Box,Stack, 
    Typography, InputLabel, TextField,FormControlLabel ,
    Checkbox, Button, ThemeProvider} from '@mui/material';
import React from 'react';
import theme from './theme';

const Section8 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#333029", py: 8 }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            sx={{ width: "100%", height: "100%" }}
            spacing={0}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "40%" },
              }}
            >
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/ttt-min.jpg"
                alt="Img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "60%" },
                bgcolor: "white",
                pt: 10,
                px:{xs:4,sm:6,md:12},
                pb:2
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  textAlign: "center",
                  // px:2,
                  fontWeight: "bold",
                }}
                component={Box}
              >
                We can’t wait to work with you! Drop us a line and we’ll get
                back to you soon!
              </Typography>
              <Box sx={{ mt: 4, py: 2 }}>
                <Box>
                  <InputLabel>Name</InputLabel>
                  <TextField
                    variant="standard"
                    placeholder="Enter your Name"
                    fullWidth
                  />
                </Box>
                <Box sx={{ py: 4 }}>
                  <InputLabel>Email</InputLabel>
                  <TextField
                    variant="standard"
                    placeholder="Enter a valid emial address"
                    fullWidth
                  />
                </Box>
                <Box>
                  <InputLabel>Message</InputLabel>
                  <TextField
                    variant="standard"
                    placeholder="Enter your message"
                    multiline
                    rows={6}
                    fullWidth
                  />
                </Box>
                <Box sx={{ py: 2 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label=" I accept Terms of service"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#355247",
                    color: "white",
                    width: "100%",
                    py: 1.5,
                    px: 2,
                    letterSpacing: 2,
                  }}
                >
                  Submit Your Request
                </Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section8;
