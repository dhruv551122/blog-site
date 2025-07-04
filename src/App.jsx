import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import BlogPost from './components/Blogs/BlogPost.jsx'
import Login from './components/Login.jsx'
import NotFound from './components/NotFound.jsx'
import Layout from './Layout.jsx'
import AddBlog from './components/CreateBlog/AddBlog.jsx'
import MyBlogsUrl from './MYBlogsUrl.jsx'
import About from './components/Blogs/About.jsx'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='/blogs' element={<Blogs url={'https://jsonplaceholder.typicode.com/posts'} userId={null} />} />
            <Route path='/about' element={<About />} />
            <Route path='/my-blogs' element={<MyBlogsUrl />} />
            <Route path='/add-blog' element={<AddBlog />} />
            <Route path='/blogs/:blogId' element={<BlogPost />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}