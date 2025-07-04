import React from 'react'

function Footer() {
    return (
        <div className='absolute z-10 bottom-0 w-full h-80 bg-[rgb(23,30,41)] mt-10 flex flex-col gap-7 items-center justify-center font-nunito'>
            <div className='text-white'>
                <h1 className='text-4xl sm:text-5xl text-center'>Let's Connect</h1>
                <h3 className='text-md sm:text-lg text-center'>We hope you found something valuable today. Keep exploring!</h3>
            </div>
            <div className='bg-white rounded-4xl p-2 flex flex-wrap items-center justify-center'>
                <input type="text" className='p-2 outline-none' placeholder='Enter your email here...' />
                <button className='bg-orange-500 cursor-pointer hover:bg-amber-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-4xl'>Subscribe</button>
            </div>
            <div className='text-white flex gap-4 text-xl '>
                <i className="bi bi-github hover:text-orange-500 cursor-pointer transition-all duration-200"></i>
                <i className="bi bi-twitter-x hover:text-orange-500 cursor-pointer transition-all duration-200"></i>
                <i className="bi bi-linkedin hover:text-orange-500 cursor-pointer transition-all duration-200"></i>
                <i className="bi bi-instagram hover:text-orange-500 cursor-pointer transition-all duration-200"></i>
                <i className="bi bi-discord hover:text-orange-500 cursor-pointer transition-all duration-200"></i>
            </div>
        </div>
    )
}

export default Footer