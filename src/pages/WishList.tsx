import axios from "axios"
import { useEffect } from "react"
import {motion} from 'framer-motion'
import { useShoppingCart } from "../context/ShoppingCartContext"
import Newp from "../components/Newp"
import {Link} from 'react-router-dom'
import {MdClose} from 'react-icons/md'


export function WishList ({strap}:any) {
    
    document.title = `Your Wishlist`

    const {wish} = useShoppingCart()

    // useEffect(() => {       
    //     axios.get(
    //                          process.env.REACT_APP_API_URL + "/categories?populate=*",
    //              {
    //                  headers: {
    //                      Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    //                  },
    //              }
    //     ).then((res) => {
    //         console.log(res)
    //     })        
    //   }, [])

    return (
        <motion.div className="flex flex-col items-center gap-10 min-h-screen" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1} }} exit={{opacity: 0, transition: {duration: 0}}} >
            <div>
                {wish[0]?.id > 0 ?  
                <div>
                    {strap.map((item:any) => {
                        if(wish.find(i => i.id === item.id)) {
                        return (
                            <div className="flex border-b-2 justify-between items-center w-[40vw]">
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
                            <button className='text-xl'><MdClose /></button>
                        </div>
                        )
                        }
                    })}
                </div>
                : <div className="flex flex-col justify-center items-center">
                    <p className="text-6xl pt-10 mb-[100px]">WISHLIST IS EMPTY</p>
                    <Newp strap={strap} />
                </div> }
            </div>
        </motion.div>

    )
}