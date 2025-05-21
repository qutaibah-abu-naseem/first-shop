import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";
import {
  IoMdSearch,

} from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { CgDarkMode } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";

import {
  Button,
  ButtonBase,
  Divider,
  IconButton,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import Icon_cart from "./cart-icon";
import Menu from "./menue";
import Profile from "../profile";
import { api } from "../App";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const context = useContext(api);
  const Search = (e) => context.setsearch(e.target.value);

  // Hide header on scroll
 

 

  const arrheader = ["all", "clothes", "model", "sport", "machine"];

  return (
    <header className="w-full h-[60px] bg-zinc-00 ">
      
      <motion.div
        className="flex items-center justify-between text-2xl w-full relative px-2"
        style={{
          color: context.dark ? "black" : "white",
          backgroundColor: context.dark ? "white" : "black",
          height:'100%',
        }}
      >
      
 <div
          onClick={() => context.setmode_header("main")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/img/logo.png" alt="error" style={{ width: 40, height: 45 }} />
          <span className="text-[18px]">cat shop</span>
        </div>
        
        

        {/* Search Bar */}
        <div  id="search"  className="text-black w-[200px] h-[40px] lg:w-[300px] mx-4 mt-0 md:mx-0 relative">
          <p  className="absolute top-[2px] h-[36px] left-2   flex items-center">
                      <IoMdSearch className=" text-gray-500" />

          </p>
          <input
         
            className="outline-none h-[40px] rounded-lg ps-5 text-lg w-full"
            onChange={Search}
            value={context.search}
            type="text"
            style={{
              border: context.dark ? "1px solid black" : "1px solid rgb(102, 97, 97)",
            }}
          />
        </div>

        {/* Services */}
        
          <div className="flex items-center gap-3 me-5 relative">
            {/* Dark Mode Toggle */}

             <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-900 hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
               <Button
                onClick={() => context.setdark((prev) => !prev)}
              >
                <CgDarkMode
                  className="absolute text-xl"
                  style={{ color: context.dark ? "rgba(0,0,0,0.9)" : "white" }}
                />
              </Button>
              
             </div>              
            

            {/* Language Icon */}
             <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-900 hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
              <Button
                onClick={() => context.setdark((prev) => !prev)}
              >
                <GrLanguage
                  className="absolute text-lg"
                  style={{ color: context.dark ? "rgba(0,0,0,0.9)" : "white" }}
                />
              </Button>
            </div>

            {/* Cart */}
            <div>
             <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-900 hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
                <Icon_cart />
              </div>
            </div>
          </div>
        
  <div className="sm:me-4 lg:me-4 pt-3">
          {localStorage.getItem("email") ? (
            <Profile />
          ) : (
            <motion.p whileHover={{ scale: 1.1 }}>
              <Button>
                <Link to="/login">
                  <RiLoginCircleFill
                    className={`text-3xl ${context.dark ? "text-light" : "text-black"}`}
                  />
                </Link>
              </Button>
            </motion.p>
          )}
        </div>

      </motion.div>

      {/* Floating to-favor button */}
      {context.tochoosen && (
        <div
          className="fixed z-[31] w-[50px] h-[50px] flex items-center justify-center rounded-full start-[47%]"
        >
          <div
            id="goto-choosen"
            className="absolute w-[50px] h-[50px] flex items-center justify-center bg-zinc-800/50 hover:bg-zinc-900/75 rounded-full"
            style={{ transition: "0.5s", top: context.hideheader ? "8%" : "15%" }}
          >
            <IconButton sx={{ borderRadius: "50%", width: 50, height: 50, p: 0 }}>
              <Link
                to="/choosen"
                id="to-favor"
                className="text-[20px] hover:text-white flex items-center justify-center hover:pt-2 hover:text-[23px]"
                style={{ transition: "0.5s" }}
              >
                <FaArrowDown />
              </Link>
            </IconButton>
          </div>
        </div>
      )}


      {/* Bottom Menu Component */}
      {/* <Menu /> */}
      <motion.div className="h-[28px] w-[40%] bg-zinc-700/50 relative  rounded-3 flex justify-between  items-center "
        animate={{ x: context.showslice ? -6 : '-35vw' }}
      >
        <div id="parent-list-header" >
           <ul className="flex">
            {arrheader.map((item) => (
              <Link key={item} to="/">
                <motion.li
                  className={
                    context.mode_header === item && !context.path ? "focus" : ""
                  }
                  onClick={() => context.setmode_header(item)}
                  animate={{
                    cursor: "pointer",
                    color: context.dark ? "black" : "white",
                  }}
                  whileHover={{ color: "hsl(210, 100%, 65%)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {item}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
        <div id="open&close" className="w-[fit-content]  flex text-[20px] absolute end-2 ">
          {context.showslice ?
            <FaArrowLeft className="cursor-pointer text-gray-50 hover:text-sky-800" style={{ transition: 'color ease 1s' }} onClick={() => context.setshowslice(prev => !prev)} /> :
            <FaArrowRight className="cursor-pointer text-gray-50 hover:text-sky-800" style={{ transition: 'color ease 1s' }} onClick={() => context.setshowslice(prev => !prev)} />
          }


        </div>
      </motion.div>
    </header>
  );
};

export default Header;
