import { useContext} from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,description,price,image}) => {

 
    const {cardItems, addToCard,removeFromCard} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
      <img className='food-item-image' src={image} alt="" />
      
      { !cardItems[id]
            ?<img className='plus' onClick={()=>addToCard(id)} src={assets.Green} alt="" />
            : <div className='food-item-counter'>
              <img onClick={()=>removeFromCard(id)} className='red' src={assets.Red} alt="" />
              <p>{cardItems[id]}</p>
              <img onClick={()=>addToCard(id)} className='green'  src={assets.Green} alt="" />
            </div>

        }
      </div>

        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.star} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem;