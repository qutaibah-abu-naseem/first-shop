import { useContext,useEffect, useState} from "react"
import { api } from "../App";
import Item from "./cart";
const Product=()=>{
    const context=useContext(api)
     useEffect(()=>{
        context.setresult({})
        context.setsearch('')
        if(context.mode_header==='clothes'){
            context.setprint(context.product.filter(item=>item.type==='cloth'))
        }
        else if(context.mode_header==='sport'){
            context.setprint(context.product.filter((item)=>item.type2==="sport"))
        }else if(context.mode_header==='machine'){
            context.setprint(context.product.filter((item)=>item.type==="machine"))
        }else if(context.mode_header==='model'){
            context.setprint(context.product.filter((item)=>item.type==="model"))
        }
        else if(context.mode_header==='all'){
            context.setprint(context.product)
          }        
      },[context.mode_header])
    return(
        <section id="product-sec" className="pt-[100px]">
            
           
        
            <div className="flex flex-wrap ">
                {
                    context.result.length? context.result.map(item=>(
                        <Item title={item.title} img={item.img} isheart={item.heart}  desc={item.desc} color={item.color} price={item.price}  id={item.id}  rating={item.rating} key={item.id}/>
                    )): context.print.map(item=>(
                    <Item  title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating} id={item.id} key={item.id}/>
               ))
                }
               
            </div>
        </section>
       
    )
}
export default Product

