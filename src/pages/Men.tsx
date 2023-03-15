import { Link } from "react-router-dom"
import { Itemsp } from "../types"
import { Strapi } from "../types"
import { BsHeart, BsHeartFill} from 'react-icons/bs'
import Filter from "../components/Filter"

export function Men ({strap}: Strapi) {
    document.title = `Men's Fashion`
    return (
    <div className="flex">
        <Filter />
        <div className="min-w-[75vw] flex justify-center">
         <div className="grid grid-cols-3  gap-24 px-8 pb-10">{strap.map((item) => {   
            if (item.attributes.sub_categories.data[0]?.attributes?.title === 'Hat') {  
            return (
                <div key={item.id} className="flex justify-center py-6">
                    <div className='hover:cursor-pointer relative'>
                        <BsHeart className="absolute z-30 right-0 h-8 w-8 p-2 hover:opacity-0 bg-white hover:bg-gray-100 rounded-lg transition-all duration-300" />
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
            )}
        
            })} 
        </div>  
        </div>
    </div>
    )
}
