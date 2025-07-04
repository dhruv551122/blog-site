import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import Pages from './Pages'
import Filter from './Filter'

export default function Blogs({ url, userId }) {
    const [searchParams] = useSearchParams({ page: 1 })
    const pageId = Number(searchParams.get('page'))
    const numberOfBlogs = Number(searchParams.get('blogs')) || 10
    const [blogs, setBlogs] = useState()
    const navigate = useNavigate()
    console.log(userId)
    useEffect(() => {
        fetch(url).
            then(res => res.json()).
            then(res => {
                const userCreatedBlogs = JSON.parse(localStorage.getItem('createdBlogs')) || []
                if (userId !== null) {
                    const loggedUserCreatedBLogs = userCreatedBlogs?.filter(blog => blog.userid === userId)
                    const loggedUserBlog = [...loggedUserCreatedBLogs, ...res]
                    setBlogs(loggedUserBlog)
                } else {
                    const allBlogs = [...userCreatedBlogs, ...res]
                    setBlogs(allBlogs)
                }
            }).
            catch(e => console.log(e))
    }, [url, userId])

    const totalPages = useMemo(() => {
        const length = blogs?.length
        const pages = (length % numberOfBlogs === 0) ? (length / numberOfBlogs) : (Math.floor(length / numberOfBlogs) + 1)
        return pages
    }, [blogs, numberOfBlogs])

    return (
        <>
            <Filter />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:justify-end '>
                {
                    pageId > totalPages ? <Navigate to='/not-found'></Navigate> :
                        blogs?.slice(pageId * numberOfBlogs - numberOfBlogs, pageId * numberOfBlogs)?.map((blog) => (
                            <div className='border-2 border-transparent shadow-xl/50 rounded-md overflow-hidden cursor-pointer hover:shadow-2xl/50 hover:border-orange-500 transition-all duration-300' onClick={() => navigate(`/blogs/${blog.id}`)} key={blog.id}>
                                <img src={blog.image ? blog.image : "../../img/banner.jpg"} className='w-full h-70' alt="" />
                                <div className='p-4'>
                                    <h1 className="text-xl leading-5 max-h-10 font-[700] overflow-hidden relative before:content-['...'] before:absolute before:right-0 before:bottom-0 pr-4 text-justify after:absolute after:right-0 after:bg-white after:w-4 after:h-4 mb-4">{blog.title}</h1>
                                    <p className="leading-5 max-h-15 overflow-hidden relative before:content-['...'] before:tracking-wide before:font-bold before:absolute before:right-0 before:bottom-0 pr-4 text-justify after:absolute after:right-0 after:bg-white after:w-4 after:h-4">{blog.body}</p>
                                </div>
                            </div>
                        ))
                }
            </div >
            <Pages totalPages={totalPages} activePage={pageId} />
        </>
    )
}