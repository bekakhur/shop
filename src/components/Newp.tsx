import React from 'react'
import { Strapi } from '../types'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'


const Newp = ({strap, sid}: any) => {
  return (
    <div className='flex w-[70vw] h-[500px] overflow-hidden shadow-sm mb-20 relative group'>
        <div className='h-10 w-10 rounded-full bg-gray-200 text-lg absolute flex justify-center items-center mt-[150px] cursor-pointer opacity-0 group-hover:opacity-100'>
            <BsChevronCompactLeft/>
        </div>
        <div className='h-10 w-10 rounded-full right-0 bg-gray-200 text-lg absolute flex justify-center items-center mt-[150px] cursor-pointer opacity-0 group-hover:opacity-100'>
            <BsChevronCompactRight/>
        </div>
        <div className='flex gap-10'>
        {strap.map((item:any) => {
            if(item.id != sid) {
            return (
                <Link  to={`/${item.id}`} >
                <div className='w-60 shadow-2xl flex flex-col items-center gap-2 py-2 rounded-sm my-12 cursor-pointer'>
                    <div className='w-60 h-[350px] p-2'>
                        <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes.img.data.attributes.url} alt="" />
                    </div>
                    <p>{item.attributes.title}</p>
                    <p>${item.attributes.price}</p>
                </div>
                </Link>    
            )}
        })}
        </div>
    </div>
  )
}

export default Newp