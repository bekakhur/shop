import Login from "./Login";
import {Link} from 'react-router-dom'
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Strapi } from "../types";

export function Cart ({strap}: Strapi  ) {
    document.title = `Your Shopping Cart`

    const {cartItems} = useShoppingCart()
    
    return (    
        <div className="flex justify-center gap-6 p-10">            
        {cartItems[0]?.id > 0 ?           
            <>
            <div className="w-[800px] h-[600px]">
                <div>
                    {cartItems.map((item) => {
                        return (
                            <div className="flex gap-6">
                                <p>{item.id}</p>
                                <p>{item.quantity}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="text-center flex flex-col justify-between h-[600px] w-[350px] p-4 shadow-lg rounded-md ">           
                <h1 className="text-6xl m-4">SUMMARY</h1>
                <div>
                    <div className="flex justify-between text-xl">
                        <p>Subtotal</p>
                        <p>$00.00</p>
                    </div>
                    <div className="flex justify-between text-xl mt-4">
                        <p>Delivery</p>
                        <p>$11.00</p>
                    </div>
                </div>
                <span className="border-b-2 border-gray-700"></span>
                <div className="flex justify-between text-xl">
                        <h2>TOTAL</h2>
                        <p>$11.00</p>
                    </div>
                <div>
                    <Link to={'/checkout'} >
                        <button className="p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">GO TO CHECKOUT</button>                                
                    </Link>
                </div>
            
            </div>
            </> : <p className="text-6xl">YOUR BAG IS EMPTY</p>
        }
        </div>      
    )
}