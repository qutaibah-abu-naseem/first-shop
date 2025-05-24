

import React, { useEffect, useRef, useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { api } from '../App';
import Badge from "./padage";
const Choosen = () => {
  const context = useContext(api)
  const refwarper = useRef(null)
  const refleft_icon = useRef(null)
  const refright_icon = useRef(null)
  const [diraction, setdiraction] = useState(100)

  const scroll_right = () => {

    setdiraction(prev => prev + 200)
    if (diraction >= refwarper.current.scrollWidth - refwarper.current.clientWidth) {
      return setdiraction(refwarper.current.scrollWidth - refwarper.current.clientWidth)
    }

  }
  const scroll_left = () => {
    setdiraction(prev => prev - 200)
    if (diraction <= 0) {
      setdiraction(0)
    }
  }
  useEffect(() => {
    refwarper.current.scrollLeft = diraction
    if (JSON.parse(localStorage.getItem('myfavo')).length > 3) {
      if (diraction >= refwarper.current.scrollWidth - refwarper.current.clientWidth) {
        refright_icon.current.style.display = 'none'
        refleft_icon.current.style.display = 'block'

      } else if (diraction <= 0) {
        refleft_icon.current.style.display = 'none'
        refright_icon.current.style.display = 'block'
      } else if (diraction > 0 && diraction < refwarper.current.scrollWidth - refwarper.current.clientWidth) {
        refright_icon.current.style.display = 'block'
        refleft_icon.current.style.display = 'block'
      }
    } else {
      refright_icon.current.style.display = 'none'
      refleft_icon.current.style.display = 'none'
    }

  }, [diraction])

  useEffect(() => {
    context.setpath(true)
  },)
  
  return (
    <div className="pt-[170px]">
         <h2 className="text-center my-5" style={{display: JSON.parse(localStorage.getItem('choosen'))?'block':'none'}}> your choosen</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center min-h-screen">
        {JSON.parse(localStorage.getItem('choosen')).map(item => (
          <Card

            className='ms-3 mb-5 position-relative pb-3'
            sx={{
              width: 300,
              color: context.dark ? 'white' : 'black',
              backgroundColor: context.dark ? 'rgb(53, 49, 49)' : 'rgb(236, 236, 236)'
            }}
            style={{ height: 'auto' }}
          >

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
                style={{ cursor: 'default' }}
              />

              <CardContent >
                <Typography className="flex flex-column items-center justify-between mt-3 " variant="body2" sx={{ color: context.dark ? 'rgb(199, 199, 199)' : 'rgb(27, 26, 26)' }}>
                  <div>
                    <Badge counter={item.number} id={item.id} price={item.price} />
                  </div>


                </Typography>
                <Typography gutterBottom className='flex flex-column items-center gap-3 px-1' component="div">
                  <div>
                    price: <strong className='text-sky-400'>{item.price}</strong> $
                  </div>
                  <div>
                    <button
                      className="bg-red-600 px-2 py-[3px] rounded-5 text-light text-[15px] w-[200px]"
                      onClick={() => {
                        context.setproduct(prev => {
                          const updatedProducts = prev.map((ele) =>
                            ele.id === item.id ? { ...ele, number: 0, ischoosen: false } : ele);
                          localStorage.setItem('myproduct', JSON.stringify(updatedProducts))
                          localStorage.setItem('choosen', JSON.stringify(JSON.parse(localStorage.getItem('myproduct')).filter(item => item.ischoosen == true)));
                          return updatedProducts
                        }
                        )
                        if (!JSON.parse(localStorage.getItem('choosen')).length) {
                          window.location = '/'
                        }
                      }}
                    > Remove</button>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        ))}
      </div>
    </div>
  )
}

export default Choosen