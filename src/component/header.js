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
    <header className="w-full h-[60px]   fixed z-[100]">

      <motion.div
        className="flex items-center justify-between dark:bg-zinc-500 text-2xl w-full relative px-2"
        style={{
          color: 'white',
          backgroundColor: 'rgb(0, 0, 0)',
          height: '100%',
        }}
      >
        <Link to={'/'} >
          <div
            className="flex items-center gap-3"
          >

            <img src="/img/logo.png" alt="error" style={{ width: 40, height: 45 }} />
            <span className="text-[16px] sm:text-[18px] text-zinc-100">cat shop</span>


          </div>
        </Link>


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
           
              <Link to="/login">
                <Button>
                  <span className="text-zinc-100 hover:text-sky-500 text-sm">login</span>
                  <RiLoginCircleFill
                    className='text-zinc-100'
                  />

                </Button>
              </Link>
            
          )}

        </div>

      </motion.div>



      <div className="w-full h-[40px] bg-zinc-700 dark:bg-zinc-800 flex justify-between px-2">

        <div className="  h-[40px]  block sm:hidden ">
          <TemporaryDrawer />
        </div>

        <div id="services" className="w-[70%] flex justify-around items-center mx-auto gap-3">

          {JSON.parse(localStorage.getItem('myfavo')).length ?
            <div className="w-[25px] h-[25px] mx-2 cursor-pointer hover:w-[30px] hover:h-[30px] hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full ">
              <Link to='/favor'>
                <Button disableRipple>

                  <FaHeart
                    className=" text-lg text-gray-100"
                  />
                </Button>
              </Link>

            </div> : null
          }




          {/* Language Icon */}
          <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px]  hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
            <Button
              disableRipple
              onClick={() => context.setdark((prev) => !prev)}
            >
              <GrLanguage
                className="absolute text-lg text-gray-100"

              />
            </Button>
          </div>

          {/* Cart */}
          <div>
            <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px]  hover:bg-zinc-500 duration-150   flex items-center justify-center rounded-full " >
              <Icon_cart ismenue={false} />
            </div>
          </div>





          <div className="w-[25px] h-[25px] cursor-pointer hover:w-[30px] hover:h-[30px] hover:bg-zinc-500 duration-150  flex items-center justify-center rounded-full " >
            <Button
              disableRipple
              onClick={() => context.setdark((prev) => !prev)}
            >
              <CgDarkMode
                className="absolute text-xl text-gray-100"
              />
            </Button>

          </div>




        </div>

      </div>
      <Menu />



    </header>
  );
};

export default Header;