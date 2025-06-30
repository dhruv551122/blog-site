import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='pl-20 pr-20 pt-10'>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout