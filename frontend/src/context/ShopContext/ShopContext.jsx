import { createContext } from "react";
import { products } from "../../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const curreny = '$';
    const delivery_fee = 10;

    const value = {
        products, curreny, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}


export default ShopContextProvider;