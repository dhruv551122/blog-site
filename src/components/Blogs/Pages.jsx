import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom'

export default function Pages({ totalPages }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get('page'))
    const scrollContainerRef = useRef(null);
    const itemRefs = useRef([]);

    const scrollToPage = (index) => {
        const container = scrollContainerRef.current;
        const item = itemRefs.current[index];

        if (container && item) {

            container.scrollTo({
                left: item.offsetLeft - container.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='flex gap-2 mt-15 justify-center'>
            <i
                className="cursor-pointer hover:text-orange-500 active:text-black bi bi-caret-left-fill"
                onClick={() => {
                    setSearchParams((prevSerachParams) => { return { ...Object.fromEntries(prevSerachParams.entries()), page: currentPage <= 1 ? 1 : currentPage - 1 } })
                    if (currentPage > 1) {
                        scrollToPage(currentPage - 1)
                    }
                }}
            ></i>
            <div
                ref={scrollContainerRef}
                className='flex gap-4 max-w-40 overflow-x-auto no-scrollbar'
            >
                {Array.from({ length: totalPages }, (v, i) => <div
                    key={i}
                    ref={(el) => (itemRefs.current[i] = el)}
                    className={'hover:text-orange-500 after:block after:scale-x-0 hover:after:scale-x-100 after:border-1 after:border-orange-500 after:transition-transform transition-all duration-300 cursor-pointer after:origin-left' + (searchParams.get('page') == i + 1 ? 'border-2 text-orange-500' : '')}
                    onClick={
                        () => {
                            setSearchParams((prevSerachParams) => { return { ...Object.fromEntries(prevSerachParams.entries()), page: i + 1 } })
                            scrollToPage(i)
                        }
                    }
                >{i + 1}</div>)}
            </div>
            <i
                className="cursor-pointer hover:text-orange-500 active:text-black bi bi-caret-right-fill"
                onClick={() => {
                    setSearchParams((prevSerachParams) => { return { ...Object.fromEntries(prevSerachParams.entries()), page: currentPage >= totalPages ? totalPages : currentPage + 1 } })
                    if (currentPage < totalPages - 1) {
                        scrollToPage(currentPage + 1)
                    }
                }}
            ></i>
        </div >
    )
}
