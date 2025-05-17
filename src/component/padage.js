import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { IoBagHandleSharp } from "react-icons/io5";
import RemoveIcon from '@mui/icons-material/Remove';
import { api } from '../App';
import { useContext } from 'react';


const My_badge=({counter,id})=> {
      const context=useContext(api)
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
    className='px-3'
      sx={{
        width:'300px',
        color: 'action.active',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    
    >
     
        <Badge color="secondary"  badgeContent={counter}>
          <IoBagHandleSharp className='text-xl' style={{color:context.dark?'white':'gray'}}/>
        </Badge >
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              context.setproduct(prev=>{
                const updatedProducts = prev.map((item) =>
                  item.id === id ? { ...item,number:item.number<1?0:--item.number ,ischoosen:item.number<1?false:item.ischoosen} : item);
                localStorage.setItem('myproduct',JSON.stringify(updatedProducts))
                localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
                return updatedProducts
              });
              if(!JSON.parse(localStorage.getItem('choosen')).length){
                window.location='/'
              }
              }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              context.setproduct(prev=>{
                const updatedProducts = prev.map((item) =>
                  item.id === id ? { ...item,number:++item.number} : item
                );
                 localStorage.setItem('myproduct',JSON.stringify(updatedProducts))
                localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
                return updatedProducts
              })
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
     
    </Box>
  );
}

export default My_badge