import {  motion } from "framer-motion";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";
import Button from '@mui/material/Button';
import { GrLanguage } from "react-icons/gr";
import { CgDarkMode } from "react-icons/cg";
import Icon_cart from "./cart-icon";
import { api } from "../App";
import IconButton from '@mui/material/IconButton';
import { FaArrowDown } from "react-icons/fa";

import {  useContext,useState } from "react";
import Menu from "./menue";
import Profile from "../profile";
const Header=()=>{
    const context=useContext(api)
    const[hideheader,sethideheader]=useState(false)
    // useEffect(()=>{},[])
    const Search=(item)=>{
        context.setsearch(item.target.value)
    }
        window.addEventListener('scroll',()=>{
           if(window.scrollY>=80){
            sethideheader(true)
           }else{
            sethideheader(false)
           }
        })
    const style_light={
        color:'black',
        height:'50px',
        backgroundColor:'rgba(255, 255, 255, 0.88)'
    }
    const style_dark={
        color:'white',
        height:'50px',
        backgroundColor:'rgba(0, 0, 0, 0.46)'
    }
    return(
       <>
       <header className=" bg-zinc-00  w-100 h-24">
        <motion.div animate={hideheader?{position:'absolute',zIndex:'-1'}:{}} className="text-center  text-2xl w-100 flex items-center justify-content-between" style={context.dark?style_dark:style_light }> 
                <div onClick={()=>context.setmode_header('main')}  className="flex items-center" style={{cursor:'pointer'}}>
                  <img src="/img/logo.png" style={{width:'40px',height:'45px'}} alt="error"/>
                  <span style={{fontSize:'18px'}}>shopping</span>
                </div>
                <div className="mb-3">
                <span className="ms-20" style={{fontSize:'15px'}}>welcom in my shopping</span>
                </div>
                <div>
                    {localStorage.getItem('email')?
                        <Profile/> :  <motion.p  whileHover={{scale:1.1}} className="pt-3">
                        <Button ><Link to='/login'><RiLoginCircleFill  className={context.dark?"text-3xl text-light":"text-3xl text-black"}/></Link></Button>                    
                     </motion.p>
                    }
                    

              
                </div>
                     
        </motion.div>



        <motion.div   className='flex items-center justify-content-between   text-2xl w-100' style={{color:context.dark?'black':'white',backgroundColor:context.dark?'white':'black',height:'55px'}}>
         <div id="parent-list-header">
            <ul className='flex'>
                <Link to='/'><motion.li className={context.mode_header==='all'&&!context.path?'focus':''} onClick={()=>context.setmode_header('all')}  animate={{cursor:'pointer',color:context.dark?'black':'white'}}  whileHover={{color:'hsl(210, 100%, 65%)'}} transition={{ type: "spring", stiffness: 300, damping: 15 }} >all</motion.li></Link>
                <Link to='/'><motion.li className={context.mode_header==='clothes'&&!context.path?'focus':''} onClick={()=>context.setmode_header('clothes')} animate={{cursor:'pointer',color:context.dark?'black':'white'}} whileHover={{color:'hsl(210, 100%, 65%)'}} transition={{ type: "spring", stiffness: 300, damping: 15 }}>cloth</motion.li></Link>
                <Link to='/'><motion.li className={context.mode_header==='model'&&!context.path?'focus':''} onClick={()=>context.setmode_header('model')}  animate={{cursor:'pointer',color:context.dark?'black':'white'}} whileHover={{color:'hsl(210, 100%, 65%)'}} transition={{ type: "spring", stiffness: 300, damping: 15}}>model</motion.li></Link>
                <Link to='/'><motion.li className={context.mode_header==='sport'&&!context.path?'focus':''} onClick={()=>context.setmode_header('sport')} animate={{cursor:'pointer',color:context.dark?'black':'white'}} whileHover={{color:'hsl(210, 100%, 65%)'}} transition={{ type: "spring", stiffness: 300, damping: 15 }}>sport</motion.li></Link>              
                <Link to='/'><motion.li className={context.mode_header==='machine'&&!context.path?'focus':''} onClick={()=>context.setmode_header('machine')} animate={{cursor:'pointer',color:context.dark?'black':'white'}} whileHover={{color:'hsl(210, 100%, 65%)'}} transition={{ type: "spring", stiffness: 300, damping: 15 }}>machine</motion.li> </Link>           
             </ul>
         </div>
         <div id="parent-search" className="text-black"  style={{display:context.mode_header==='main'?'none':'block'}}>
                <IoMdSearch className="position-absolute mt-2 ms-1 text-black-50" />
               <input  className="outline-none ps-5 text-lg" onChange={(item)=>Search(item)} value={context.search}   type="text" style={{border:context.dark?' 1px solid black':' 1px solid rgb(102, 97, 97)'}}/> 
        </div>



        <div id="parent-service" className="pt-3" > 
            <ul className="flex items-center  me-5 position-relative">
            <li className="me-2">
                <div id="parent-icon" >
                    <Button class={context.dark?'dark-circle':'light-circle'}  onClick={()=>context.setdark(prev=>!prev)} >
                        <div id="overly-mode" style={{background:context.dark?'white':'black'}}> </div>
                        <CgDarkMode id="mode-icon" className="position-absolute text-xl"  style={{color:context.dark?'rgba(0, 0, 0, 0.9)':'white'}} />
                    </Button>
                </div>  
            </li>
            <li className="me-2">
                <div id="parent-icon" >
                    <Button class={context.dark?'dark-circle':'light-circle'}  onClick={()=>context.setdark(prev=>!prev)} >
                        <div id="overly-mode"  style={{background:context.dark?'white':'black'}}> </div>
                        <GrLanguage id="mode-icon"  className="position-absolute text-lg"  style={{color:context.dark?'rgba(0, 0, 0, 0.9)':'white'}}/>
                        </Button>
                </div>  
            </li>

            <li>
                <motion.div>
                   <Icon_cart/>
                </motion.div>
            </li>
               
            </ul>
           
      
        </div>
        </motion.div>
        <div  className="w-[50px] h-[50px] flex items-center justify-center  rounded-full  position-fixed  start-[47%]" style={{zIndex:'31'}}>
            {context.tochoosen?
            <div id="goto-choosen" className="w-[50px] h-[50px] flex items-center justify-center bg-zinc-800/50 rounded-full hover:bg-zinc-900/75 position-absolute  start-[47%]" style={{transition:'0.5s',top:context.hideheader?'8%':'15%'}}>
            <IconButton  sx={{borderRadius:'50%',width:'50px', height:'50px',padding:'0'}}>
               <Link to='/choosen' id="to-favor" className="text-[20px]  hover:text-white w-100 h-[100] flex items-center justify-center hover:pt-2 hover:text-[23px]" style={{transition:'0.5s'}}><FaArrowDown/> </Link> 
           </IconButton>        
            </div>:''
            }
             
            </div>
            <Menu />
       </header>
      
       </>
    )
}
export default Header