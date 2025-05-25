import { useContext} from "react"
import { useEffect } from "react";
import { api } from "../App";
import { Typography } from "@mui/material";
import Ourproduct from "./outproduct";
import Offers from "./offers";
import Item from "./cart";
import Product from "./product";
const Main = () => {

 
  const context = useContext(api)
  useEffect(() => {
    context.setshowheader(true)
    document.body.classList.remove("login")

  
  })


  return (
    <div>
      <main style={{ display: context.hidemain ? 'none' : 'block' }} className={context.dark ? "main-dark" : "main-light"}>
        <div id="container-main" className="flex md:flex-row flex-col gap-5">
          <div className="flex flex-col gap-3 md:px-5 px-1 pt-[70px]">
            <Typography className="text-sky-700 dark:text-sky-400 " sx={{fontSize:{sm:'30px',xs:'24px'}}}>
              shooping and  enjoy
            </Typography>
            <p className="text-gray-700 dark:text-gray-100 md:w-[500px] w-[90vw] md:text-[18px] text-[15px]">
            Discover premium sportswear and gear designed to elevate your performance. Shop the latest collections and stay ahead in style and strength
            </p>
            <button className="bg-zinc-800  w-[150px] h-[40px] text-light rounded-[30px] hover:bg-zinc-600" onClick={()=>window.location.href='/All#product'}>shooping</button>
          </div>

        </div>
      </main>
      <Offers/>
      <Ourproduct/>
       <Product/>
    </div>
  )
}
export default Main