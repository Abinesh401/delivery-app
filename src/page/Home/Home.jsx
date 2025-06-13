import { useState } from 'react'
import Explormenu from '../../Component/Explormenu/Explormenu'
import Header from '../../Component/Header/Header'
import './Home.css'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppDownload from '../../Component/App download/AppDownload'

const Home = () => {
  const[category,setCategory] = useState("all");
  return (
    <div>
        <Header/>
        <Explormenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home;