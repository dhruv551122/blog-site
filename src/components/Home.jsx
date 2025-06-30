import { useContext } from "react"
import { userContext } from "./UserContext.js"

export default function Home() {

    const user = JSON.parse(sessionStorage.getItem('currentUser'))

    return (
        <div className="relative p-8 w-full h-80 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(../../img/banner.jpg)' }}>
            <h1 className="text-6xl mb-6">Ready to know facts!, {user.username}</h1>
            <h2>Here, you’ll find a vibrant mix of thoughts, stories, and insights across a variety of topics — from tech tutorials and productivity hacks to travel tales, lifestyle tips, and creative musings. Whether you're here to learn, unwind, explore, or just get inspired, there's something for everyone.</h2>
            <h2> We believe in curiosity without limits, and this space is built to reflect that — a little bit of everything, thoughtfully written for everyone. Start exploring and see what catches your eye!</h2>
            <button className="group pt-2 pb-2 pl-4 pr-8 outline-none bg-orange-500 text-white absolute bottom-6 rounded-md cursor-pointer hover:bg-amber-600 realtive">Explore <i class="group-hover:right-1 transition-all duration-300 absolute right-2 bi bi-arrow-right"></i></button>
        </div>
    )
}