import {  useContext, useState,useEffect } from "react"
import { api } from "../App";
import Item from "./cart";

const Sport=()=>{
    const context=useContext(api)
    useEffect(()=>{
        if(context.product){
            context.setsport(context.product.filter((item)=>item.type2==="sport"))
        }
    },[context.product])

    return(
        <section id="product-sec">
        <h3 className="text-center" style={{color:context.dark?"white":'black',marginBottom:'75px'}}>some of </h3>
            <div className="flex flex-wrap ">
                {context.result.length? context.result.map(item=>(
                     <Item title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating}/>
                )):
                context.sport.map(item=>(
                     <Item title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating}/>
                ))}
            </div>
            {/* <Footer/> */}
        </section>
       
    )
}
export default Sport