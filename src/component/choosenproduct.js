
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import React, { useEffect, useRef, useState,useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { IoIosStar } from "react-icons/io";
import { api } from '../App';
import Item from "./cart";
import Badge from "./padage";
const Choosen = () => {
    const context=useContext(api)
    const refwarper=useRef(null)
    const refleft_icon=useRef(null)
    const refright_icon=useRef(null)
    const[diraction,setdiraction]=useState(100)   

    const scroll_right=()=>{
        
        setdiraction(prev=>prev+200)
        if(diraction>=refwarper.current.scrollWidth-refwarper.current.clientWidth){
            return setdiraction(refwarper.current.scrollWidth-refwarper.current.clientWidth)
        }
        
     }
     const scroll_left=()=>{
        setdiraction(prev=>prev-200)
        if(diraction<=0){
            setdiraction(0)
        }
     }
    useEffect(()=>{
        refwarper.current.scrollLeft=diraction
        if(JSON.parse(localStorage.getItem('myfavo')).length>3){
          if(diraction>=refwarper.current.scrollWidth-refwarper.current.clientWidth){
            refright_icon.current.style.display='none'
            refleft_icon.current.style.display='block'

        }else if(diraction<=0){
            refleft_icon.current.style.display='none'
            refright_icon.current.style.display='block'
        }else if(diraction>0 &&diraction<refwarper.current.scrollWidth-refwarper.current.clientWidth){
            refright_icon.current.style.display='block'
            refleft_icon.current.style.display='block'
        }
        }else{
           refright_icon.current.style.display='none'
            refleft_icon.current.style.display='none'
        }
      
    },[diraction])
    
      useEffect(()=>{
        context.setpath(true)
     },)
    const handl_mouseup=(e)=>{
       
    }
  return (
    <div className="pt-[170px]">
      
        <div  className="flex flex-wrap ">
          {JSON.parse(localStorage.getItem('choosen')).map(item=>(
             <Card 
                 
                  className='ms-3 mb-5 position-relative pb-3' 
                  sx={{
                    width: 300,
                    color: context.dark ? 'white' : 'black',
                    backgroundColor: context.dark ? 'rgb(53, 49, 49)' : 'rgb(236, 236, 236)'
                  }} 
                  style={{ height: 'auto' }}
                >
                   
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img}
                      alt={item.title}
                      style={{cursor:'default'}}
                    />
                  
                    <CardContent >
                      <Typography className="flex flex-column items-center justify-between mt-3 " variant="body2" sx={{ color: context.dark ? 'rgb(199, 199, 199)' : 'rgb(27, 26, 26)' }}>
                        <div>
                           <Badge counter={item.number} id={item.id} price={item.price}/>
                         </div>
                        
                         
                      </Typography>
                      <Typography gutterBottom  className='flex flex-column items-center gap-3 px-1' component="div">
                      <div>
                      price: <strong className='text-sky-400'>{item.price}</strong> $
                    </div>
                      <div>
                            <button
                             className="bg-red-600 px-2 py-[3px] rounded-5 text-light text-[15px] w-[200px]"
                             onClick={() => {
                              context.setproduct(prev=>{
                                const updatedProducts = prev.map((ele) =>
                                  ele.id === item.id ? { ...ele,number:0,ischoosen:false} : ele);
                                localStorage.setItem('myproduct',JSON.stringify(updatedProducts))
                                localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
                                return updatedProducts
                              }
                            )
                            if(!JSON.parse(localStorage.getItem('choosen')).length){
                              window.location='/'
                            }
                            }}
                             > Remove</button>
                         </div>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                 
                </Card>
          ))}
           <div className="w-[90%] h-[5px] my-4 mx-auto rounded-full" style={{backgroundColor:context.dark?'rgb(247, 247, 247)':'rgb(43, 42, 42)'}}></div>
        </div>

        <div id='sweaper' className='w-[100vw] position-relative'>
            <p ref={refleft_icon} onClick={scroll_left} className="text-gray-700 hover:text-gray-900 hover:scale-125   hover:border-gray-900  text-3xl  position-absolute top-50 start-10 border-2 border-gray-700 rounded-full cursor-pointer" style={{transition:'0.5s'}}>
              <FaChevronLeft/>  
            </p>
            <div id='warper' className="mb-5" onMouseMove={handl_mouseup} ref={refwarper}>
               {
                    JSON.parse(localStorage.getItem('myfavo')).map(item=>(
                        <div id='side' >
                           <Item   title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating} id={item.id}/>
                        </div>
                   ))
                  

                    }
                
            </div>

            <p  ref={refright_icon} onClick={scroll_right} className="text-gray-700 hover:text-gray-900 hover:scale-125   hover:border-gray-900  text-3xl  position-absolute top-50 end-8 border-2 border-gray-700 rounded-full cursor-pointer" style={{transition:'0.5s'}}>
              <FaChevronRight/>  
            </p>
        </div>
    </div>
  )
}

export default Choosen