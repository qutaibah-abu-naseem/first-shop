import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IoMdSearch,

} from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { CgDarkMode } from "react-icons/cg";

import {
  Button,
} from "@mui/material";

import Icon_cart from "./cart-icon";
import Profile from "../profile";
import { api } from "../App";
import TemporaryDrawer from "./filter";
import Menu from "./menue";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
  const context = useContext(api);
  const Search = (e) => context.setsearch(e.target.value);




  return (
    <header className="w-full h-[60px] bg-zinc-900  fixed z-[100]">

      <motion.div
        className="flex items-center justify-between dark:bg-zinc-500 text-2xl w-full relative px-2"
        style={{
          color: context.dark ? "black" : "white",
          backgroundColor: context.dark ? "white" : "black",
          height: '100%',
        }}
      >

        <div
          onClick={() => context.setmode_header("main")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/img/logo.png" alt="error" style={{ width: 40, height: 45 }} />
          <span className="text-[16px] sm:text-[18px]">cat shop</span>
        </div>



        {/* Search Bar */}
        <div id="search1" className=" flex justify-between items-center text-black w-[fit-content] h-[auto]  mx-4 mt-0 md:mx-0 relative ">
          <div className=" w-[100px] h-[40px] mt-2  hidden sm:block">
            <TemporaryDrawer />
          </div>

          <div className="hidden sm:block sm:w-[220px]  md:w-[250px] lg:w-[300px] xl:w-[400px] h-[40px]  relative">
            <p className="absolute top-[2px] h-[36px] left-2   flex items-center">
              <IoMdSearch className=" text-gray-500" />

            </p>
            <input

              className="outline-none h-[40px] rounded-[30px] ps-5 text-lg w-full "
              onChange={Search}
              value={context.search}
              type="text"
              style={{
                border: context.dark ? "1px solid black" : "1px solid rgb(102, 97, 97)",
              }}
            />
          </div>



        </div>

        {/* Services */}

     

        <div className=" pt-3 flex">
         
         
          {localStorage.getItem("email") ? (
            <Profile />
          ) : (
            <motion.p whileHover={{ scale: 1.1 }}>
              <Button>
                <Link to="/login">
                  <RiLoginCircleFill
                    className={context.dark ? "text-light" : "text-black"}
                  />
                </Link>
              </Button>
            </motion.p>
          )}
          
        </div>

      </motion.div>
      <div className="w-full h-[40px] bg-zinc-700 flex justify-between px-2">
       
    <div className="  h-[40px]  block sm:hidden ">
            <TemporaryDrawer />
          </div>

          <div id="services" className="w-[70%] flex justify-around items-center mx-auto gap-3">


         
            <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-700 hover:bg-zinc-500 duration-150  flex items-center justify-center rounded-full " >
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
            <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-700 hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
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
              <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-700 hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
                <Icon_cart ismenue={false} />
              </div>
            </div>
            {JSON.parse(localStorage.getItem('myfavo')).length?
             <div className="w-[25px] h-[25px] mx-2 cursor-pointer hover:w-[30px] hover:h-[30px] bg-zinc-700 hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full ">
              <Button>
                <Link to='/favor'>
                <FaHeart
                  className=" text-lg"
                  style={{ color: context.dark ? "rgba(0,0,0,0.9)" : "white" }}
                />
                </Link>
                
              </Button>
            </div>:null
            }
              
          
        </div>

      </div>
      <Menu />



    </header>
  );
};

export default Header;