import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowlogin}) => {
  const [menu,setMenu] = useState("home");
  const {getTotalcartamount} = useContext(StoreContext);
  return (
    <>
    <div className="navbar">
      <Link to='/'><img src={assets.coffe} alt="" className='logo' />  </Link>  
       
        <ul className='navbar-menu'>
        <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>HOME</Link> 
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>MENU</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>MOBILE-APP</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT-US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.serach} alt="" />
        <div className="navabar-search-icon">
          <Link to='/card'><img  src={assets.Basket} alt="" /></Link>
          <div className={getTotalcartamount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowlogin(true)}>sigh up</button>
      </div>
    </div>
    
    </>
  )
}

export default Navbar