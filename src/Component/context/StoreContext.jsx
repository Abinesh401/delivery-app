import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";



export const StoreContext = createContext(null);

const StoreContextprovider = (props) => {

    const [cardItems, setCardItems] = useState({});
    const addToCard = (itemId) => {
        if (!cardItems[itemId]) {
            setCardItems((prev) => ({ ...prev, [itemId]:1}))
        }
        else {
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId]+1}))

        }
    }

    const removeFromCard = (itemId) => {
        setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId]-1 }))
    }

        const getTotalcartamount = () => {
            let totalAmount = 0;
            for(const item in cardItems)
            {
                if (cardItems[item]>0) {
                    let iteminfo = food_list.find((product)=>product._id === item)
                totalAmount += iteminfo.price* cardItems[item];
                    
                }
                
            }
            return totalAmount;
        }




    const contextvalue = {
        food_list,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCard,
        getTotalcartamount


    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextprovider;
