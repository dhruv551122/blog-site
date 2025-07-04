import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const listRef = useRef()
    const arrowRef = useRef()
    function handleClick() {

        if (isOpen) {
            arrowRef.current.style.rotate = '0deg'
        } else {
            arrowRef.current.style.rotate = '180deg'
        }
    }
    return (
        <div>
            <div className='flex justify-between sm:justify-around bg-[rgba(255,255,255,0.98)] gap-2 items-center p-4 sm:p-5 w-full shadow-xl mb-6 sticky top-0 z-20'>
                <Link to='/'><img src="../../img/logo.jpg" alt="" className='w-12 justify-self-start' /></Link>
                <div className='hidden sm:flex gap-3 text-md sm:text-lg sm:gap-10 w-full justify-center [&_.child]:hover:text-orange-500 [&_.child]:transition [&_.child]:duration-300 [&_.child]:transform [&_.child]:after:block [&_.child]:after:border-b-2 [&_.child]:after:border-orange-500 [&_.child]:after:scale-x-0 [&_.child]:hover:after:scale-x-100 [&_.child]:after:transition-transform [&_.child]:after:origin-left'>
                    <Link to='/blogs?page=1&blogs=10' className='child'>Blogs</Link>
                    <Link to='/about' className='child'>About</Link>
                    <Link to='/my-blogs?page=1&blogs=10' className='child'>My Blogs</Link>
                    <Link to='/add-blog' className='child'>Add Blog</Link>
                </div>
                <div
                    className='flex sm:hidden items-center'
                    onClick={() => {
                        handleClick()
                        setIsOpen(!isOpen)
                    }}
                >
                    <i ref={listRef} className="text-2xl bi bi-list transition duration-300"></i>
                    <i ref={arrowRef} className="text-sm bi bi-caret-down-fill transition duration-300"></i>
                </div>

                {
                    isOpen &&
                    <div className='flex flex-col absolute bottom-0 right-8 translate-y-full bg-white p-4 *:p-2'>
                        <Link to='/blogs?page=1&blogs=10' className='child'>Blogs</Link>
                        <Link to='/about' className='child'>About</Link>
                        <Link to='/my-blogs?page=1&blogs=10' className='child'>My Blogs</Link>
                        <Link to='/add-blog' className='child'>Add Blog</Link>
                    </div>
                }

            </div>
        </div>
    )
}
