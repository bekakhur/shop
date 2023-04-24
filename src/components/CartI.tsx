import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { Strapi } from '../types'
import {MdClose} from 'react-icons/md'
import {Link} from 'react-router-dom'

type CartIprops = {
    id: number 
    quantity: number 
}

const CartI = ({id, quantity, strap}:any) => {

    const {removeFromCart} = useShoppingCart()
    
  return (
    <div>
        {strap.map((item:any) => {
            if(item.id === id)
            return (
                <div className="flex border-b-2 justify-between items-center mr-5">
                    <Link  to={`/${item.id}`} >
                    <div className="w-[80px]">
                        <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes.img.data.attributes.url} alt="" className="h-[80px] my-2 cursor-pointer" />
                    </div>
                    </Link>
                    <div className="w-[250px]">
                        <p>{item.attributes.title}</p>
                        <p>{item.attributes.desc}</p>
                    </div>
                    <p>${item.attributes.price}</p>
                    <p>{quantity}</p>
                    <button className='text-xl' onClick={() => removeFromCart(id)}><MdClose /></button>
                </div>
            )
        })}
    </div>
  )
}

export default CartI