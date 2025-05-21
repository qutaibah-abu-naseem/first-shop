import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { api } from '../App';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  const Icon_cart=()=> {
        const context=useContext(api)
    return (
      <IconButton aria-label="cart" onClick={()=>{
        if(JSON.parse(localStorage.getItem('choosen')).length){
           context.setisshow(prev=>!prev)
        }else{
          context.setisshow(false)
        }
      }}>
          <div>
          <StyledBadge badgeContent={JSON.parse(localStorage.getItem("choosen")).length} color="secondary">
          <ShoppingCartIcon sx={{fontSize:'22px',color:{xs:'',md:context.dark?'':'rgb(228, 228, 228)'}}}/>
          </StyledBadge>
          </div>
      </IconButton>
    );
  }
  export default Icon_cart