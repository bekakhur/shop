import { Itemsp } from "../types"
import { Link } from "react-router-dom"

export function Electronics ({itemsprops}: Itemsp) {
    return (
        <div className="grid grid-cols-3 gap-6 px-8 pb-10">{itemsprops.map((item) => {
            if (item.category === "electronics") {
            return (
                <div key={item.id} className="flex justify-center p-6">
                    <Link   to={`/${item.id}`}>
                <div className=' w-[350px] h-[380px] hover:cursor-pointer '>
                    <div className="flex justify-center w-[350px] h-[300px] p-4">
                        <img src={item.image} alt="#" />
                    </div>
                    <div className="flex justify-center pt-6 px-4">
                        <p>{item.title}</p>                    
                    </div>          
                    <div className="flex justify-center pt-6 px-4 font-bold">
                        <p>${item.price}</p>    
                    </div>     
                </div>
                </Link>
                </div>
            )
            }
        })} </div>
    )
}