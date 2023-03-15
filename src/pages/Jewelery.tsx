import { Itemsp } from "../types"

export function Jewelery ({itemsprops}: Itemsp) {
    return (
        <div className="grid grid-cols-3 gap-6 px-8 pb-10">{itemsprops.map((item) => {
            if (item.category === "jewelery") {
            return (
                <div key={item.id} className="flex justify-center p-6">
                <div className='w-[350px] h-[380px] hover:cursor-pointer'>
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
                </div>
            )
            }
        })} </div>
    )
}