import React, { useContext } from 'react'
import { api } from '../App'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Offers = () => {
  const context = useContext(api)
  const features = [
    {
      img: '/img/bottle-water.webp',
      title: 'sport tools',
      page: 'sport',
    },
    {
      img: '/img/dampl.webp',
      title: 'home sport tools',
      page: 'sport',

    },
    {
      img: "/img/men's-det.webp",
      title: "men's set",
      page: 'model',

    },
    {
      img: '/img/model.webp',
      title: 'model clothes',
      page: 'model'
    },
    {
      img: "/img/Exercise Bike.webp",
      title: 'sport machine',
      page: 'machine'

    },
    {
      img: '/img/shirt.webp',
      title: 'normal clothe',
      page: 'clothes'

    },
    {
      img: '/img/sport-clothes.webp',
      title: 'sport clothe',
      page: 'sport'

    },

  ]
  return (
    <section id='offer' className="h-[fit-content] flex flex-column mt-[100px]" ref={context.refoffer} >
      <h2 className="text-center" style={{ color: context.dark ? 'white' : 'rgb(75, 74, 74)' }}>Offers</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 px-4 gap-5 mt-5 mx-auto" style={{ marginTop: '-20px' }}>
        {features.map((item,index) => (
          <motion.div key={index} onClick={()=>{context.setmode_header(item.page)}} className=" flex flex-col items-center gap-2 mt-2 shadow-lg rounded-3 p-3  bg-zinc-200 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-800 " initial={{ y: -100, opacity: 0 }} transition={{ delay: 1, type: 'spring', damping: 20 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}  >
              <div className="w-[35px] h-[35px] bg-zinc-700 dark:bg-zinc-100 flex items-center justify-content-center text-light rounded-full text-2xl">
                <img src={item.img} />
              </div>

            <h6 >{item.title}</h6>
          </motion.div>
        ))}
      </div>
    </section>


  )
}

export default Offers