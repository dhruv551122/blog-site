import React, { useState } from 'react'

export default function ReadMore({ paragraph, maxLength = 150 }) {
    const [isExpended, setIsExpended] = useState(false)

    function toggleText() {
        setIsExpended(!isExpended)
    }

    const text = isExpended ? paragraph : paragraph.slice(0, maxLength)

    return (
        <div className='text-gray-500'>
            {text}
            {
                paragraph.length > maxLength && <span className='text-black cursor-pointer hover:text-orange-500' onClick={toggleText}>
                    {isExpended ? 'Read less' : '...Read more'}
                </span>
            }
        </div>
    )
}

