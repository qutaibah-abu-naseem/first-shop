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

const Header = () => {
  const context = useContext(api);
  const [hideheader, sethideheader] = useState(false);
  const [mdheader, setmdheader] = useState(false);

  const Search = (e) => context.setsearch(e.target.value);

  // Hide header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) sethideheader(true);
    else sethideheader(false);
  });

  const style_light = {
    color: "black",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
  };
  const style_dark = {
    color: "white",
    height: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.46)",
  };

  const arrheader = ["all", "clothes", "model", "sport", "machine"];

  return (
    <header className="w-full h-24 bg-zinc-00">
      {/* Top Header */}
      <motion.div
        animate={hideheader ? { position: "absolute", zIndex: "-1" } : {}}
        className="text-center text-2xl flex items-center justify-between w-full"
        style={context.dark ? style_dark : style_light}
      >
        <div
          onClick={() => context.setmode_header("main")}
          className="flex items-center cursor-pointer"
        >
          <img src="/img/logo.png" alt="error" style={{ width: 40, height: 45 }} />
          <span className="text-[18px]">shopping</span>
        </div>

        <div className="mb-3 ms-20 text-[15px]">welcom in my shopping</div>

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

      {/* Category Bar */}
      <motion.div
        className="flex items-center justify-between text-2xl w-full"
        style={{
          color: context.dark ? "black" : "white",
          backgroundColor: context.dark ? "white" : "black",
          height: 55,
        }}
      >
        {/* Desktop Categories */}
        <div id="parent-list-header" className="hidden lg:block">
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

        {/* Mobile Menu Toggle */}
        <div className="ms-3 text-[18px]">
          <ButtonBase onClick={() => setmdheader(!mdheader)}>
            <CiViewList className="text-[24px]" />
          </ButtonBase>
        </div>

        {/* Search Bar */}
        <div id="parent-search" className="text-black w-[200px] md:w-[300px] mx-4 md:mx-0">
          <IoMdSearch className="absolute mt-2 ms-1 text-black-50" />
          <input
            className="outline-none ps-5 text-lg w-full"
            onChange={Search}
            value={context.search}
            type="text"
            style={{
              border: context.dark ? "1px solid black" : "1px solid rgb(102, 97, 97)",
            }}
          />
        </div>

        {/* Services */}
        <div id="parent-service" className="pt-3">
          <ul className="flex items-center me-5 relative">
            {/* Dark Mode Toggle */}
            <li className="me-2">
              <Button
                className={context.dark ? "dark-circle" : "light-circle"}
                onClick={() => context.setdark((prev) => !prev)}
              >
                <div id="overly-mode" style={{ background: context.dark ? "white" : "black" }} />
                <CgDarkMode
                  id="mode-icon"
                  className="absolute text-xl"
                  style={{ color: context.dark ? "rgba(0,0,0,0.9)" : "white" }}
                />
              </Button>
            </li>

            {/* Language Icon */}
            <li className="me-2">
              <Button
                className={context.dark ? "dark-circle" : "light-circle"}
                onClick={() => context.setdark((prev) => !prev)}
              >
                <div id="overly-mode" style={{ background: context.dark ? "white" : "black" }} />
                <GrLanguage
                  id="mode-icon"
                  className="absolute text-lg"
                  style={{ color: context.dark ? "rgba(0,0,0,0.9)" : "white" }}
                />
              </Button>
            </li>

            {/* Cart */}
            <li>
              <motion.div>
                <Icon_cart />
              </motion.div>
            </li>
          </ul>
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

      {/* Mobile Slide Menu */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: mdheader ? 0 : "-100vw" }}
        className="hidden sm:block lg:hidden rounded-br-xl rounded-tl-xl mt-2"
        style={{
          width: "40%",
          border: "2px solid rgb(0, 151, 252)",
          backgroundColor: context.dark ? "white" : "rgb(31, 24, 9)",
          color: context.dark ? "black" : "white",
        }}
      >
        <MenuList>
          <MenuItem disableRipple>
            <ListItemText>header</ListItemText>
          </MenuItem>
          <Divider />
          {arrheader.map((item) => (
            <MenuItem key={item} disableRipple>
              <ListItemIcon>
                <IoBagHandleSharp
                  style={{
                    color: context.dark ? "rgb(9, 55, 94)" : "rgb(0, 140, 255)",
                    fontSize: 18,
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Link
                  to="/"
                  onClick={() => context.setmode_header(item)}
                  style={{
                    fontSize: 15,
                    color: context.dark ? "black" : "white",
                  }}
                  className={
                    context.mode_header === item && !context.path ? "focus border-0" : ""
                  }
                >
                  {item}
                </Link>
              </ListItemText>
            </MenuItem>
          ))}
          <Divider />
          <Link to="/choosen">
            <MenuItem
              className="mx-auto my-3 w-[90%] h-[35px] text-sm px-2 py-1 rounded-5"
              sx={{
                backgroundColor: "rgb(63, 28, 12)",
                color: "white",
                transition: "0.5s",
                "&:hover": {
                  backgroundColor: "rgba(63, 28, 12, 0.74)",
                },
              }}
            >
              show all my choosen
            </MenuItem>
          </Link>
        </MenuList>
      </motion.div>

      {/* Bottom Menu Component */}
      <Menu />
    </header>
  );
};

export default Header;
