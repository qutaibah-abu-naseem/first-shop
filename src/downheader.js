import  React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { api } from './App'
const DownHeader = () => {
     const context = useContext(api)
    return (
        <div id="down-header" className="w-100 position-fixed z-[20] sm:hidden bottom-0 h-[70px]"   style={{
            color: context.dark ? "black" : "white",
            backgroundColor: context.dark ? "white" : "black",
            height: 55,
          }}>
            <div id="parent-list-header" >
                <ul className='flex'>
                    <Link to='/'><motion.li className={context.mode_header === 'all' && !context.path ? 'focus' : ''} onClick={() => context.setmode_header('all')} animate={{ cursor: 'pointer', color: context.dark ? 'black' : 'white' }} whileHover={{ color: 'hsl(210, 100%, 65%)' }} transition={{ type: "spring", stiffness: 300, damping: 15 }} >all</motion.li></Link>
                    <Link to='/'><motion.li className={context.mode_header === 'clothes' && !context.path ? 'focus' : ''} onClick={() => context.setmode_header('clothes')} animate={{ cursor: 'pointer', color: context.dark ? 'black' : 'white' }} whileHover={{ color: 'hsl(210, 100%, 65%)' }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>cloth</motion.li></Link>
                    <Link to='/'><motion.li className={context.mode_header === 'model' && !context.path ? 'focus' : ''} onClick={() => context.setmode_header('model')} animate={{ cursor: 'pointer', color: context.dark ? 'black' : 'white' }} whileHover={{ color: 'hsl(210, 100%, 65%)' }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>model</motion.li></Link>
                    <Link to='/'><motion.li className={context.mode_header === 'sport' && !context.path ? 'focus' : ''} onClick={() => context.setmode_header('sport')} animate={{ cursor: 'pointer', color: context.dark ? 'black' : 'white' }} whileHover={{ color: 'hsl(210, 100%, 65%)' }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>sport</motion.li></Link>
                    <Link to='/'><motion.li className={context.mode_header === 'machine' && !context.path ? 'focus' : ''} onClick={() => context.setmode_header('machine')} animate={{ cursor: 'pointer', color: context.dark ? 'black' : 'white' }} whileHover={{ color: 'hsl(210, 100%, 65%)' }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>machine</motion.li> </Link>
                </ul>
            </div>
        </div>

    )
}

export default DownHeader