import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>for better experience download <br />coffe day</p>
        <div className="app-download-platform">
        <img className='app-store' src={assets.Appstore} alt="" style={{width:"25%"}} />
        <img className='play-store' src={assets.Playstore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload