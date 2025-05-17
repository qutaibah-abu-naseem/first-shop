import React, { createContext, lazy, useRef, useEffect, useState } from "react"
import './index.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import About_us from "./component/aboutus";
// import DownHeader from "./downheader";
const Login = lazy(() => import('./component/login'))
const Header = lazy(() => import('./component/header'))
const Face_page = lazy(() => import('./face_page'))
const Sign_up = lazy(() => import('./component/signup'))
const Footer = lazy(() => import('./component/footer'))
const Addpage = lazy(() => import('./component/addpage'))
const Choosen = lazy(() => import('./component/choosenproduct'))
const DownHeader = lazy(() => import('./downheader'))

export const api = createContext(null)

const Appwarper = () => {

  return (
    <Router>
      <App />
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
      img: '/img/dampl.webp',
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
      img: '/img/sport-clothes.webp',
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
      img: '/img/bottle-water.webp',
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
      img: '/img/bag.webp',
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
      img: '/img/running-machine.jpg',
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
      img: '/img/Exercise Bike.webp',
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
      img: '/img/Rowing Machine.webp',
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
      img: '/img/sportshort.jpeg',
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
      img: '/img/shirt.webp',
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
      img: "/img/men's-det.webp",
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
      img: '/img/model.webp',
      color: 'black',
      rating: '1.2',
      date: '2024/1/14',
      desc: 'Comfortable to wear fabric',
      heart: false

    }
  ]
  if (!localStorage.getItem('myfavo')) {
    localStorage.setItem('myfavo', JSON.stringify([]))
  }
  if (!localStorage.getItem('choosen')) {
    localStorage.setItem('choosen', JSON.stringify([]))
  }

  if (!localStorage.getItem('myproduct')) {
    const result = allproduct.map(item => ({ ...item, ischoosen: false, number: 1, total: item.number * item.price }))
    localStorage.setItem('myproduct', JSON.stringify(result));
  }
  if (!localStorage.getItem('total')) {
    localStorage.setItem('total', 0)
  }
  if (!localStorage.getItem('name')) {
    localStorage.setItem('name', '')
  }

  if (!localStorage.getItem('email')) {
    localStorage.setItem('email', '')
  }
  if (!localStorage.getItem('password')) {
    localStorage.setItem('password', '')
  }

  const [print, setprint] = useState([])
  const [product, setproduct] = useState(JSON.parse(localStorage.getItem('myproduct')))
  const [search, setsearch] = useState('')
  const [dark, setdark] = useState(false)
  const [hidemain, sethidemain] = useState(false)
  const [showheader, setshowheader] = useState(true)
  const [mode_header, setmode_header] = useState('main')
  const [result, setresult] = useState([])
  const [favor, setfavor] = React.useState([])
  const [tocontact, settocontact] = useState(false)
  const [counter, setcounter] = useState(0)
  const [index, setindex] = useState(null)
  const [active, setactive] = useState({})
  const [path, setpath] = React.useState(false)
  const [choosen, setchoosen] = useState([])
  const [tochoosen, settochoosen] = useState(JSON.parse(localStorage.getItem('myfavo')).length)
  const [isshow, setisshow] = useState(false)
  const [price, setprice] = useState(0)
  const [ismain,setismain]=useState(false)
  const [toabout,settoabout]=useState(false)
  const refcontact = useRef(null)
  const refabout =useRef(null)
  const refoffer=useRef(null)
  const refproduct=useRef(null)

  const location = useLocation()
  useEffect(() => {
    if (window.location.pathname === '/choosen') {
      setshowheader(true)
    }
    // setismain(false)
  }, [location.pathname])
  useEffect(()=>{
    if(ismain){
      refoffer.current.scrollIntoView({behavior:'smooth'})
      mode_header('main')
    }
  },[ismain])
  useEffect(() => {
    setcounter(JSON.parse(localStorage.getItem('choosen')).length)
    setprice(JSON.parse(localStorage.getItem('choosen')).map(item => item.price * item.number).reduce((acc, curr) => acc + curr, 0))
    localStorage.setItem('total', price)
  }, [product])

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    } else {
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    }
  }, [dark])

  useEffect(() => {
    if (search.length < 1) {
      setresult([])
    } else {
      if (mode_header === 'all') {
        if (search.length) {
          setresult(print.filter(item => item.title.includes(search)))
        } else {
          setresult([])
        }
      } else if (mode_header === 'clothes') {
        setresult(product.filter(item => item.title.includes(search)))
      } else if (mode_header === 'sport') {
        setresult(product.filter(item => item.title.includes(search)))
      } else if (mode_header === 'machine') {
        setresult(product.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
      }
    }
  }, [search])

  useEffect(() => {
    if (active && active.img) {
      localStorage.setItem('active', JSON.stringify(active));
    }
  }, [active])

  const value = {
    refabout,
    location,
    setismain,
    refproduct,
    refoffer,
    tocontact,
    refcontact,
    toabout,
    settoabout,
    settocontact,
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
        <Route path="/aboutus" element={<About_us />} />
      </Routes>
      <DownHeader />
      <Footer />

    </api.Provider>

  );
}

export default Appwarper