import React, { useContext, useEffect } from 'react'
import { api } from '../../App';
import Item from '../cart';


const Favor = () => {
    const context=useContext(api)
    
  return (
     <section id="product-sec" className="my-[150px] relative flex flex-col gap-5" style={{ paddingTop: context.mode_header === 'main' ? '0' : '100px' }}>
           <h1 className='mx-auto'>favority</h1>

            <div id="product" className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center min-h-screen ">
                {
                   JSON.parse(localStorage.getItem('myfavo')).map(item => (
                        <Item title={item.title} img={item.img} desc={''} price={''} rating={''} id={item.id} key={item.id}/>
                    ))
                }

            </div>
        </section> 
  )
}

export default Favor