import { useContext} from "react"
import { useEffect } from "react";
import { api } from "../App";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import About from "./about";
import Feature from "./feature";
import Ourproduct from "./outproduct";
const Main = () => {

 
  const context = useContext(api)
  useEffect(() => {
    context.setshowheader(true)
    document.body.classList.remove("login")

  
  })


  return (
    <div>
      <main style={{ display: context.hidemain ? 'none' : 'block' }} className={context.dark ? "main-dark" : "main-light"}>
        <div id="container-main" className="grid grid-cols-2 grid-rows-2 w-100">
          <div className=" w-[50vw] flex flex-col gap-3 px-5  pt-[70px]">
            <Typography variant="h4" className="text-sky-700">
              shooping and  enjoy
            </Typography>
            <p className="text-gray-700">
            Discover premium sportswear and gear designed to elevate your performance. Shop the latest collections and stay ahead in style and strength
            </p>
            <button className="bg-zinc-800 w-[150px] h-[40px] text-light rounded-[30px] hover:bg-zinc-600">shooping</button>
          </div>
          <div className="w-[50vw] flex justify-center items-center">
            <img src="/img/item1.jpg" loading="lazy" className="rounded-full w-[300px] h-[300px]" width='300' height='300' />
          </div>

        </div>
      </main>
      <About/>
      <motion.div initial={{ width: '0' }} transition={{ type: 'spring', damping: 20 }} whileInView={{ width: '100%', backgroundColor: 'rgb(166, 174, 176)' }} className="h-[10px]  mb-3 rounded-3"></motion.div>
      <Feature/>
      <Ourproduct/>
    </div>
  )
}
export default Main