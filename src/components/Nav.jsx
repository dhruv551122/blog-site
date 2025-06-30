import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='flex gap-2 items-center p-5 w-full shadow-xl rounded-2xl mb-6'>
            <Link to='/'><img src="../../img/logo.jpg" alt="" className='w-12 justify-self-start' /></Link>
            <div className='flex gap-10 w-full justify-center'>
                <Link to='/blogs' className='hover:text-orange-500 transition duration-300 transform after:block after:border-b-2 after:border-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left'>Blogs</Link>
                <Link className='hover:text-orange-500 transition duration-300 transform after:block after:border-b-2 after:border-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left'>About</Link>
                <Link className='hover:text-orange-500 transition duration-300 transform after:block after:border-b-2 after:border-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left'>MyBlogs</Link>
            </div>
        </div>
    )
}
