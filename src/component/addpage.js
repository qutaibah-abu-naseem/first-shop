import React, { useContext, useEffect, useRef, useState } from 'react'
import { TbRowInsertTop } from "react-icons/tb";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Item from "./cart";
import { GrStatusGood } from "react-icons/gr";
import { TfiCup } from "react-icons/tfi";
import { api } from '../App';

const Addpage = () => {
  const refinpt=useRef(null)
  const refinpt2=useRef(null)
  const context=useContext(api)

  useEffect(() => {
    context.setshowheader(true)
  }, [])

  const [image, setimage] = useState('')
  const [image2, setimage2] = useState('')

  const handlchange1 = (item) => {
    if (item.target.files && item.target.files[0]) {
      const file = item.target.files[0]
      setimage(URL.createObjectURL(file))
    }
  }

  const handlchange2 = (item) => {
    if (item.target.files && item.target.files[0]) {
      const file = item.target.files[0]
      setimage2(URL.createObjectURL(file))
    }
  }

  return (
    <div className='pt-5' style={{ backgroundColor: context.dark ? 'rgb(0,0,0)' : 'rgb(255, 255, 255)', color: context.dark ? 'white' : 'black' }}>
     
      <div>
        <div className='px-4 pt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
   <div className='min-h-[300px] col-span-1 sm:col-span-2 flex items-center justify-center'>
            <img src={JSON.parse(localStorage.getItem('active')).img} alt='error' style={{ width: '100%', height: '100%' }} />
          </div>
          <div className='col-span-1 sm:col-span-2 lg:col-span-2 '>
            <div className='flex justify-between px-3 py-2'>
              <h4 className='text-sky-500'>{JSON.parse(localStorage.getItem('active')).title}</h4>
              <div className='flex gap-3'>
                <div className='w-auto flex items-center px-2 text-sm h-[30px] rounded-2' style={{ backgroundColor: context.dark ? 'rgb(255, 2, 2)' : 'rgb(235, 115, 115)', color: context.dark ? 'white' : 'rgb(160, 0, 0)' }}>
                  <FaRegHeart /><span className='ms-2'>100</span></div>
                <div className='w-auto flex items-center px-2 text-sm h-[30px] rounded-2' style={{ backgroundColor: context.dark ? 'rgb(240, 240, 240)' : 'rgba(26, 25, 25, 0.8)', color: context.dark ? 'rgb(0,0,0)' : 'white' }}>
                  <TfiCup /> <span className='ms-2'>50</span></div>
              </div>
            </div>

            <div className='flex flex-wrap justify-between items-center px-3 py-2 h-[70px] mt-5'>
              <div className='flex flex-column gap-4' style={{ color: context.dark ? 'white' : 'rgb(99, 98, 98)' }}>
                <div className='flex gap-3 text-gray-800'>
                  <div className='bg-yellow-500/75 w-auto text-zinc-900 flex items-center px-2 text-lg h-[30px] rounded-2' style={{ backgroundColor: context.dark ? 'rgb(255, 232, 23)' : 'rgb(204, 184, 1)', color: context.dark ? 'rgb(0,0,0)' : 'rgb(0,0,0)' }}>
                    <CiStar /><span className='text-sm'>4.3</span></div>
                  <div className='w-auto flex items-center px-2 text-lg h-[30px] rounded-2' style={{ backgroundColor: context.dark ? 'rgb(240, 240, 240)' : 'rgb(185, 178, 178)', color: context.dark ? 'rgb(0,0,0)' : 'rgb(0,0,0)' }}>
                    <GrStatusGood />
                  </div>
                </div>
                <p className={context.dark ? 'text-sm text-gray-100' : 'text-sm text-gray-500'}>Welcome to our store</p>
              </div>

              <button
                onClick={() => {
                  if (JSON.parse(localStorage.getItem('active')).ischoosen) {
                    context.setproduct(prev => {
                      const updatedProducts = prev.map((item) =>
                        item.id === JSON.parse(localStorage.getItem('active')).id ? { ...item, ischoosen: false } : item
                      );
                      localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
                      localStorage.setItem('active', JSON.stringify(updatedProducts.find(item => item.id === JSON.parse(localStorage.getItem('active')).id)));
                      localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item => item.ischoosen === true)));
                      return updatedProducts;
                    });
                  } else {
                    context.setproduct(prev => {
                      const updatedProducts = prev.map((item) =>
                        item.id === JSON.parse(localStorage.getItem('active')).id ? { ...item, ischoosen: true } : item
                      );
                      localStorage.setItem('myproduct', JSON.stringify(updatedProducts));
                      localStorage.setItem('active', JSON.stringify(updatedProducts.find(item => item.id === JSON.parse(localStorage.getItem('active')).id)));
                      localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item => item.ischoosen === true)));
                      return updatedProducts;
                    });
                  }
                }}
                className='w-[200px] sm:w-[300px] h-[50px] sm:h-[70px] bg-zinc-900 rounded-4 flex ms-auto my-3 hover:bg-zinc-700'
                style={{ transition: '0.5s'}}>
                <div className='text-light text-xl flex items-center mx-3 my-2'>
                  <GrStatusGood />
                  <p className='m-2 text-sm sm:text-lg'>{JSON.parse(localStorage.getItem('active')).ischoosen ? 'delete item' : 'add to cart'}</p>
                </div>
                <div className='bg-light text-gray-500 h-[42px] text-sm sm:text-[16px] sm:h-[60px] px-2 sm:px-4 rounded-1 sm:rounded-2 py-1 my-auto me-2 sm:ms-[70px] flex flex-column items-center'>total
                  <p className='text-black'>{JSON.parse(localStorage.getItem('active')).price}$</p>
                </div>
              </button>
            </div>

            <div className='flex flex-col  sm:flex-row gap-5 mt-[100px] pt-5'>
              <h5 className='text-lg mx-auto'>Colors</h5>
              <ul>
                <li className='flex gap-3'>
                  <p className='w-[30px] h-[30px] bg-gray-600 rounded-full'></p> gray
                </li>
                <li className='flex gap-3'>
                  <p className='w-[30px] h-[30px] bg-sky-600 rounded-full'></p> blue
                </li>
                <li className='flex gap-3'>
                  <p className='w-[30px] h-[30px] bg-pink-600 rounded-full'></p> pink
                </li>
                <li className='flex gap-3'>
                  <p className='w-[30px] h-[30px] bg-purple-600 rounded-full'></p> purple
                </li>
              </ul>

              <ul className='flex flex-column gap-4'>
                <li>pay-date: <span className='text-sm ms-2'>2024/3/3</span></li>
                <li>reached-date: <span className='text-sm ms-2'>2024/3/4</span></li>
                <li>Return and exchange: <span className='text-sm ms-2'>allowed</span></li>
                <li>places: <span className='text-sm ms-2'>I can reach anywhere</span></li>
              </ul>
            </div>
          </div>

          


       
        </div>
      </div>

      <div className='mt-[100px]'>
       <h4 className='text-center my-[70px] pb-2 '>
        <p className='text-4xl'>Similar content</p>
        <p className='w-[200px] h-[3px] bg-zinc-900 mx-auto rounded-4'></p>
      </h4>
         <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center min-h-screen">
                       {
                           context.result.length? context.result.map(item=>(
                               <Item title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating}/>
                          )): context.product.map(item=>(
                           <Item  title={item.title} img={item.img}  desc={item.desc} color={item.color} price={item.price} rating={item.rating} id={item.id}/>
                      ))
                       }
                      
                   </div>
      </div>
    </div>

  )
}


export default Addpage
