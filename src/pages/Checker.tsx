import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Checker = () => {

  const [loh, setLoh] = useState(0)
  const [sub, setSub] = useState(false)  

  const {rem} = useShoppingCart()

  const r = () => {
    setSub(true)
    rem()
  }

  return (
    <motion.div className='flex flex-col items-center pt-10 gap-10 min-h-screen' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.1}} } transition={{duration: 1}}>
        {sub ? <div className='text-6xl mt-[100px] shadow-2xl border-2 bg-green-300 py-[150px] px-6 rounded-full'>
          COMPLETED
        </div> : <>
        <div className='text-6xl boerder-2'>CHECKOUT</div>
        <div className='border-b-2 w-[600px] border-zinc-300 border-dashed flex justify-between'>
          <div className='w-6 h-6 bg-zinc-800 rounded-full translate-y-3'></div>
          <div className={`w-6 h-6 ${loh > 0 ? 'bg-zinc-800' : 'bg-zinc-300'} transition-all duration-300 rounded-full translate-y-3`}></div>
          <div className={`w-6 h-6 ${loh > 1 ? 'bg-zinc-800' : 'bg-zinc-300'} transition-all duration-300 rounded-full translate-y-3`}></div>
          <div className={`w-6 h-6 ${loh > 2 ? 'bg-zinc-800' : 'bg-zinc-300'} transition-all duration-300 rounded-full translate-y-3`}></div>
        </div>
        <div className='flex flex-col gap-4 p-4'>
          
          <div>
            <div>
              <p>Name</p>
              <input type="text"/>
            </div>
            <div>
              <p>Last Name</p>
              <input type="text"/>
            </div>
            <div>
              <p>Email</p>
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className='flex gap-4 relative'>
          {loh > 0 ? <>          
          <button onClick={() => {setLoh(loh - 1)}} className="translate-y-[65px] p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">PREVIOUS</button> 
          {loh === 3 ? <button onClick={() => r()} className="absolute p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">SUBMIT</button> : 
          <button onClick={() => {setLoh(loh + 1)}} className="absolute p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">NEXT STEP</button>} </> : 
          <button onClick={() => {setLoh(loh + 1)}} className="p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">NEXT STEP</button>}
        </div>
        </>}
        
    </motion.div>
  )
}

export default Checker