import axios from "axios"
import { useEffect, useState } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { Itemsp } from "../types"
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom"

export function Home () {
    const [homed, setHomed] = useState<any>([])

    useEffect(() => {
        axios.get(
                    process.env.REACT_APP_API_URL + "/categories?populate=*",
                 {
                    headers: {
                         Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                     },
                 }
        ).then((res) => {
          setHomed(res.data.data)
        })        
      }, [])

    document.title = `Brand Home | Shop Online`
    console.log(homed)
    return (
        <motion.div className=" p-10 px-[120px]" 
        initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.1}} } transition={{duration: 1}}
        >
            <div className="grid lg:grid-cols-2 gap-10 mb-4">
                <div className="flex justify-center h-[600px]">
                    <img src={process.env.REACT_APP_UPLOAD_URL+homed[0]?.attributes?.img?.data?.attributes?.url} alt=""/>
                </div>
                <div className="h-400[px] flex flex-col justify-between items-center py-20">
                     <h1 className="text-5xl uppercase font-bold h-10">{homed[0]?.attributes?.desc}</h1> 
                     <p className="text-xl w-[60%] text-center">
                     From new runway releases to hero designs revised in fresh colorways, we spotlight the sneakers making their mark this season. This way for white-hot styles from Alexander McQueen, Acne Studios and more
                     </p>
                    <button className="p-4 border-2 rounded-lg w-40">Watch And Shop</button>
                </div>
                <div className="h-400[px] flex flex-col justify-between items-center py-20">                   
                     <h1 className="text-5xl uppercase font-bold h-10">{homed[1]?.attributes?.desc}</h1>   
                     <p className="text-xl w-[60%] text-center">
                     From new runway releases to hero designs revised in fresh colorways, we spotlight the sneakers making their mark this season. This way for white-hot styles from Alexander McQueen, Acne Studios and more
                     </p>             
                    <button className="p-4 border-2 rounded-lg w-40">Watch And Shop</button>
                </div>
                <div className="flex justify-center h-[600px]">
                    <img src={process.env.REACT_APP_UPLOAD_URL+homed[1]?.attributes?.img?.data?.attributes?.url} alt=""/>
                </div>
            </div>

        </motion.div>
    )
}