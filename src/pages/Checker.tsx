import React from 'react'

const Checker = () => {
  return (
    <div className='flex flex-col items-center pt-10 gap-10 min-h-screen'>
        <div className='text-6xl boerder-2'>CHECKOUT</div>
        <div className='border-b-2 w-[600px] border-zinc-300 border-dashed flex justify-between'>
          <div className='w-6 h-6 bg-zinc-800 rounded-full translate-y-3'></div>
          <div className='w-6 h-6 bg-zinc-300 rounded-full translate-y-3'></div>
          <div className='w-6 h-6 bg-zinc-300 rounded-full translate-y-3'></div>
          <div className='w-6 h-6 bg-zinc-300 rounded-full translate-y-3'></div>
        </div>
        <div className='flex flex-col gap-4 p-4'>
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
        <button className="p-4 mb-4 bg-zinc-800 hover:text-white transition-all hover:bg-zinc-600 text-white rounded-md w-60">NEXT STEP</button>
    </div>
  )
}

export default Checker