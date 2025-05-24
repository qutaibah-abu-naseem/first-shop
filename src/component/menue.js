import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { TiDeleteOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { useContext } from 'react';
import {api} from '../App';
import {Link} from 'react-router-dom';
const Menu=()=> {
      const context=useContext(api)
      const Remove_all=()=>{
        context.setproduct(prev=>{
          const update=prev.map(item=>({...item,ischoosen:false}))
          localStorage.setItem('myproduct', JSON.stringify(update));
          localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
          return update
        })
        context.setisshow(false)
        if(window.location.pathname==='/'){
        }else{
          window.location.pathname='/'
        }
      }
      const Remove_Item=(id)=>{
      context.setproduct(prev=>{
        const update=prev.map((item)=>item.id===id?{...item,ischoosen:false}:item)
        localStorage.setItem('myproduct', JSON.stringify(update));
    localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
        return update
      })

      if(JSON.parse(localStorage.getItem('choosen')).length){
        context.setisshow(true)
     }else{
       context.setisshow(false)
       if(window.location.pathname==='/choosen'){
         window.location.pathname='/'
      }
     }
   
      }
  return (
    <Paper sx={{ width: 320, maxWidth: '100%',position:'fixed',right:'1%',display:context.isshow?'block':'none',backgroundColor:context.dark?'rgb(43, 42, 42)':'white',color:context.dark?'white':'black'}}>
      <MenuList >
        <MenuItem sx={{cursor:'default','&:hover':{backgroundColor:'none'}}}  disableRipple>
          <ListItemText>total: <span>{context.price} $</span></ListItemText>
          <Typography  variant="body2" sx={{ color:context.dark?'rgb(230, 229, 229)':'text.secondary' ,'&:hover':{ color: 'rgb(235, 230, 230)',backgroundColor:'rgb(158, 154, 154)'} ,cursor:'pointer',padding:'5px',borderRadius:'50%',transition:'0.3s'}}>
            <MdDelete className='text-[20px]'onClick={Remove_all} />
          </Typography>
        </MenuItem>
        <Divider />
        <div style={{overflowY:'auto',maxHeight:'170px',height:'auto'}}>
          {JSON.parse(localStorage.getItem('choosen')).map(item=>(
            <MenuItem sx={{cursor:'default','&:hover':{backgroundColor:'none'}}} disableRipple>
            <ListItemIcon>
              <IoBagHandleSharp  style={{color:context.dark?'rgb(0, 140, 255)':'rgb(9, 55, 94)',fontSize:'18px'}}  />
            </ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
            <Typography variant="body2" sx={{ color:context.dark?'rgb(230, 229, 229)':'text.secondary' }} >
              <TiDeleteOutline onClick={()=>Remove_Item(item.id)} className='text-[20px] hover:text-[23px] cursor-pointer' style={{transition:'0.3s'}}/>
            </Typography>
          </MenuItem>
          ))}
        </div>
        <Divider />
        <Link to='/choosen'>
        <MenuItem sx={{backgroundColor:'rgb(63, 28, 12)',color:'white',transition:'0.5s','&:hover':{backgroundColor:'rgba(63, 28, 12, 0.74)'}}} className=' px-2 py-1 mx-auto my-3 rounded-5 w-[90%] h-[35px]'>
           <button className=' mx-auto my-auto text-sm'>show all my choosen</button>
        </MenuItem>
        </Link>
      </MenuList>
    </Paper>
  );
}
export default Menu
