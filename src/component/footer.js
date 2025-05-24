import React, { useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { api } from "../App";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  const context = useContext(api)
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
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
            <Typography variant="body2"><Link className="text-sky-100 hover:text-sky-500" to={'/#product'} onClick={() => context.setmode_header('all')}>- Products</Link></Typography>
            <Typography variant="body2"><Link className="text-sky-100 hover:text-sky-500" to={'/#offer'} >- offers</Link></Typography>
            <Typography variant="body2"><Link className="text-sky-100 hover:text-sky-500" to={'/aboutus#who'}>- about cat shop</Link></Typography>
            <Typography variant="body2" ><Link className="text-sky-100 hover:text-sky-500" to={'/aboutus#contact'}>- Contact Us</Link></Typography>
          </Grid>

          {/* 3. Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton color="primary">
                <Link to='https://web.facebook.com/qutaibh.mohamd?locale=en_GB'>
                  <Facebook sx={{ color: "white" }} />
                </Link>
              </IconButton>
              <IconButton color="primary">
                                <Link to='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'>
                                <LinkedIn sx={{ color: "white" }} />
                                </Link>
                
              </IconButton>
              <IconButton color="primary">
                <Link to='https://x.com/ForWork164313'>
                 <Twitter sx={{ color: "white" }} />
                </Link>
               
              </IconButton>
              <IconButton color="primary">
                <Link to='https://api.whatsapp.com/send/?phone=962797917763&text&type=phone_number&app_absent=0'>
                                <FaWhatsappSquare style={{ color: "white" }} />

                </Link>
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