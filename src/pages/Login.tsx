import React from 'react'

const Login = ({setModalOn, setChoice, choice}: any) => {

const handleOkClick = () => {
    setModalOn(false) 
    setChoice(!choice) 
}

const handleCancelClick = () => {
    setModalOn(false) 
}

  return (
    <div className='bg-zinc-200 opacity-90 fixed inset-0 z-50 h-screen w-screen'>
        <div className='flex h-screen justify-center items-center'>
            <div className='flex-col justify-center bg-white py-12 px-24 border-4 border-indigo-400 rounded-xl'>
                <div className='flex text-lg text-zinc-600 mb-10'>{choice ? <p>LogIN?</p> : <p>LogOUT?</p> }</div>
                <div className='flex'>
                    <button onClick={handleOkClick} className='rounded px-4 py-2 text-white bg-green-400'>Yes</button>
                    <button onClick={handleCancelClick} className='rounded px-4 py-2 ml-4 text-white bg-indigo-500'>No</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login