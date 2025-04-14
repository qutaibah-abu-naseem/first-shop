import React from "react";
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#222", color: "white", padding: "40px 0" }}>
      <Container>
        <Grid container spacing={4}>
          {/* 1. About the Store */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Your E-Commerce Store</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              A store that provides you with the best products at the highest quality and best prices.
            </Typography>
          </Grid>

          {/* 2. Important Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Important Links</Typography>
            <Typography variant="body2">- Products</Typography>
            <Typography variant="body2">- Offers</Typography>
            <Typography variant="body2">- Shipping Policy</Typography>
            <Typography variant="body2">- Contact Us</Typography>
          </Grid>

          {/* 3. Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton color="primary">
                <Facebook sx={{ color: "white" }} />
              </IconButton>
              <IconButton color="primary">
                <Instagram sx={{ color: "white" }} />
              </IconButton>
              <IconButton color="primary">
                <Twitter sx={{ color: "white" }} />
              </IconButton>
              <IconButton color="primary">
                <YouTube sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Grid>

          {/* 4. Newsletter Subscription */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Subscribe to Our Newsletter</Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              sx={{ backgroundColor: "white", borderRadius: 1, mt: 1, width: "100%" }}
            />
            <Button variant="contained" color="primary" sx={{ mt: 1, width: "100%" }}>
              Subscribe Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;