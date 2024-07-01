import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#333333" ,width:"100%"}}>
      <Box sx={{width:{xs:"80%",sm:"60%",md:"30%"},mx:'auto',py:{xs:4,sm:10},color:"white"}}>
        <Typography variant='body1' sx={{textAlign:"center"}}>
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          nullam nunc justo sagittis suscipit ultrices.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
