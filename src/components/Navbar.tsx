import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Login from '../pages/Login'
import { BsHeart, BsHandbag, BsPerson, BsSearch, BsPersonFill} from 'react-icons/bs'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [search, setSearch] = useState(false)
    const handleClick = () => setNav(!nav)

    const [dropdown, setDropdown] = useState(false)

    const {cartQuantity} = useShoppingCart()

    const [modalOn, setModalOn] = useState(false)
    const [choice, setChoice] = useState(false)
    const clicked = () => {
        setModalOn(true)
    } 


  return (
    <>
    <div className='w-screen h-[80px] z-50 bg-zinc-200 fixed drop-shadow-sm'>
        <div className='flex justify-between items-center w-full h-full px-24'>
            <div className='flex items-center h-full'>
                <NavLink to="/"><h1 className='text-3xl font-bold mr-4 sm:text-4xl cursor-pointer'>STORE</h1></NavLink>            
                <ul className='hidden md:flex'> 
                    <NavLink to="/women"><li>Women</li></NavLink> 
                    <NavLink to="/men"><li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>Men</li></NavLink>
                    <NavLink to="/checkout"><li>Kids</li></NavLink> 
                </ul> 
            </div>
            <div className='hidden md:flex pr-4 text-xl items-center'>     
                {<input type="text" placeholder='search...' className={`w-30 text-base rounded-sm border mr-[400px] ${search ? '' : '-translate-y-20'} transition-all duration-500 border-zinc-400 p-3 h-8  mr-4 outline-none`}  />}
                <button onClick={() => {setSearch(!search)}} className='px-4 py-3'><BsSearch /></button>
                {/* <button className='px-4 py-3' onClick={clicked} >{choice ? <BsPerson /> : <BsPersonFill /> }</button>   */}
                <NavLink to='/wishlist'><button className='px-4 py-3'><BsHeart /></button></NavLink>                       
                <NavLink to="/cart"><button className='px-4 py-3 relative'>
                    <BsHandbag />
                    <span className='absolute flex justify-center text-black text-[18px] bottom-0 right-1'>{cartQuantity > 0 && cartQuantity}</span>
                </button></NavLink>               
                {modalOn && <Login setModalOn={setModalOn} setChoice={setChoice} choice={choice} />}               
            </div>           
            <div className='md:hidden cursor-pointer' onClick={handleClick}>
                {!nav ? <p className='font-bold w-5'>=</p> : <p className='w-5 font-bold'>--</p> }               
            </div>
        </div> 
            {dropdown && 
        <motion.div initial={{opacity: 0}} animate={{opacity: 1,}} exit={{opacity: 0, transition: {duration: 0}} } transition={{duration: 0.1}}        > 
            <ul onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className='w-full bg-zinc-200 px-24 -translate-y-3'>
                <li>Shoes</li>
                <li>Bags</li>
                <li>Hats</li>
            </ul>
        </motion.div>
            }
        <ul className={!nav ? 'hidden' : `absolute w-full px-8 bg-zinc-200 md:hidden`}>
            <NavLink to="/women"><li className='border-b-2 w-full border-zinc-300'>Women</li></NavLink>
            <NavLink to="/men"><li className='border-b-2 w-full border-zinc-300'>Men</li></NavLink>
            <NavLink to="/jewelery"><li className='border-b-2 w-full border-zinc-300'>Jewelary</li></NavLink>
            <NavLink to="/electronics"><li className='border-b-2 w-full border-zinc-300'>Electronics</li></NavLink>
            <div className='flex flex-col my-4'>
                <NavLink to="/cart"><button className='px-8 py-3'>Cart</button></NavLink>
                <button>Wish List</button>
            </div>     
        </ul>
    </div>
    {dropdown && <motion.div initial={{opacity: 0}} animate={{opacity: 0.4}} exit={{opacity: 0, transition: {duration: 0}} } transition={{duration: 0.2}}  
    className="h-[70vh] top-auto w-screen inset-0 fixed bg-black opacity-50 z-40"></motion.div>}
    </>
  )
}

export default Navbar