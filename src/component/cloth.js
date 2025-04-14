import {  useContext, useState,useEffect } from "react"
import { api } from "../App";
import Item from "./cart";

const Clothes=()=>{
    const context=useContext(api)

    return(
        <section id="product-sec">
        <h3 className="text-center" style={{color:context.dark?"white":'black',marginBottom:'75px'}}>some of </h3>
            <div className="flex flex-wrap ">
                {context.result.length? context.result.map(item=>(
                     <Item title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating}/>
                )): context.product.map(item=>(
                    <Item title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating}/>
               ))
                }
            </div>
        </section>
       
    )
}
export default Clothes