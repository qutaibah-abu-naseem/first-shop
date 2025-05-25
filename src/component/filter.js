import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { api } from '../App';
import { IoMdSearch } from 'react-icons/io';
import { TfiMoreAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const context = React.useContext(api);
  const pages = [
    {
      title: 'All',
      path: '/All'
    },
    {
      title: 'Clothes',
      path: '/Clothes'
    },
    {
      title: 'Sport',
      path: '/Sport'
    },
    {
      title: 'Machine',
      path: '/Machine'
    },
    {
      title: 'Model',
      path: '/Model'
    }
  ]

 const moreLink = [
   {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About us',
      path: '/aboutus#who'
    },
    {
      title: 'Contact',
      path: '/aboutus#contact'
    }
  ]

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const Search = (e) => context.setsearch(e.target.value);
 const DrawerList = (
  <Box
    sx={{
      width: 250,
      bgcolor: context.dark ? '#202020' : '#fff',
      color: context.dark ? '#f1f1f1' : '#2c2b2b',
      height: '100%',
    }}
    role="presentation"
  >
    {/* البحث */}
    <div className="flex gap-3 items-center sm:hidden w-[200px] h-[40px] mx-auto my-3">
      <button
        onClick={toggleDrawer(false)}
        className={`h-[30px] w-[46px] rounded-full flex items-center justify-center ${
          context.dark ? 'bg-zinc-700 hover:bg-zinc-500' : 'bg-zinc-200 hover:bg-zinc-300'
        }`}
      >
        <IoMdSearch className={`${context.dark ? 'text-white' : 'text-black'}`} />
      </button>
      <input
        id="search"
        className="outline-none h-[40px] rounded-[30px] ps-2 text-sm w-full"
        onChange={Search}
        value={context.search}
        type="text"
        placeholder="search"
        style={{
          backgroundColor: context.dark ? '#333' : '#f5f5f5',
          color: context.dark ? '#fff' : '#000',
        }}
      />
    </div>

    {/* العنوان */}
    <h5 className="m-2" style={{ color: context.dark ? 'white' : 'black' }}>
      Filter
    </h5>

    {/* الروابط */}
    <List onClick={toggleDrawer(false)}>
      {pages.map((item, index) => (
        <ListItem key={index} disablePadding>
          <Link
            id={window.location.pathname === item.path ? 'focus' : ''}
            to={item.path}
            style={{
              width: '100%',
              color: context.dark ? '#f1f1f1' : '#2c2b2b',
              textDecoration: 'none',
            }}
          >
            <ListItemButton>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>

    <Divider sx={{ bgcolor: context.dark ? '#444' : '#ccc' }} />

    {/* روابط إضافية */}
    <h5 className="ms-2" style={{ color: context.dark ? '#fff' : '#000' }}>
      Links
    </h5>
    <List>
      {moreLink.map((ele,index) => (
        <ListItem key={index} disablePadding>
          <Link to={ele.path} style={{ width:'100%'}}>
           <ListItemButton
            sx={{
             
              color: context.dark ? '#f1f1f1' : '#2c2b2b',
            }}
          >
            <ListItemText primary={ele.title} />
          </ListItemButton>
          </Link>
         
        </ListItem>
      ))}
    </List>
  </Box>
);


  return (
    <div>
      <button onClick={toggleDrawer(true)} className=' hidden sm:block text-zinc-100 text-[12px] px-2 rounded-lg bg-zinc-800 hover:bg-zinc-500' >Filter</button>
      <button onClick={toggleDrawer(true)} className='block sm:hidden text-zinc-100 text-[16px] bg-zinc-700 hover:bg-zinc-500 w-[30px] h-[30px] flex items-center justify-center rounded-full' ><TfiMoreAlt /></button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
