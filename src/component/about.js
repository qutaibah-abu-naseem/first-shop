import React, { useContext} from 'react'
import { FaCartShopping, FaPersonCircleCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaUser } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { api } from '../App';
import { Typography } from '@mui/material';
const About = () => {
  const context = useContext(api)
   const features = [
         {
             icon: <FaUser />,
             title: 'users',
             content: '2,500 user'
         },
         {
             icon: <FaPersonCircleCheck />,
             title: 'vistors',
             content: '2,700 vistor'
         },
         {
             icon: <FaHeart />,
             title: 'likes',
             content: '900 like'
         },
         {
             icon: <FaCartShopping />,
             title: 'order',
             content: '3,500 order'
         },
     ]
  return (
    <>
      <div id='who' ref={context.refabout} className='m-3'>
        <Typography  sx={{fontSize:{sm:'35px',xs:'25px'}}}>who cat shop
        </Typography>
        <div className='md:w-[50%] w-[95%] sm:w-[85%] md:text-[18px] text-[14px] m-3'>
          Cat Shop is an online store that offers a wide selection of high-quality sportswear and fitness gear for all ages. Whether you're an athlete, a fitness enthusiast, or just starting your wellness journey, Cat Shop provides stylish and functional clothing along with reliable sports equipment to help you perform at your best.

          At Cat Shop, we believe in combining comfort, performance, and modern design to support your active lifestyle.


        </div>
      </div>
      <section className="sm:h-[400px] h-[auto] flex flex-column my-[150px]">
        <h2 className="text-center" style={{ color: context.dark ? 'white' : 'rgb(75, 74, 74)' }}>Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 gap-5 mt-5 mx-auto" style={{ marginTop: '-20px' }}>
          {features.map((item) => (
            <motion.div key={item.title.length} className="  mt-1 shadow-lg rounded-3 p-3" initial={{ y: -100, opacity: 0 }} transition={{ delay: 1, type: 'spring', damping: 20 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: context.dark ? 'rgb(22, 21, 21)' : 'white', color: context.dark ? 'white' : 'rgb(75, 74, 74)' }} >
              <div className='flex'>
                <p className="w-[35px] h-[35px] bg-zinc-700 flex items-center justify-content-center text-light rounded-full text-1xl">
                  {item.icon}</p>
                <h6 className="ms-3 mt-2 text-zinc-900">{item.title}</h6>
              </div>

              <p className="ms-3 text-blue-900">{item.content}</p>
            </motion.div>

          ))}
        </div>
      </section>
    </>

  )
}

export default About