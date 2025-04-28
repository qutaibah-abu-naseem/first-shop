import React, { useContext } from 'react'
import { api } from '../App'
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdTrophy } from "react-icons/io";
import { motion } from 'framer-motion';
const Feature = () => {
        const context=useContext(api)
        const features = [
            {
              icon: <BiSolidDashboard />,
              title: 'Price offers',
              content: 'We offer good deals on website design.'
            },
            {
              icon: <IoMdTrophy />,
              title: 'Product quality',
              content: 'We strive to provide responsive and user-friendly websites.'
            },
            {
              icon: <FaTruckFast />,
              title: 'faster',
              content: 'We care about providing a great product while adhering to the specified time.'
            },
            {
              icon: <FaMoneyBillWave />,
              title: 'price',
              content: 'The quality of the site and its ease of use determine the price.'
            },
          ]
  return (
      <section className="h-[400px] flex flex-column mt-[100px]">
            <h2 className="text-center" style={{ color: context.dark ? 'white' : 'rgb(75, 74, 74)' }}>features</h2>
            <div className="flex px-4 gap-3 mt-5" style={{ marginTop: '-20px' }}>
              {features.map((item) => (
                <motion.div className=" w-[300px] h-[200px] mt-2 shadow-lg rounded-3 p-3" initial={{ y: -100, opacity: 0 }} transition={{ delay: 1, type: 'spring', damping: 20 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: context.dark ? 'rgb(22, 21, 21)' : 'white', color: context.dark ? 'white' : 'rgb(75, 74, 74)' }} >
    
                  <div className="w-[35px] h-[35px] bg-zinc-700 flex items-center justify-content-center text-light rounded-full text-2xl"> {item.icon}</div>
                  <h5 className="ms-3 mt-2 text-light">{item.title}</h5>
                  <p className="ms-3 ">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </section>
    
    
  )
}

export default Feature