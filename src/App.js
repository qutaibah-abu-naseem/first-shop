import React, { createContext, use, useEffect, useState } from "react"
import './index.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom"
import Header from "./component/header";
import Login from "./component/login";
import Face_page from "./face_page";
import Sign_up from "./component/signup";
import Footer from "./component/footer";
import Addpage from "./component/addpage";
import Choosen from "./component/choosenproduct";
import Down_header from "./down-header";
export const api = createContext(null)

const Appwarper=()=>{

  return(
    <Router>
      <App/>
    </Router>
  )
}
function App() {
  const allproduct = [
    {
      id: 0,
      title: 'running machane',
      type: 'machine',
      type2: 'sport',
      price: 190,
      img: '/img/item1.jpg',
      color: 'black',
      rating: '4.2',
      date: '2023/5/14',
      desc: 'Long-term device',
      heart: false
    },
    {
      id: 10,
      title: 'dampl',
      type2: 'sport',
      price: 100,
      img: 'https://striveme.com/img/gallery/lifestylejune1/%D8%A3%D8%AF%D9%88%D8%A7%D8%AA%20%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A9%204.jpg',
      color: 'black',
      rating: '4.2',
      date: '2023/5/14',
      desc: 'Long-term device',
      heart: false

    },
    {
      id: 11,
      title: 'sport clothes',
      heart: false,
      type2: 'sport',
      price: 20,
      img: 'https://i5.walmartimages.com/seo/5pcs-set-Men-Gym-Wear-Fitness-Sports-Training-Basketball-Football-Practise-Shirts-Coat-Pants-Set_b419583f-8314-4a76-94c2-2d08669f6bae.7ebe525fce313eedba842571988dade0.jpeg',
      color: 'black',
      rating: '4.2',
      date: '2023/5/14',
      desc: 'Long-term device'
    },
    {
      id: 12,
      title: 'bottle water',
      type2: 'sport',
      price: 10,
      img: 'https://olympiadsports.com/wp-content/uploads/2023/09/0VbVL4EGnw5skEdEXSDycTlCjH8YxhwUh4eesj6t-600x600.webp',
      color: 'black',
      rating: '4.2',
      date: '2023/5/14',
      desc: 'Long-term device',
      heart: false

    },
    {
      id: 13,
      title: 'sport bag',
      type2: 'sport',
      price: 30,
      img: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZrYhLMk4Mh6FVvfrDMMyO7DU7nmADDhnoQ&s',
      color: 'black',
      rating: '4.2',
      date: '2023/5/14',
      desc: 'Long-term device',
      heart: false

    },

    {
      id: 1,
      title: 'Treadmill',
      type: 'machine',
      type2: 'sport',
      price: 390,
      img: 'https://www.dhzfitness.com/uploads/X8500-Treadmill_1.jpg',
      color: 'black',
      rating: '2.2',
      date: '2023/5/4',
      desc: 'A treadmill is a popular cardio machine that allows users to walk, jog, or run indoors. It features adjustable speeds and incline settings to customize workouts based on fitness levels.',
      heart: false

    },
    {
      id: 2,
      type: 'machine',
      type2: 'sport',
      title: 'Exercise Bike',
      price: 190,
      img: 'https://decathlon.qa/cdn/shop/files/c8c6da0cd34d7604a17fdd5ea3f516e1_675x.progressive.jpg?v=1728673302',
      color: 'black',
      rating: '4.2',
      date: '2023/5/14',
      desc: 'An exercise bike is a stationary bicycle used for cardio workouts. It helps strengthen leg muscles and improve endurance. Some models come with resistance settings to simulate uphill cycling.'
      , heart: false

    },
    {
      id: 3,
      title: 'Rowing Machine',
      type: 'machine',
      type2: 'sport',

      price: 200,
      img: 'https://wolverson-fitness.co.uk/cdn/shop/collections/wolverson-rower-mk2-1_f355bd2c-5f6f-449e-95ff-c07d9be1c867.jpg?v=1729007138',
      color: 'black',
      rating: '5.2',
      date: '2023/1/14',
      desc: 'A rowing machine mimics the action of rowing a boat, providing a full-body workout. It engages muscles in the arms, legs, and core while improving cardiovascular health.'
      , heart: false

    },
    {
      id: 4,
      type: 'cloth',
      title: 'sport short',
      price: 20,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl4fiRozlM5jiCWKAwOwettpVvR2uLxikIA&s',
      color: 'black',
      rating: '1.2',
      date: '2024/1/14',
      desc: 'Comfortable to wear fabric',
      heart: false

    },
    {
      id: 5,
      type: 'cloth',
      title: 'shirt',
      price: 20,
      img: 'https://img.kwcdn.com/thumbnail/s/e496793c06982bdb84d6c08bbfcfe18b_b65826862da8.jpg?imageView2/2/w/800/q/70/format/webp',
      color: 'black',
      rating: '1.2',
      date: '2024/1/14',
      desc: 'Comfortable to wear fabric',
      heart: false

    },
    {
      id: 6,
      type: 'cloth',
      title: "Men's set",
      price: 20,
      img: 'https://cdn.salla.sa/nqZlz/RMewObNgv6oL3fZWs2tKuwKvCG7wyL8ikcDgZr38.jpg',
      color: 'black',
      rating: '1.2',
      date: '2024/1/14',
      desc: 'Comfortable to wear fabric',
      heart: false

    },
    {
      id: 7,
      type: 'model',
      title: 'model clothes for men',
      price: 20,
      img: 'https://watanimg.elwatannews.com/image_archive/original_lower_quality/10169802581734888583.jpg',
      color: 'black',
      rating: '1.2',
      date: '2024/1/14',
      desc: 'Comfortable to wear fabric',
      heart: false

    }
  ]
  if(!localStorage.getItem('myfavo')){
    localStorage.setItem('myfavo',JSON.stringify([]))
  }
  if(!localStorage.getItem('choosen')){
    localStorage.setItem('choosen',JSON.stringify([]))
  }

  if (!localStorage.getItem('myproduct')) {
    const result=allproduct.map(item=>({...item,ischoosen:false,number:1,total:item.number*item.price}))
    localStorage.setItem('myproduct', JSON.stringify(result));
  }
  if(!localStorage.getItem('total')){
    localStorage.setItem('total',0)
  }
  if(!localStorage.getItem('name')){
    localStorage.setItem('name','')
  }
  
  if(!localStorage.getItem('email')){
    localStorage.setItem('email','')
  }
  if(!localStorage.getItem('password')){
    localStorage.setItem('password','')
  }

  const [print, setprint] = useState([])
  const [product, setproduct] = useState(JSON.parse(localStorage.getItem('myproduct')))
  const [search, setsearch] = useState('')
  const [dark, setdark] = useState(false)
  const [hidemain, sethidemain] = useState(false)
  const [showheader, setshowheader] = useState(false)
  const [mode_header, setmode_header] = useState('main')
  const [result, setresult] = useState([])
  const [favor, setfavor] = React.useState([])
  const [counter, setcounter] = useState(0)
  const [index, setindex] = useState(null)
  const [active, setactive] = useState({})
  const [path, setpath] = React.useState(false)
  const [choosen, setchoosen] = useState([])
  const [tochoosen, settochoosen] = useState(JSON.parse(localStorage.getItem('myfavo')).length)
  const [isshow,setisshow]=useState(false)
  const[price,setprice]=useState(0)  
  const location=useLocation()
  useEffect(()=>{
    if(window.location.pathname==='/choosen'){
      setshowheader(true)
    }
  },[location.pathname])
  useEffect(()=>{
    setcounter(JSON.parse(localStorage.getItem('choosen')).length)
    setprice(JSON.parse(localStorage.getItem('choosen')).map(item=>item.price*item.number).reduce((acc,curr)=>acc+curr,0))
    localStorage.setItem('total',price)
  },[product])

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }else{
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }
  }, [dark])

  useEffect(()=>{
    if(search.length<1){
      setresult([])
  }else{
      if(mode_header==='all'){
          if(search.length){
              setresult(print.filter(item=>item.title.includes(search)))
          }else{
              setresult([])
          }
      }else if(mode_header==='clothes'){
          setresult(product.filter(item=>item.title.includes(search)))
      }else if(mode_header==='sport'){
          setresult(product.filter(item=>item.title.includes(search)))
      }else if(mode_header==='machine'){
          setresult(product.filter(item=>item.title.toLowerCase().includes(search.toLowerCase())))
      }
  }
  console.log(result)
  },[search])

  useEffect(() => {
    if (active && active.img) {
      localStorage.setItem('active', JSON.stringify(active));
    }
  }, [active])

  const value = {
    print,
    setprint,
    allproduct,
    dark,
    setdark,
    setshowheader,
    hidemain,
    sethidemain,
    mode_header,
    setmode_header,
    product,
    setproduct,
    search,
    setsearch,
    result,
    setresult,
    favor,
    setfavor,
    counter,
    setcounter,
    index,
    setindex,
    active,
    setactive,
    path,
    setpath,
    tochoosen,
    settochoosen,
    setchoosen,
    choosen,
    isshow,
    setisshow,
    price,
    setprice,

  }
  return (
    <api.Provider value={value}>
      
        {showheader &&
          <Header />
        }
        <Routes>
          <Route path="/" element={<Face_page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Addpage />} />
          <Route path="/choosen" element={<Choosen />} />
          <Route path="/signup" element={<Sign_up />} />
         
        </Routes>
        <Down_header/>
        <Footer/>
     
    </api.Provider>

  );
}

export default  Appwarper