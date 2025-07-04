import React from 'react'
import Blogs from './components/Blogs/Blogs'
import { Navigate } from 'react-router-dom'

function MyBlogsUrl() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'))
    if (!user) {
        return <Navigate to='/login' />
    }
    return <Blogs url={`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`} userId={user.id} />
}

export default MyBlogsUrl