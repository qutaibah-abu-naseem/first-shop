import { api } from "../App"
import React, { useRef, useState } from "react";
import { useContext } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
const Sign_up=()=>{
  const [nowrong,setnowrong]=useState(true)
  const [wrong_pass,setwrong_pass]=useState(false)
        const context=useContext(api)
        const ref_name=useRef(null)
        const ref_email=useRef(null)
        const ref_password=useRef(null)
        const ref_confirm_password=useRef(null)


        const Handl_sign=(btn)=>{
          btn.preventDefault()
          if(!ref_name.current.value.length ||!ref_email.current.value.length||!ref_password.current.value.length||!ref_confirm_password.current.value.length   ){
           setwrong_pass(false)
           setnowrong(false)
          }else{
            setnowrong(true)
            if(ref_password.current.value===ref_confirm_password.current.value){
              localStorage.setItem('name',ref_name.current.value.trim())
              localStorage.setItem('email',ref_email.current.value.trim())
              localStorage.setItem('password',ref_password.current.value.trim())
              ref_name.current.value=''
              ref_email.current.value=''
              ref_password.current.value=''
              ref_confirm_password.current.value=''
              setTimeout(() => {
                window.location.href='/'
              }, 500);
              setwrong_pass(false)
            }else{
              console.log('passord is rong')
              
              setwrong_pass(true)
            }
           
          }
          if(!nowrong&&wrong_pass){
            setnowrong(false)
            setwrong_pass(false)
          }
        }

  useEffect(()=>{
         context.setshowheader(false)
         document.body.classList.add("login")
         document.body.classList.remove("light")
     })

     const [focus,setfocus]=React.useState({
             email:false,
             password:false ,
            username:false,
          confirm:false})
          const[type,settype]=useState('password')
    return(
        <div>
                   <div className="container-log justify-content-end">
                         <motion.button   className='border px-3 py-2 bg-zinc-900/50 left-0' style={{marginLeft:'100px',position:'absolute'}}> <Link to={'/'} className='text-light text-xl' onClick={()=> document.body.classList.add("light")}> go home</Link></motion.button>
                  
                   <form id='form-sign' className='container-log p-3'>
                   <h4 className="text-light">Sign up</h4>

                    <div className="w-100 position-relative mt-3" style={{color:focus.username?'black':'rgb(206, 203, 203)'}}>
                      <FaUser className=" position-absolute text-2xl top-6 left-3"/>
                      <input ref={ref_name} type="text" placeholder="enter your name"  onFocus={()=>{setfocus({...focus,username:true});setnowrong(true)}} onBlur={()=>setfocus({...focus,username:false})}/>
                    </div>

                    <div className="w-100 position-relative mt-4" style={{color:focus.email?'black':'rgb(206, 203, 203)'}}>
                      <MdOutlineEmail className=" position-absolute text-2xl top-6 left-3"/>
                      <input ref={ref_email} type="email" placeholder="create your email" onFocus={()=>setfocus({...focus,email:true})} onBlur={()=>{setfocus({...focus,email:false});setnowrong(true)}}/>
                    </div>
                    <div className="w-100 position-relative mt-5" style={{color:focus.password?'black':'rgb(206, 203, 203)'}}>
                      <CiLock className=" position-absolute text-2xl top-6 left-3"/>
                      <input ref={ref_password} type={type} placeholder="password" onFocus={()=>{setfocus({...focus,password:true});setnowrong(true)}} onBlur={()=>{setfocus({...focus,password:false});setnowrong(true)}}/>
                      <input ref={ref_confirm_password} type={type} onFocus={()=>setnowrong(true)} className="mt-4 ps-3" placeholder="confirm password"/>
                    </div>
                    <div className="flex justify-content-start items-center ms-5" style={{width:'100%'}}>
                    <input  type="checkbox" style={{width:'18px',border:'1px solid black'}} onChange={(item)=>item.target.checked?settype('text'):settype('password')}/>
                    <h6 className="text-light text-1xl mt-3 ms-2">show password</h6>
                  </div>
                  <div className=" w-100">
                    {nowrong?"":
                      <p className="ms-3 text-red-500">fill data</p>
                    }{wrong_pass?<p className="ms-3 text-red-500">password is wrong</p>:''
                    }
                    
                  </div>
                  <motion.button onClick={(btn)=>Handl_sign(btn)} whileHover={{scale:1.1,color:'rgb(99, 172, 255)'}} className='w-80 mt-2 text-xl' style={{height:'45px',borderRadius:'45px',color:'rgb(255, 255, 255)',border:'1px solid rgb(255, 255, 255)'}}>sign up</motion.button> 
                   <Link to='/login'><motion.p whileHover={{scale:1.1,color:'rgb(99, 172, 255)'}} className='text-2xl' style={{borderBottom:'1px solid white',cursor:'pointer',color:'white',marginTop:'20px'}}>Sign in</motion.p></Link>
                   </form>
                   </div>
               </div>
    )
}
export default Sign_up