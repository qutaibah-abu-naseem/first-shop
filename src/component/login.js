import * as React from 'react';
import { useContext, useEffect } from "react"
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { api } from "../App"
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login=()=>{
    const[type,settype]=React.useState('password')
    const [showpass,setshowpass]=React.useState(false)
    const [focus,setfocus]=React.useState({
        email:false,
        password:false })
    const context=useContext(api)
    useEffect(()=>{
        
    },[])
    const Totext=()=>{
        settype('text')
    }
    const To_password=()=>{
        settype('password')
    }
    return(
        <div>
            <div className="container-log">
            <motion.button   className='border px-3 py-2 bg-zinc-900/50' style={{marginLeft:'100px',position:'absolute'}}> <Link to={'/'} className='text-light text-xl' onClick={()=> document.body.classList.add("light")}> go home</Link></motion.button>

                <form id='form-log' className='container-log p-3'>
                <h3 className='text-light'>sign In</h3>
                <div className='w-96 position-relative'>
                    <MdOutlineEmail className='text-2xl position-absolute top-6 left-3' style={{color:focus.email?'black':'rgb(206, 203, 203)'}}/>
                  <input type='email' placeholder='email' onFocus={()=>setfocus({...focus,email:true})} onBlur={()=>setfocus({...focus,email:false})}/>
                </div>
                 <div className='w-96  position-relative'>
                    <CiLock className=' text-2xl position-absolute top-6 left-3' style={{color:focus.password?'black':'white'}}/>
                   <input type={type} placeholder='password' onFocus={()=>setfocus({...focus,password:true})} onBlur={()=>setfocus({...focus,password:false})}/>
                   <p className=' position-absolute top-5 right-2' style={{color:focus.password?'black':'rgb(206, 203, 203)'}}>
                    <RxEyeOpen onClick={Totext}  className=' text-2xl m-1' style={{cursor:'pointer',display:type==='password'?'block':'none'}} />
                    <GoEyeClosed onClick={To_password} className=' text-2xl m-1' style={{cursor:'pointer',display:type==='text'?'block':'none'}}/>
                   </p>
                 </div>
                    <motion.button whileHover={{scale:1.1,color:'rgb(99, 172, 255)'}} className='w-80 mt-5 text-xl' style={{height:'45px',borderRadius:'45px',color:'rgb(255, 255, 255)',border:'1px solid rgb(255, 255, 255)'}}>sign in</motion.button> 
                    <div className="mt-5 flex justify-between" style={{ width: '200px' }}>
  <motion.div 
    className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full"
    animate={{ borderWidth: 1, borderColor: 'rgb(255, 255, 255)',cursor:'pointer'}}
    whileHover={{ scale: 1.2}}
    transition={{ type: 'spring',  damping:30,stiffness:400 }}
  >
    <img src="/img/goggle.png" className="w-[30px]" alt="5" />
  </motion.div>

  <motion.div 
    className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-zinc-100/50"
    animate={{ borderWidth: 1, borderColor: 'rgb(255, 255, 255)',cursor:'pointer'}}
    whileHover={{ scale: 1.2 }}
    transition={{ type: 'spring', damping:30,stiffness:400}}
  >
    <img src="/img/git.png" className="w-[40px]" alt="2" />
  </motion.div>

  <motion.div 
    className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-zinc-100/50"
    animate={{ borderWidth: 1, borderColor: 'rgb(255, 255, 255)',cursor:'pointer'}}
    whileHover={{ scale: 1.2 }}
    transition={{ type: 'spring', damping:30,stiffness:400 }}
  >
    <img src="/img/face2.png" className="w-[30px] h-[30px]" alt="d" />
  </motion.div>
</div>

<Link to='/signup'><motion.p whileHover={{scale:1.1,color:'rgb(99, 172, 255)'}} className='text-2xl' style={{borderBottom:'1px solid white',cursor:'pointer',color:'white',marginTop:'50px'}}>Sign up</motion.p></Link>
                </form>
            </div>
        </div>
    )
}
export default Login