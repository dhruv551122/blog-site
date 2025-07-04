import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div
            className="flex flex-col gap-10 justify-center items-center w-full h-screen bg-[#eaeaea]"
        >
            <h1 className="text-6xl">Ooops! 404</h1>
            <h1 className="text-5xl font-light">Page not found</h1>
            <Link to='/' className="pt-2 pb-2 pl-4 pr-4 rounded-2xl font-medium bg-amber-500 text-white">Home</Link>
        </div>
    )
}