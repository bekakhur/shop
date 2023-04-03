import axios from "axios"
import { useEffect } from "react"
import {motion} from 'framer-motion'

export function WishList () {

    document.title = `Your Wishlist`

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
        <motion.div className="flex flex-col items-center pt-10 gap-10 min-h-screen" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}} >
            <div className="text-6xl">
                WISHLIST
            </div>
        </motion.div>

    )
}