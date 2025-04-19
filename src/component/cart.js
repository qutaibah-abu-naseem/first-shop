import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { IoIosStar } from "react-icons/io";
import { api } from '../App';
import { Button} from '@mui/material';

const Item = ({ title, desc, color, rating, price, date, img, id }) => {
  const context = React.useContext(api);
  const currentProduct = context.product.find(item => item.id === id);
  useEffect(()=>{
    context.setpath(false)
  },)
  

  const Addfavor = () => {
   context.settochoosen(true)
    context.setproduct(prev=>{
      const updatedProducts = prev.map((item) =>
        item.id === id ? { ...item, heart: !item.heart } : item
      );
      localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
      localStorage.setItem('myfavo',JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.heart===true)))
      return updatedProducts
    })
    
  };

  const Deletfavor = () => {
   
    // إزالة المنتج من المفضلة وتحديث حالة heart
    context.setproduct(prev=>{
      const updatedProducts = prev.map((item) =>
        item.id === id ? { ...item, heart: !item.heart } : item
      );
      localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
      return updatedProducts
    })
    localStorage.setItem('myfavo',JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item=>item.heart===true)))
    
    if(JSON.parse(localStorage.getItem('myfavo')).length<1){
      context.settochoosen(false)

    }else{
      context.settochoosen(true)
    }
  };

  const Active = () => {
    context.setactive(currentProduct);
    window.location.href = '/add';
  };

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
    <Card 
     onClick={()=>console.log(id)}
      className='mb-5 position-relative pb-3' 
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
          image={img}
          alt={title}
          style={{cursor:'default',height:'300px'}}
        />
        <p className='position-absolute end-4 top-2 text-2xl text-sktop-8' style={{display:context.path?'none':'block'}}>
          {currentProduct && currentProduct.heart ? (
            <FaHeart 
              onClick={(e) => {
                e.stopPropagation(); // لمنع تفعيل الحدث الخاص بالبطاقة
                Deletfavor();
              }}
              class3Name='text-red-600'
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <FaRegHeart 
              onClick={(e) => {
                e.stopPropagation();
                Addfavor();
              }}
              style={{ cursor: 'pointer' }}
              className='text-sky-600'
            />
          )}
        </p>
        <CardContent  onClick={Active} >
          <Typography gutterBottom variant="h6" className='flex justify-content-between' component="div">
            <h6>{title}</h6>
            <div className='flex'>
              <IoIosStar /> <span>{rating}</span>
            </div>
          </Typography>
          <Typography variant="body2" sx={{ color: context.dark ? 'rgb(199, 199, 199)' : 'rgb(27, 26, 26)' }}>
            <p>{desc}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='text-sm flex flex-column px-3 gap-3 h-[auto]'>
        <div>
          total <strong className='text-sky-400'>{price}</strong> before taxes
        </div>
        <div className='w-[auto] h-[45px]'>
          {currentProduct&&currentProduct.ischoosen?
             <Button  onClick={delete_from_choosen} sx={{backgroundColor:'rgb(2, 72, 138)',fontSize:'10px',color:'white',width:'auto',position:'absolute',marginLeft:'150px'}}>delete from cart</Button>
            : <Button onClick={add_to_choosen} sx={{backgroundColor:'rgb(2, 72, 138)',fontSize:'10px',color:'white',width:'auto',position:'absolute',marginLeft:'170px'}}>add to cart</Button>
             }
        </div>
      </div>
    </Card>
  );
};

export default Item;
