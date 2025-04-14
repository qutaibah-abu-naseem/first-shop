import {  useContext, useState } from "react"
import { useEffect } from "react";
import { api } from "../App";
import { FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdTrophy } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import Footer from "./footer";
import { FaTruckFast } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
const Main=()=>{
  const features=[
    {
      icon:<BiSolidDashboard/>,
      title:'Price offers',
      content:'We offer good deals on website design.'
    },
    {
      icon:<IoMdTrophy/>,
      title:'Product quality',
      content:'We strive to provide responsive and user-friendly websites.'
    },
    {
      icon:<FaTruckFast/>,
      title:'faster',
      content:'We care about providing a great product while adhering to the specified time.'
    },
    {
      icon:<FaMoneyBillWave/>,
      title:'price',
      content:'The quality of the site and its ease of use determine the price.'
    },
  ]
  const img_product=[
    {
      url:'https://www.dhzfitness.com/uploads/X8500-Treadmill_1.jpg',
      title:'sport machine'
    },
    {
      url:'https://i5.walmartimages.com/asr/e32a6dd9-4f18-4a07-b7df-c13e67457997.ed120d8709dfe010f166a33f6b98a16d.jpeg',
      title:'sport clothes'
    },
    {
      url:'https://preview.free3d.com/img/2019/06/2162693384051885194/2zl0zxm4.jpg',
      title:'model short for man'
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXZt6mn9ioVgIm0Qk02PxUxJ8Un8TYYF9Fg&s',
      title:'sport tools'
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PvMW9Byunm9hPvPDdOeghiWrpBx_6OubiQ&s',
      title:'Water bottle for sport'
    },
    {
      url:'https://www.shutterstock.com/image-photo/sports-shoes-blue-soccer-260nw-2374126103.jpg',
      title:'sport boots'
    },
  ]
   const[scroll,setscroll]=useState(0)
    const context=useContext(api)
    useEffect(()=>{
        context.setshowheader(true)
        document.body.classList.remove("login")

        window.addEventListener('scroll',()=>{
            setscroll(window.scrollY-260)
            if(window.scrollY>=880){
                setscroll(940)
            }
        })

        return () => window.removeEventListener("scroll",()=>{
            setscroll(window.scrollY-240)
        });
    })
    
    
    return(
        <div>
        <main style={{display:context.hidemain?'none':'block'}} className={context.dark?"main-dark":"main-light"}>
            <div id="container-main">
                <h3 className="position-absolute " style={{margin:'0 400px',color:context.dark?"white":'black'}}>think in your home then buy</h3>
                <div className="w-auto flex flex-col">
                   <div id="side" className="img5 flex items-center justify-content-center">
                    <h3 className=" text-center mt-5"> best product you<br/> will find it here</h3>
                   </div>
                   <div id="side" className="img1 flex items-center justify-content-center">
                   <h3 className=" text-center mt-5" style={{color:'black'}}>the best and <br/> the cheaper </h3>

                   </div>
                </div>
                <div className="w-auto flex flex-col">
                   <div className="img2 p-3">
                   <h3 className="" style={{color:'black'}}>we aim to make our customer <br/> feel Comfortably </h3>
                   </div>
                </div>
                    
            </div>
        </main>



        <section id="who" className="w-100 h-[auto] py-5 normal-font" style={{backgroundColor:context.dark?'black':'white'}}>
            <h2 className="text-center mt-3" style={{color:context.dark?'white':"black"}}>about us</h2>
            <motion.div id="half-line" animate={{height:scroll,backgroundColor:'rgb(166, 174, 176)'}} className="w-[10px]   position-absolute start-50 rounded-3" style={{height:'5px'}}></motion.div>
            <div id="container" className="w-100 flex justify-content-between px-5">
                <div className="w-[48%] flex flex-column gap-[200px] mt-[100px] overflow-hidden">
                    <motion.div style={{backgroundColor:context.dark?'rgb(22, 21, 21)':'white',color:context.dark?'white':"black"}} initial={{opacity:0,x:'-100vw'}} animate={scroll>=150?{opacity:1,x:0}:{opacity:0,x:'-100vw'}} transition={{duration:0.3}}  className="w-full h-[auto] bg-gray-100 shadow-lg px-3 normal-font">
                         <h4 className="text-bold text-center " style={{color:context.dark?'rgb(89, 189, 255)':"#0c4a6e"}}>who are we </h4>
                          <p className="text-xl/10 mt-2">
                          Welcome to our shopping, a digital electronics store that aims to develop skills in e-commerce design. This internship project is part of my learning journey in front-end development, exploring how to create a seamless and distinctive shopping experience using the latest details.
                          </p>
                    </motion.div>
                   <motion.div className="w-100 h-[auto]  bg-gray-50 shadow-lg px-3 normal-font" style={{backgroundColor:context.dark?'rgb(22, 21, 21)':'white',color:context.dark?'white':"black"}}>
                   <h4 className="text-bold text-center" style={{color:context.dark?'rgb(89, 189, 255)':"#0c4a6e"}}>Our vision </h4>
                          <p className="text-xl/10 mt-2">
                          Creating an integrated online store that combines attractive design, high performance, and an excellent user experience, as a practical model that reflects my skills in the field of online store development.
                          </p>
                   </motion.div>
                </div>




                <div className="w-[48%] flex flex-column gap-[200px] mt-[200px] normal-font">
                  <motion.div style={{backgroundColor:context.dark?'rgb(22, 21, 21)':'white',color:context.dark?'white':"black"}} initial={{opacity:0,x:'-100vw'}} animate={scroll>=290?{opacity:1,x:0}:{opacity:0,x:'-100vw'}} transition={{duration:0.5}}  className="w-full h-[auto] bg-gray-100 shadow-lg px-3 normal-font">
                     <h4 className="text-bold text-center " style={{color:context.dark?'rgb(89, 189, 255)':"#0c4a6e"}}>Why this project?</h4>
                          <ul>
                          <li className="text-lg flex mb-2"><IoIosStar className="text-4xl"/>Improving my skills in developing e-commerce stores using React, Material UI, and modern technologies.</li>
                          <li className="text-lg flex mb-2"><IoIosStar className="text-5xl"/>Experience building features like product management, cart, and payment methods, which helps me understand the real challenges in the field.</li>
                            <li className="text-lg flex mb-2"><IoIosStar className="text-2xl"/>Providing a convenient and fast shopping experience that mimics professional stores.</li>

                          </ul>
                    </motion.div>
                   <motion.div style={{backgroundColor:context.dark?'rgb(22, 21, 21)':'white',color:context.dark?'white':"black"}} initial={{opacity:0,x:'-100vw'}} animate={scroll>=840?{opacity:1,x:0}:{opacity:0,x:'-100vw'}} transition={{duration:0.5}} className="w-100 h-[250px]  bg-gray-50 shadow-lg normal-font">
                   <h4 className="text-bold text-center "  style={{color:context.dark?'rgb(89, 189, 255)':"#0c4a6e"}}>What makes us different?</h4>
                          <ul>
                            <li className="text-lg flex mb-2"><FiCheck className="text-4xl"/>Improving my skills in developing e-commerce stores using React, Material UI, and modern technologies.</li>
                            <li className="text-lg flex mb-2"><FiCheck  className="text-5xl"/>Experience building features like product management, cart, and payment methods, which helps me understand the real challenges in the field.</li>
                            <li className="text-lg flex mb-2"><FiCheck  className="text-2xl"/>Providing a convenient and fast shopping experience that mimics professional stores.</li>

                          </ul>
                   </motion.div>
                   
                </div>
            </div>
        </section>


        <motion.div initial={{width:'0'}} transition={{type:'spring',damping:20}} whileInView={{width:'100%',backgroundColor:'rgb(166, 174, 176)'}} className="h-[10px]  mb-3 rounded-3"></motion.div>
       
       
        <section className="h-[400px] flex flex-column mt-[100px]">
          <h2 className="text-center" style={{color:context.dark?'white':'rgb(75, 74, 74)'}}>features</h2>
             <div className="flex px-4 gap-3 mt-5" style={{marginTop:'-20px'}}>
             {features.map((item)=>(
                <motion.div className=" w-[300px] h-[200px] mt-2 shadow-lg rounded-3 p-3" initial={{y:-100,opacity:0}} transition={{delay:1,type:'spring',damping:20}} whileInView={{y:0,opacity:1} }  viewport={{ once: true }}  style={{backgroundColor:context.dark?'rgb(22, 21, 21)':'white',color:context.dark?'white':'rgb(75, 74, 74)'}} >
                
                  <div className="w-[35px] h-[35px] bg-zinc-700 flex items-center justify-content-center text-light rounded-full text-2xl"> {item.icon}</div>
                  <h5 className="ms-3 mt-2 text-light">{item.title}</h5>
                  <p className="ms-3 ">{item.content}</p>
                </motion.div>
                  ))}
           </div>
        </section>


        <section className="h-[auto] ">
        <h2 className="text-center" style={{color:context.dark?'white':'rgb(75, 74, 74)'}}>About our products</h2>

        <div className="w-[100%]  row  pt-5 gap-2 flex justify-content-center">
          {img_product.map((item)=>(
            <div id="card" className=" col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 position-relative mb-5 shadow-xl">
            <img className="h-[280px] w-100 rounded-3" src={item.url}/>
            <div id="overly-card" className="w-[89%] h-100 bg-zinc-900/70 position-absolute">
               <h5 className="text-light m-3">{item.title}</h5>
                <div className="flex justify-content-center mt-[100px]">
                <div className="w-[50px] h-[35px] bg-sky-50/50 top-0 rounded-2 flex items-center justify-content-center text-2xl" style={{cursor:'pointer'}}><FaEye/></div>
                 <div className="w-[50px] h-[35px] bg-sky-50/50 top-0 rounded-2 ms-4 flex items-center justify-content-center text-2xl" style={{cursor:'pointer'}}><FaRegHeart/></div>
              </div>
            </div>
          </div>
          ))}
          
        </div>
        </section>

         
        </div>
    )
}
export default Main