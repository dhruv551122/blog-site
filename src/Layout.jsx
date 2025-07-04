import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet, Navigate } from 'react-router-dom'

function Layout() {
    const isAuthenticated = JSON.parse(sessionStorage.getItem('isLoggedIn'))

    return (
        isAuthenticated ? (
            <div className='relative'>
                <Nav />
                <div className='py-6 px-4 font-nunito pb-100' >
                    <Outlet />
                </div >
                <Footer />
            </div>)
            : <Navigate to='/login'></Navigate>
    )

}

export default Layout