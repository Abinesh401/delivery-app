import { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../Component/context/StoreContext'
import { useNavigate } from 'react-router';

const Card = () => {
  const { cardItems, food_list, removefromcart, getTotalcartamount } = useContext(StoreContext);
  const Navigate = useNavigate()
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Item</p>
            <p>Title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item) => {
            if (cardItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title card-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cardItems[item._id]}</p>
                    <p>{item.price * cardItems[item._id]}</p>
                    <p onClick={()=>removefromcart(item._id)} className='cross'>x</p>

                  </div>
                  <hr />
                </div>


              )
            }
          })}

        </div>
        <div className="card-bottom">
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
            <button onClick={() =>Navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
            <div className="card-promocode">
              <div>
                <p>if you a promo code,enter it here</p>
                <div className="card-promocode-input">
                  <input type="text" placeholder='promo code'/>
                  <button>submit</button>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default Card