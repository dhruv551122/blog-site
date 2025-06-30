import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BlogPost() {
    const { blogId } = useParams()
    const [blog, setBlog] = useState()
    useEffect(() => {
        console.log(blogId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId[1]}`).
            then(res => res.json()).
            then(res => setBlog(res))
    }, [blogId])

    return (
        <>
            <div className="flex flex-col items-center">
                <img src="../../img/banner.jpg" className='justify-self-center w-200 h-80 mb-10' alt="" />
            </div>
            <div className="justify-self-start">
                <h1 className="text-6xl font-bold mb-4">{blog?.title}</h1>
                <p>{blog?.body}</p>
            </div>
        </>

    )
}