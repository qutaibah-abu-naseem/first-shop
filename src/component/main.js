import { useContext} from "react"
import { useEffect } from "react";
import { api } from "../App";
import { Typography } from "@mui/material";
import Ourproduct from "./outproduct";
import Offers from "./offers";
import Item from "./cart";
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
      <Offers/>
      <Ourproduct/>
       <div className="my-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center min-h-screen">
         {
               context.product.map(item=>(
                        <Item title={item.title} img={item.img} isheart={item.heart}  desc={item.desc} color={item.color} price={item.price}  id={item.id}  rating={item.rating} key={item.id}/>
                    ))
                }
       </div>
    </div>
  )
}
export default Main