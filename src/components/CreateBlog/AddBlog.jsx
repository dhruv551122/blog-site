import React, { useEffect, useRef, useState } from 'react'
import { UploadData } from './UploadData'

export default function AddBlog() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [isUploading, setIsUploading] = useState(false)
    const text = {}
    const errorRef = useRef()
    const titleRef = useRef()
    const bodyRef = useRef()

    function showError() {
        console.log(errorRef.current)
        errorRef.current.style.opacity = 1
        setTimeout(() => errorRef.current.style.opacity = 0, 2000)
        console.log('yee')
    }

    function handleChange(ref) {
        ref.current.style.height = 'auto'
        ref.current.style.height = `${ref.current.scrollHeight}px`
    }

    useEffect(() => {
        if (selectedImage) {
            const url = URL.createObjectURL(selectedImage)
            setImageUrl(url)
        }
        return (() => {
            URL.revokeObjectURL(selectedImage)
            setImageUrl(null)
        }
        )
    }, [selectedImage])

    return (
        <>
            {isUploading ? (
                <div className='flex flex-col gap-6 items-center justify-center w-full h-100'>
                    <div className='w-20 h-20 rounded-full border-4 border-gray-400 border-t-orange-500 animate-spin bg-transparent'></div>
                    <p className='text-4xl text-gray-400 font-bold text-center'>Please wait... Your blog is being created.</p>
                </div>
            ) :
                (<div className='relative' >
                    <p
                        className='text-nowrap absolute z-10 left-1/2 -translate-x-1/2 py-2 px-4 opacity-0 transition-all duration-500 rounded-2xl text-red-500 bg-white/60'
                        ref={errorRef}
                    >Please write all detail and also select image before creating blog</p>

                    <div
                        className='justify-self-center w-full lg:w-4/6 h-80 rounded-md relative mb-6'
                        style={
                            {
                                background: imageUrl ? `no-repeat url(${imageUrl}) #eaeaea center/cover` : '#eaeaea'
                            }
                        }
                    >
                        <input
                            type="file"
                            id='image'
                            className='border-1 hidden'
                            onChange={(e) => setSelectedImage(e.target.files[0])}

                        />
                        <label
                            htmlFor="image"
                            className='group w-8 h-8 p-2 flex items-center justify-center absolute right-2 bottom-2 bg-amber-500 rounded-full cursor-pointer'
                        ><i className="text-white bi bi-upload"></i> <p className='bg-gray-800 text-white p-1 text-nowrap hidden group-hover:block absolute bottom-0 -right-1 translate-x-full rounded-md text-sm'>Select Image</p></label>
                    </div>
                    <textarea
                        rows={1}
                        placeholder='Write Title....'
                        className='resize-none text-3xl font-bold outline-none w-full [&::-webkit-scrollbar]:hidden'
                        ref={titleRef}
                        onChange={(e) => {
                            handleChange(titleRef)
                            text.title = e.target.value
                        }} />
                    <textarea
                        rows={1}
                        placeholder='Write content....'
                        className='mt-4 resize-none text-xl outline-none w-full [&::-webkit-scrollbar]:hidden'
                        ref={bodyRef}
                        onChange={(e) => {
                            handleChange(bodyRef)
                            text.body = e.target.value
                        }} />
                    <UploadData text={text} image={selectedImage} showError={showError} setIsUploading={setIsUploading} />
                </ div>)

            }</>
    )
}

