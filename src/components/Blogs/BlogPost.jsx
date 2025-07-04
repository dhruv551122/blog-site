import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReadMore from "./ReadMore"

export default function BlogPost() {
    const { blogId } = useParams()
    const [blog, setBlog] = useState()
    const [comments, setComments] = useState()
    useEffect(() => {
        async function getData() {
            const userCreatedBlogs = JSON.parse(localStorage.getItem('createdBlogs'))
            const userBlog = userCreatedBlogs?.find(blog => blog.id == Number(blogId))
            console.log(userCreatedBlogs)
            console.log(blogId)
            if (userBlog) {
                setBlog(userBlog)
            } else {
                const blogResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
                const blogData = await blogResponse.json()
                setBlog(blogData)
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blogId}`).
                    then(res => res.json()).
                    then(res => setComments(res)).
                    catch(e => console.log(e))
            }
        }
        getData()
    }, [blogId])

    return (
        <>
            {!blog ? (<div>...loading</div>) : (
                <>
                    <div className="flex items-center justify-center">
                        <img src={blog?.image ? blog.image : "../../img/banner.jpg"} className='w-200 h-80 mb-10' alt="" />
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold mb-4">{blog?.title}</h1>
                        <p>{blog?.body}</p>
                    </div>
                    <div className="w-full border-b-1 border-gray-400 mt-8"></div>
                    <div>
                        <h1 className="text-4xl mt-6 mb-4"><i className="bi bi-chat"></i>{'  '}Comments</h1>
                        <div className="flex flex-col gap-4">
                            {
                                comments?.map((comment, i) => (
                                    <div key={i} className="bg-orange-100 p-4 rounded-xl">
                                        <p className="text-gray-500 text-[12px]">By {comment.email}</p>
                                        <h1 className="font-semibold text-xl">{comment.name}</h1>
                                        <ReadMore paragraph={comment.body.repeat(3)}></ReadMore>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>)

            }
        </>
    )

}