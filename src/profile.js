import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { api } from './App';
import { Button } from '@mui/material';
import { CgDarkMode } from 'react-icons/cg';
import { GrLanguage } from 'react-icons/gr';
import Icon_cart from './component/cart-icon';

const Profile=()=> {
  const context=React.useContext(api)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex',marginTop:'-15px', textAlign: 'center',padding:'0 20px'}}>
       
        <Tooltip title="Account settings" className='d-flex items-center gap-2'>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width:{xs:28,sm:32} ,height:{xs:28,sm:32},textTransform:'capitalize' }}>{localStorage.getItem('name')?localStorage.getItem('name')[0]:''}</Avatar>
          </IconButton>
          <h6 className='mt-1 hidden md:block text-sky-600' style={{textTransform:'capitalize'}}>{localStorage.getItem('name')?localStorage.getItem('name'):''}</h6>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
           <Tooltip title="Account settings" className='d-flex items-center '>
          <IconButton
            onClick={handleClick}
            size="small"
           
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32,textTransform:'capitalize' }}>{localStorage.getItem('name')?localStorage.getItem('name')[0]:''}</Avatar>
          </IconButton>
          <h6 className='mt-2 text-[18px] ' style={{textTransform:'capitalize',color:context.dark?'rgb(95, 214, 250)':'rgb(2, 87, 112)'}}>{localStorage.getItem('name')?localStorage.getItem('name'):''}</h6>
        </Tooltip>
        </MenuItem>
        <MenuItem onClick={handleClose}>
           <div className="flex items-center gap-3 me-5 relative  md:hidden">
            {/* Dark Mode Toggle */}

             <div className="w-[25px] h-[25px] cursor-pointer  hover:w-[30px] hover:h-[30px] bg-zinc-50 hover:bg-zinc-300 duration-150   flex items-center justify-center rounded-full " >
               <button
                onClick={() => context.setdark((prev) => !prev)}
              >
                <CgDarkMode 
                  className="text-xl text-gray-600"
                />
              </button>
              
             </div>              
            

            {/* Language Icon */}
            <div className="w-[25px] h-[25px] cursor-pointer  hover:w-[30px] hover:h-[30px] bg-zinc-50 hover:bg-zinc-300 duration-150   flex items-center justify-center rounded-full " >
               <button
                onClick={() => context.setdark((prev) => !prev)}
              >
                <GrLanguage
                  className=" text-lg text-gray-600"
                />
              </button>
            </div>

            {/* Cart */}
            <div>
            <div className="w-[25px] h-[25px] cursor-pointer  hover:w-[30px] hover:h-[30px] bg-zinc-50 hover:bg-zinc-300 duration-150   flex items-center justify-center rounded-full " >
                <Icon_cart ismenue={true} />
              </div>
            </div>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{
          handleClose()
          localStorage.removeItem('email')
                    localStorage.removeItem('password')
                              localStorage.removeItem('name')


        }}>
          <ListItemIcon >
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export default Profile