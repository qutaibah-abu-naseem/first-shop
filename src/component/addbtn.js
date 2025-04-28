import React, { useContext } from 'react'
import { api } from '../App'
import { Button} from '@mui/material';

const Addbtn = ({id}) => {
    const context=useContext(api)

    const delete_from_choosen=()=>{


        context.setproduct(prev=>{
          const updatedProducts = prev.map((item) =>
            item.id === id ? { ...item,ischoosen:false} : item
          );
          localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
          localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.ischoosen==true)));
          return updatedProducts
        })
       }
      
  return (
    
     <Button  onClick={delete_from_choosen} sx={{backgroundColor:'rgb(2, 72, 138)',fontSize:'10px',color:'white',width:'auto',position:'absolute',marginLeft:'150px'}}>delete from cart</Button>
       
  )
}

export default Addbtn