import * as React from 'react';
import { useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import CardMedia from '@mui/material/CardMedia';
import { Navigation } from 'swiper/modules';

import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IoIosStar } from "react-icons/io";
import { api } from '../App';
import Addbtn from './addbtn';
import Rmvbtn from './rmvbtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Item = ({ title, desc, color, rating, price, date, img, id }) => {
  const context = React.useContext(api);
  const swiperRef = useRef(null);

  const currentProduct = context.product.find(item => item.id === id);
  useEffect(() => {
    context.setpath(false)
  },)


  const Addfavor = () => {
    context.settochoosen(true)
    context.setproduct(prev => {
      const updatedProducts = prev.map((item) =>
        item.id === id ? { ...item, heart: !item.heart } : item
      );
      localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
      localStorage.setItem('myfavo', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item => item.heart === true)))
      return updatedProducts
    })

  };

  const Deletfavor = () => {

    // إزالة المنتج من المفضلة وتحديث حالة heart
    context.setproduct(prev => {
      const updatedProducts = prev.map((item) =>
        item.id === id ? { ...item, heart: !item.heart } : item
      );
      localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
      return updatedProducts
    })
    localStorage.setItem('myfavo', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item => item.heart === true)))

    if (JSON.parse(localStorage.getItem('myfavo')).length < 1) {
      context.settochoosen(false)

    } else {
      context.settochoosen(true)
    }
  };

  const Active = () => {
    context.setactive(currentProduct);
    window.location.href = '/add';
  };





  return (
    <Card
      onClick={() => console.log(id)}
      className='mb-5 relative pb-3'
      sx={{
        width: 300,
        color: context.dark ? 'white' : 'black',
        backgroundColor: context.dark ? 'rgb(53, 49, 49)' : 'rgb(236, 236, 236)'
      }}
      style={{ height: 'auto' }}
    >

      <CardActionArea>
        <IconButton
          onClick={() => swiperRef.current?.slidePrev()}
          className="!absolute top-[45%] left-0 z-50 bg-white/80 hover:bg-white"
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
        onClick={()=>swiperRef.current.slideNext()}
         className="!absolute top-[45%] right-0 z-50 bg-white/80 hover:bg-white"
        >
          <ArrowForwardIos/>
        </IconButton>
        <Swiper
          slidesPerView={1}
          onSwiper={(siper) => swiperRef.current = siper}
          loop={true}
          modules={[Navigation]}
        >

          <SwiperSlide>
            <CardMedia
              component="img"
              image={img}
              alt={title}
              loading='lazy'
              style={{ cursor: 'pointer', height: '300px' }}
              onClick={Active}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-[300px] w-[100%]  flex items-center justify-center'>
              <h4 className='text-black'>anther image #1</h4>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-[300px] w-[100%]  flex items-center justify-center'>
              <h4 className='text-black'>anther image #2</h4>

            </div>
          </SwiperSlide>
        </Swiper>

       
        <CardContent  >
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
         <p className=' text-2xl z-3 absolute bottom-0 ' style={{ display: context.path ? 'none' : 'block' }}>
          {currentProduct && currentProduct.heart ? (
            <FaHeart
              onClick={(e) => {
                e.stopPropagation(); // لمنع تفعيل الحدث الخاص بالبطاقة
                Deletfavor();
              }}
              className='text-sky-600'
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
        <div className='w-[auto] h-[45px]'>
          {currentProduct && currentProduct.ischoosen ?
            <Addbtn id={id} />
            : <Rmvbtn id={id} />}
        </div>
      </div>
    </Card>
  );
};

export default Item;
