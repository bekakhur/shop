import Login from "./Login";
import {Link} from 'react-router-dom'
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Strapi } from "../types";
import {motion} from 'framer-motion'
import Newp from "../components/Newp";
import {useState} from 'react'
import CartI from "../components/CartI";

export function Cart ({strap}: Strapi  ) {
    document.title = `Your Shopping Cart`

    const {cartItems} = useShoppingCart()

    const sub = cartItems.reduce((total, CartI) => {
        const item = strap.find(i => i.id === CartI.id)
        return total + (item?.attributes.price || 0) * CartI.quantity
    }, 0)
    
    return (    
        <motion.div className="flex justify-center gap-6 p-10" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.1}} } transition={{duration: 1}}>            
        {cartItems[0]?.id > 0 ?           
            <>
            <div className="w-[800px]">
                <div>
                    {/* {cartItems.map((item) => {
                        return (
                            <div className="flex gap-4">
                                <p>{item.id}</p>
                                <p>{item.quantity}</p>
                            </div>
                        )
                    })} */}
                    {cartItems.map(item => (
                        <CartI key={item.id} {...item} strap={strap} />
                    ))}
                    
                    {/* {strap.map((item) => {
                        
                        return (
                            <div className="flex border-b-2 gap-16 items-center mr-5">
                                <div className="w-[80px]">
                                    <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes.img.data.attributes.url} alt="" className="h-[80px] my-2 cursor-pointer" />
                                </div>
                                <div className="w-[250px]">
                                    <p>{item.attributes.title}</p>
                                    <p>{item.attributes.desc}</p>
                                </div>
                                <p>${item.attributes.price}</p>
                            </div>
                        )
                    })} */}
                </div>
            </div>
            <div className="text-center flex flex-col justify-between h-[600px] w-[350px] p-4 shadow-lg rounded-md sticky top-[120px]">           
                <h1 className="text-6xl m-4">SUMMARY</h1>
                <div>
                    <div className="flex justify-between text-xl">
                        <p>Subtotal</p>
                        <p>${sub}.00</p>
                    </div>
                    <div className="flex justify-between text-xl mt-4">
                        <p>Delivery</p>
                        <p>$11.00</p>
                    </div>
                </div>
                <span className="border-b-2 border-gray-700"></span>
                <div className="flex justify-between text-xl">
                        <h2>TOTAL</h2>
                        <p>${sub + 11}.00</p>
                    </div>
                <div>
                    <Link to={'/checkout'} >
                        <button className="p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">GO TO CHECKOUT</button>                                
                    </Link>
                </div>
            
            </div>
            </> : <div className="flex flex-col items-center">
                    <p className="text-6xl mb-[20vh]">YOUR BAG IS EMPTY</p>
                    < Newp strap={strap} />
                </div>
        }
        </motion.div>     
    )
}