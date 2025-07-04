import { useSearchParams } from 'react-router-dom'

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams()
    const blogs = Number(searchParams.get('blogs'))

    return (
        <div className='flex justify-end'>
            <div className='p-2 bg-gray-200 mb-4 rounded-md flex gap-2 items-center'>
                <h1 className='mb-2 text-gray-500'>Number of Blogs per page</h1>
                <div className='flex justify-end gap-2'>
                    <select
                        value={blogs}
                        className='border-1 border-gray-400 outline-none bg-white rounded-md'
                        onChange={
                            (e) => setSearchParams((prevSearchParams) => {
                                return { ...Object.fromEntries(prevSearchParams.entries()), blogs: e.target.value }
                            })
                        }>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
