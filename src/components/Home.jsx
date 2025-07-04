import { Link } from "react-router-dom"
export default function Home() {

    const user = JSON.parse(sessionStorage.getItem('currentUser'))

    return (
        <div>
            <div className="p-8 w-full min-h-96 bg-cover bg-center text-white flex flex-col" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(../../img/banner.jpg)' }}>
                <h1 className="text-4xl sm:text-6xl mb-6">Ready to know facts!, {user?.username}</h1>
                <h2>Here, you’ll find a vibrant mix of thoughts, stories, and insights across a variety of topics — from tech tutorials and productivity hacks to travel tales, lifestyle tips, and creative musings. Whether you're here to learn, unwind, explore, or just get inspired, there's something for everyone.</h2>
                <h2> We believe in curiosity without limits, and this space is built to reflect that — a little bit of everything, thoughtfully written for everyone. Start exploring and see what catches your eye!</h2>
                <Link to='/blogs?page=1&blogs=10' className="group w-32 mt-6 pt-2 pb-2 pl-4 pr-8 outline-none bg-orange-500 text-white rounded-md cursor-pointer hover:bg-amber-600 relative">Explore <i className="group-hover:right-4 absolute right-5 transition-all duration-300 bi bi-arrow-right"></i></Link>
            </div>

        </div>
    )
}