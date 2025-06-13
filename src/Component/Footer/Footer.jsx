import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='cofee' src={assets.coffe} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sunt asperiores repellendus animi accusantium molestias provident amet consequuntur velit adipisci.</p>
                    <div className="footer-social-icons">
                        <img src={assets.Facebook} alt="" /><img src={assets.Twitter} alt="" /><img src={assets.Linkdin} alt="" />
                    </div>
                   
            </div>
            <div className="footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>delivary</li>
                    <li>privacy plicy</li>
                </ul>
            
            </div>
         
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>687976289378273</li>
                    <li>cofee@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
       
        <p className='footer-copy'>Lorem ipsum dolor sit amet.</p>
    </div>

  )
}

export default Footer