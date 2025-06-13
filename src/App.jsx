import { Route, Routes } from "react-router"
import Navbar from "./Component/Navbar/Navbar"
import Home from "./page/Home/Home"
import Card from "./page/Card/Card"
import Placeorder from "./page/Placeorder/Placeorder"
import Footer from "./Component/Footer/Footer"
import { useState } from "react"
import Login from "./Component/Login/Login"



const App = () => {
  const [showlogin,setShowlogin] = useState(false);
  return (

   <>

      {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
    
   <div className="app">
   <Navbar setShowlogin={setShowlogin}/>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
    <Route path="/card" element={<Card/>}></Route>
    <Route path="/order" element={<Placeorder/>}></Route>
   </Routes>
      <Footer/>
   </div>
 
   </>
  )
}

export default App;