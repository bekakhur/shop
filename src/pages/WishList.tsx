import axios from "axios"
import { useEffect } from "react"

export function WishList () {

    document.title = `Your Wishlist`

    useEffect(() => {       
        axios.get(
                             process.env.REACT_APP_API_URL + "/categories?populate=*",
                 {
                     headers: {
                         Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                     },
                 }
        ).then((res) => {
            console.log(res)
        })        
      }, [])

    return (
        <div className="text-6xl text-center pt-10">WISH LIST</div>

    )
}