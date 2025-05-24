import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
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
      title: 'all',
      path: '/all'
    },
    {
      title: 'clothes',
      path: '/clothes'
    },
    {
      title: 'sport',
      path: '/sport'
    },
    {
      title: 'machine',
      path: '/machine'
    },
    {
      title: 'model',
      path: '/model'
    }
  ]
  React.useEffect(()=>{
    console.log(context.section)
  },[context.section])
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const Search = (e) => context.setsearch(e.target.value);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <div className="flex gap-3 items-center sm:hidden w-[200px] h-[40px] mx-auto my-3">
        <button onClick={toggleDrawer(false)} className=" h-[30px] w-[46px] bg-zinc-800 hover:bg-zinc-600 rounded-full   flex items-center justify-center">
          <IoMdSearch className=" text-gray-100" />
        </button>
        <input
          id='search'
          className="outline-none h-[40px] rounded-[30px] ps-2 text-sm w-full"
          onChange={Search}
          value={context.search}
          type="text"
          placeholder='search'

        />
      </div>
      <h5 className='m-2'>Filter</h5>
      <List onClick={toggleDrawer(false)} >
        {pages.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link id={context.section===item.title?'focus':''} 
            onClick={()=>context.setsection(item.title)} 
            to={item.path} 
            className='w-full text-gray-700 hover:text-gray-900 '>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <h5 className='ms-2'>Links</h5>
      <List>
        {['about us', 'home', 'contact us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
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
