import { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Component/context/StoreContext'

const Placeorder = () => {
  const {getTotalcartamount} = useContext(StoreContext)
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className='title'>delivery information</p>
      <div className="multi-fields">
        <input type="text" placeholder='first name' />
        <input type="text" placeholder='lost name' />
      </div>
      <input type="text" placeholder='email address'/>
      <input type="text" placeholder='street' />
      <div className="multi-fields">
        <input type="text" placeholder='city' />
        <input type="text" placeholder='state' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='zip code' />
        <input type="text" placeholder='country' />
      </div>
      <input type="text" placeholder='phone'/>
    </div>
    <div className="place-order-right">
    <div className="card-total">
            <h2>card total</h2>
            <div className="card-total-details">
              <p>subtotal</p>
              <p>{getTotalcartamount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>delivery fees</p>
              <p>{getTotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>total</p>
              <p>{getTotalcartamount()===0?0:getTotalcartamount()+2}</p>
            </div>
            <button>PROCEED TO payment</button>
          </div>
      
      </div>
   </form>
  )
}

export default Placeorder