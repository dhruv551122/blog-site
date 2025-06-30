import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function Blogs() {
    const [blogs, setBlogs] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').
            then(res => res.json()).
            then(res => setBlogs(res)).
            catch(e => console.log(e))
    }, [])
    useEffect(() => {
        console.log(blogs)
    }, [blogs])
    return (
        <div className='flex gap-6 flex-wrap justify-between'>
            {
                blogs?.map((blog) => (
                    <div className='w-100 flex flex-col border-2 border-transparent shadow-xl/50 rounded-md overflow-hidden cursor-pointer hover:shadow-2xl/50 hover:border-orange-500 transition-all duration-300' onClick={() => navigate(`:${blog.id}`)} key={blog.id}>
                        <img src="../../img/banner.jpg" className='w-full' alt="" />
                        <div className='p-4'>
                            <h1 className='text-xl font-[600]'>{blog.title}</h1>
                            <p>{blog.body}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}