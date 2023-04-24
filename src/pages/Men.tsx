import { Link, useParams } from "react-router-dom"
import { Itemsp } from "../types"
import { Strapi } from "../types"
import { BsHeart, BsHeartFill} from 'react-icons/bs'
import Filter from "../components/Filter"
import {motion} from 'framer-motion'
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Men ({strap}: any) {
    document.title = `Men's Fashion`
    const {categories} = useParams()
    const {wish, addWish} = useShoppingCart()

    

    return (
    <motion.div className="flex" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0}} } transition={{duration: 1}}>
        <Filter />
        <div className="min-w-[75vw] flex justify-center">
         <div className="grid grid-cols-3  gap-24 px-8 pb-10">{strap.map((item:any) => {  
            // if(item?.attributes?.categories?.data[0]?.attributes.title.toLowerCase() === categories?.toLowerCase()) {
            return (
                <div key={item.id} className="flex justify-center py-6">                    
                    <div className='hover:cursor-pointer relative'>
                        {item.attributes?.type === "tranding" ? <p className="absolute z-30 bg-yellow-300 tracking-widest m-1 text-sm px-[6px] pb-[2px] shadow-md rounded-sm text-white">NEW</p> : null}
                        <div onClick={() => {addWish(item.id)}} className="absolute z-30 right-0 h-8 w-8 p-2 hover:opacity-0 bg-white hover:bg-gray-100 rounded-lg transition-all duration-300"  >
                            {wish.find(i => i.id === item.id) ? <BsHeartFill className="shadow-xl" /> : <BsHeart />}
                        </div>
                        <BsHeartFill className="absolute z-20 right-0 h-8 w-8 p-2 bg-gray-100 rounded-lg text-gray-800" />
                        <Link  to={`/${item.id}`} >
                            <div className="overflow-hidden h-[350px] w-[250px]">
                                <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes.img.data.attributes.url} alt="#" className="absolute z-10 transition-all hover:opacity-0 duration-200" />
                                <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes.img2.data.attributes.url} alt="#" className="absolute"/>                   
                            </div>
                            <div className="flex justify-center pt-6">
                                <p>{item.attributes.title}</p>                    
                            </div>          
                            <div className="flex justify-center pt-6 font-bold">
                                <p>${item.attributes.price}</p>    
                            </div>     
                            </Link>
                    </div>
                </div>
            )
            // }
            })} 
        </div>  
        </div>
    </motion.div>
    )
}
