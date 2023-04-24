import { Link } from "react-router-dom"
import { Itemsp } from '../types'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Strapi } from '../types'
import { useShoppingCart } from '../context/ShoppingCartContext'
import Newp from "../components/Newp"
import {motion} from 'framer-motion'
import { BsHeart, BsHeartFill } from "react-icons/bs"



const Singlepage = ({strap}: Strapi) => {
    const [selectedImg, setSelectedImg] = useState('img')
    const {id} = useParams()
    const [post, setPost] = useState<any>()
    const sid = Number(id)
    const {increaseCartQuantity, addWish, cartItems, wish} = useShoppingCart()

    useEffect(() => {
        axios.get(
                        process.env.REACT_APP_API_URL + `/products/${sid}?populate=*`,
                 {
                     headers: {
                         Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                     },
                 }
        ).then((res) => {
          setPost(res.data.data)          
        })        
      }, [])
      
      {post && (document.title = `${post?.attributes?.title} ${post?.attributes?.desc}`)}     
      
    return (
        <motion.div className="flex flex-col items-center" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0}} } transition={{duration: 1}} >
            <div className="min-h-[80vh]">
            {post && (
                <div className='flex p-10 gap-2 justify-center min-h-[80vh]'>
                    <div className='flex'>
                        <div className='w-[120px]'>                                                     
                            <img src={process.env.REACT_APP_UPLOAD_URL+post?.attributes?.img?.data?.attributes?.url} alt="" className='object-fit h-[120px] cursor-pointer' onClick={(e) => setSelectedImg('img')} />
                            <img src={process.env.REACT_APP_UPLOAD_URL+post?.attributes?.img2?.data?.attributes?.url} alt="" className='object-fit h-[120px] cursor-pointer' onClick={(e) => setSelectedImg('img2')}/>
                            <img src={process.env.REACT_APP_UPLOAD_URL+post?.attributes?.img3?.data?.attributes?.url} alt="" className='object-fit h-[120px] cursor-pointer' onClick={(e) => setSelectedImg('img3')}/>
                        </div>
                        <div className="w-[600px] h-[600px] p-2 flex justify-center" >
                            <img src={process.env.REACT_APP_UPLOAD_URL+post?.attributes[selectedImg]?.data?.attributes?.url} alt="" className='object-fit h-[580px]'  />               
                        </div>
                    </div>
                    <div className='flex flex-col  gap-6 w-[400px]'>
                        <h1>{post?.attributes?.title}</h1>
                        <h2>${post?.attributes?.price}</h2>
                        <p>{post?.attributes?.desc}</p>
                        <div className='flex gap-4'>
                            <button onClick={() => increaseCartQuantity(sid)} className="p-4 bg-zinc-800 hover:text-white hover:bg-zinc-600 text-white rounded-md w-[300px]">
                                {cartItems.find(item => item.id === sid) ? "REMOVE FROM BAG" : "ADD TO BAG"}
                            </button> 
                            <button onClick={() => addWish(sid)} className='p-4 border-2 rounded-lg w-[150px] flex items-center gap-3 hover:text-black'>WISHLIST
                            {wish.find(item => item.id === sid) ? <BsHeartFill /> : <BsHeart /> }
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
            <Newp strap={strap} sid={sid} />
        </motion.div>
    )
}

export {Singlepage}