import React, { useContext } from 'react'
import { api } from '../App'
import { FaEye, FaRegHeart } from 'react-icons/fa'

const Ourproduct = () => {
       const context=useContext(api)
        const img_product = [
           {
             url: 'https://www.dhzfitness.com/uploads/X8500-Treadmill_1.jpg',
             title: 'sport machine'
           },
           {
             url: 'https://i5.walmartimages.com/asr/e32a6dd9-4f18-4a07-b7df-c13e67457997.ed120d8709dfe010f166a33f6b98a16d.jpeg',
             title: 'sport clothes'
           },
           {
             url: 'https://preview.free3d.com/img/2019/06/2162693384051885194/2zl0zxm4.jpg',
             title: 'model short for man'
           },
           {
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXZt6mn9ioVgIm0Qk02PxUxJ8Un8TYYF9Fg&s',
             title: 'sport tools'
           },
           {
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PvMW9Byunm9hPvPDdOeghiWrpBx_6OubiQ&s',
             title: 'Water bottle for sport'
           },
           {
             url: 'https://www.shutterstock.com/image-photo/sports-shoes-blue-soccer-260nw-2374126103.jpg',
             title: 'sport boots'
           },
         ]
  return (
    <section className="h-[auto] ">
        <h2 className="text-center" style={{ color: context.dark ? 'white' : 'rgb(75, 74, 74)' }}>our products</h2>

        <div className="w-[100%]  row  pt-5 gap-2 flex justify-content-center">
          {img_product.map((item) => (
            <div id="card" key={item.id} className=" col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 position-relative mb-5 shadow-xl">
              <img className="h-[280px] w-100 rounded-3" loading='lazy' src={item.url} />
              <div id="overly-card" className="w-[89%] h-100 bg-zinc-900/70 position-absolute">
                <h5 className="text-light m-3">{item.title}</h5>
                <div className="flex justify-content-center mt-[100px]">
                  <div className="w-[50px] h-[35px] bg-sky-50/50 top-0 rounded-2 flex items-center justify-content-center text-2xl" style={{ cursor: 'pointer' }}><FaEye /></div>
                  <div className="w-[50px] h-[35px] bg-sky-50/50 top-0 rounded-2 ms-4 flex items-center justify-content-center text-2xl" style={{ cursor: 'pointer' }}><FaRegHeart /></div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>


  )
}

export default Ourproduct