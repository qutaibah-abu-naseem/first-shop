import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { api } from '../App'

const Rmvbtn = ({id}) => {
    const context=useContext(api)

    const add_to_choosen = () => {
        //  localStorage.setItem('price',update)
         context.setproduct(prev=>{
          const updatedProducts = prev.map((item) =>
            item.id === id ? { ...item,ischoosen:true,number:1} : item
          );
          localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
          return updatedProducts
        })
      
        localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
      };
       
  return (
    <Button onClick={add_to_choosen} sx={{backgroundColor:'rgb(2, 72, 138)',fontSize:'10px',color:'white',width:'auto',position:'absolute',marginLeft:'170px'}}>add to cart</Button>       
  )
}

export default Rmvbtn