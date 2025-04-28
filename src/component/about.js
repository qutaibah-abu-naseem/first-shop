import React, { useContext, useEffect, useState } from 'react'
import { FiCheck } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { api } from '../App';
import { motion } from 'framer-motion';
const About = () => {
    const context=useContext(api)
     const [scroll, setscroll] = useState(0)
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setscroll(window.scrollY - 260)
            if (window.scrollY >= 880) {
              setscroll(940)
            }
          })
      
          return () => window.removeEventListener("scroll", () => {
            setscroll(window.scrollY - 240)
          });
    },[])
  return (
    <section id="who" className="w-100 h-[auto] py-5 normal-font" style={{ backgroundColor: context.dark ? 'black' : 'white' }}>
    <h2 className="text-center mt-3" style={{ color: context.dark ? 'white' : "black" }}>about us</h2>
    <motion.div id="half-line" animate={{ height: scroll, backgroundColor: 'rgb(166, 174, 176)' }} className="w-[10px]   position-absolute start-50 rounded-3" style={{ height: '5px' }}></motion.div>
    <div id="container" className="w-100 flex justify-content-between px-5">
      <div className="w-[48%] flex flex-column gap-[200px] mt-[100px] overflow-hidden">
        <motion.div style={{ backgroundColor: context.dark ? 'rgb(22, 21, 21)' : 'white', color: context.dark ? 'white' : "black" }} initial={{ opacity: 0, x: '-100vw' }} animate={scroll >= 150 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100vw' }} transition={{ duration: 0.3 }} className="w-full h-[auto] bg-gray-100 shadow-lg px-3 normal-font">
          <h4 className="text-bold text-center " style={{ color: context.dark ? 'rgb(89, 189, 255)' : "#0c4a6e" }}>who are we </h4>
          <p className="text-xl/10 mt-2">
            Welcome to our shopping, a digital electronics store that aims to develop skills in e-commerce design. This internship project is part of my learning journey in front-end development, exploring how to create a seamless and distinctive shopping experience using the latest details.
          </p>
        </motion.div>
        <motion.div className="w-100 h-[auto]  bg-gray-50 shadow-lg px-3 normal-font" style={{ backgroundColor: context.dark ? 'rgb(22, 21, 21)' : 'white', color: context.dark ? 'white' : "black" }}>
          <h4 className="text-bold text-center" style={{ color: context.dark ? 'rgb(89, 189, 255)' : "#0c4a6e" }}>Our vision </h4>
          <p className="text-xl/10 mt-2">
            Creating an integrated online store that combines attractive design, high performance, and an excellent user experience, as a practical model that reflects my skills in the field of online store development.
          </p>
        </motion.div>
      </div>




      <div className="w-[48%] flex flex-column gap-[200px] mt-[200px] normal-font">
        <motion.div style={{ backgroundColor: context.dark ? 'rgb(22, 21, 21)' : 'white', color: context.dark ? 'white' : "black" }} initial={{ opacity: 0, x: '-100vw' }} animate={scroll >= 290 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100vw' }} transition={{ duration: 0.5 }} className="w-full h-[auto] bg-gray-100 shadow-lg px-3 normal-font">
          <h4 className="text-bold text-center " style={{ color: context.dark ? 'rgb(89, 189, 255)' : "#0c4a6e" }}>Why this project?</h4>
          <ul>
            <li className="text-lg flex mb-2"><IoIosStar className="text-4xl" />Improving my skills in developing e-commerce stores using React, Material UI, and modern technologies.</li>
            <li className="text-lg flex mb-2"><IoIosStar className="text-5xl" />Experience building features like product management, cart, and payment methods, which helps me understand the real challenges in the field.</li>
            <li className="text-lg flex mb-2"><IoIosStar className="text-2xl" />Providing a convenient and fast shopping experience that mimics professional stores.</li>

          </ul>
        </motion.div>
        <motion.div style={{ backgroundColor: context.dark ? 'rgb(22, 21, 21)' : 'white', color: context.dark ? 'white' : "black" }} initial={{ opacity: 0, x: '-100vw' }} animate={scroll >= 840 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100vw' }} transition={{ duration: 0.5 }} className="w-100 h-[250px]  bg-gray-50 shadow-lg normal-font">
          <h4 className="text-bold text-center " style={{ color: context.dark ? 'rgb(89, 189, 255)' : "#0c4a6e" }}>What makes us different?</h4>
          <ul>
            <li className="text-lg flex mb-2"><FiCheck className="text-4xl" />Improving my skills in developing e-commerce stores using React, Material UI, and modern technologies.</li>
            <li className="text-lg flex mb-2"><FiCheck className="text-5xl" />Experience building features like product management, cart, and payment methods, which helps me understand the real challenges in the field.</li>
            <li className="text-lg flex mb-2"><FiCheck className="text-2xl" />Providing a convenient and fast shopping experience that mimics professional stores.</li>

          </ul>
        </motion.div>

      </div>
    </div>
  </section>
  )
}

export default About