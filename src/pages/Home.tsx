import axios from "axios"
import { useEffect, useState } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import New from "../components/New"
import { Itemsp } from "../types"
import { Homedp } from "../types"

export function Home () {

    const slides = [
        {
            url: '/assets/c3.jpg'
        },
        {
            url: '/assets/c1.jpg'
        },
        {
            url: '/assets/c2.jpg'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
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
          

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0 
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex) 
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1 
        const newIndex = isLastSlide ? 0 : currentIndex + 1 
        setCurrentIndex(newIndex)
    }

    document.title = `Brand Home | Shop Online`
    console.log(homed)
    return (
        <div className=" p-10 px-[120px]" >
            <div className="grid lg:grid-cols-2 gap-10" >
                <div className="flex justify-center h-[600px]">
                    <img src={process.env.REACT_APP_UPLOAD_URL+homed[0]?.attributes?.img?.data?.attributes?.url} alt=""/>
                </div>
                <div className="h-400[px] flex flex-col justify-between items-center py-20">
                     <h1 className="text-5xl uppercase">{homed[0]?.attributes?.desc}</h1> 
                    <button className="p-4 border-2 rounded-lg w-40">Watch And Shop</button>
                </div>
                <div className="h-400[px] flex flex-col justify-between items-center py-20">                   
                     <h1 className="text-5xl uppercase">{homed[1]?.attributes?.desc}</h1>                
                    <button className="p-4 border-2 rounded-lg w-40">Watch And Shop</button>
                </div>
                <div className="flex justify-center h-[600px]">
                    <img src={process.env.REACT_APP_UPLOAD_URL+homed[1]?.attributes?.img?.data?.attributes?.url} alt=""/>
                </div>
            </div>
            {/* <div className="max-w-[100%] h-[700px] w-full m-auto mt-24 mb-6 relative group">
                <div className="w-[100%] h-[100%] shadow-lg flex justify-center" >                    
                    <img src={slides[currentIndex].url} alt="" className="h-[100%] w-[100%] "/>
                </div>
                <div onClick={prevSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/5 text-white cursor-pointer">
                    <BsChevronCompactLeft size={30}  />
                </div>
                <div onClick={nextSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/5 text-white cursor-pointer">
                    <BsChevronCompactRight size={30} onClick={nextSlide}/>
                </div>
            </div> */}
            <div className="w-[1000px] overflow-hidden mx-auto mt-20">
                <div className="inline-flex animate-slider">
                    <img src={slides[0].url} alt="" className="w-[100%]"/>
                    <img src={slides[1].url} alt="" className="w-[100%]"/>
                </div>
            </div>
        </div>
    )
}