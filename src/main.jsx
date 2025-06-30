import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Blogs from './components/Blogs.jsx'
import BlogPost from './components/BlogPost.jsx'
import Login from './components/Login.jsx'
import NotFound from './components/NotFound.jsx'
import { AuthProvider } from './components/UserContextProvider.jsx'
import Layout from './Layout.jsx'

const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={isLoggedIn ? <Home /> : <Navigate to='/login' />} />
            <Route path='/blogs' element={isLoggedIn ? <Blogs /> : <Navigate to='/login' />} />
            <Route path='/blogs/:blogId' element={isLoggedIn ? <BlogPost /> : <Navigate to='/login' />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode >,
)
