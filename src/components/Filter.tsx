import React, { useState } from 'react'
import {BsChevronCompactDown} from 'react-icons/bs'

const Filter = () => {
    const [brand, setBrand] = useState(false)

  return (   
    <div className="min-w-[18vw] text-xl pt-10">            
        <div className="m-10 font-semibold flex flex-col sticky top-[120px]">
            <div className="flex cursor-pointer">
                <h1>Filter</h1>
            </div>
            <div className="flex flex-col gap-4 m-4">
                <div onClick={() => {setBrand(!brand)}} className="flex cursor-pointer justify-between items-center">
                    <h2 className="cursor-pointer">Brand</h2>
                    <div className={`text-md ${brand && 'rotate-180'} transition-all duration-300`}>
                        <BsChevronCompactDown  />
                    </div>
                </div>
                <div className={`ml-4 ${brand ? '' : 'hidden'} transition-all duration-1000`}>
                    {<p>nike</p> }
                </div>
                <div className="flex cursor-pointer justify-between items-center">
                <h2 className="cursor-pointer">Price</h2> 
                    <BsChevronCompactDown className="text-md" />
                </div>
            </div>   
        </div>               
    </div>   
  )
}

export default Filter