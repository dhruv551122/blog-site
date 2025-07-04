import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(

) {
    const navigate = useNavigate()
    const [users, setUsers] = useState()
    const usernameRef = useRef()
    const emailRef = useRef()
    const errorRef = useRef()
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await res.json()
            console.log(users)
            setUsers(users)
        }
        fetchData()
    }, [])

    function authenticateUser() {
        const userD = users?.find((user) => user.username === usernameRef.current.value && user.email === emailRef.current.value)
        if (userD) {
            sessionStorage.setItem('currentUser', JSON.stringify(userD))
            sessionStorage.setItem('isLoggedIn', JSON.stringify(true))
            console.log(JSON.parse(sessionStorage.getItem('currentUser')))
            navigate('/')
        } else {
            errorRef.current.style = 'opacity: 1'
            setTimeout(() => {
                errorRef.current.style = 'opacity: 0'
            }, 2000)
        }
    }

    return (
        <div className="w-full h-screen display flex flex-col items-center justify-center bg-[url(../../img/background.jpeg)] bg-cover">
            <div className="p-2 bg-[rgba(255,255,255,.8)] text-red-600 absolute top-2 left-[50%] -translate-x-[50%] rounded-2xl transition duration-200 ease-in opacity-0" ref={errorRef}>User not found, Enter valid detail</div>
            <div className="w-md bg-white pt-8 pb-8 pl-10 pr-10 rounded-md backdrop-blur-[2px] flex flex-col shadow-xl/20">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <div className="flex flex-col mb-2">
                    <label htmlFor="username" className="text-gray-500 text-md">Username</label>
                    <input type="text" id="username" className="w-full p-1 outline-none border-1 border-gray-400 focus:border-black rounded-md" ref={usernameRef} />
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="text-gray-500 text-md">Email</label>
                    <input type="text" id="email" className="w-full p-1 outline-none border-1 border-gray-400 focus:border-black rounded-md" ref={emailRef} />
                </div>
                <button className="p-2 bg-[#0f141e] self-center text-white rounded-2xl pl-4 pr-4 mt-3 cursor-pointer shadow-blue-500/50 hover:bg-gray-800 " onClick={authenticateUser}>Login</button >
            </div>
        </div>
    )
}