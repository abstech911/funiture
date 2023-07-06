import React from 'react'
import { useSwiperSlide } from 'swiper/react'

const SwiperTiles = (props) => {

    const swiperSlide = useSwiperSlide();

    return (
        <div className={`rounded-lg  shadow-lg overflow-hidden duration-500 bg-white ${swiperSlide.isActive === true ? "bg-orange-200/10" : ''}`}>
            <div className='flex gap-2'>
                <img src={props.img} alt='vintage' className='rounded-lg h-[200px] ' />
                <div className='hidden md:flex items-center justify-center'>
                    <p>
                        Enim ullamco nostrud pariatur incididunt ut aute ut
                        anim ea ullamco aliqua. Aliquip non aute officia sit
                    </p>
                </div>
            </div>

            <div className={`py-4 px-6  `}>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-light text-xs'>Modern Picture 8</p>
                        <p className='font-semibold text-sm'>$15.00</p>
                    </div>
                    <div>
                        <i className='bx bx-cart text-[1.5rem]'></i>
                    </div>
                </div>
                <div className='flex gap-2 py-3 w-full flex-wrap'>
                    <button className='border-orange-200 text-orange-300 bg-orange-50 px-3 py-0.5 text-xs'>label</button>
                    <button className='border-orange-200 text-orange-300 bg-orange-50 px-3 py-0.5 text-xs'>label</button>
                    <button className='border-orange-200 text-orange-300 bg-orange-50 px-3 py-0.5 text-xs'>label</button>
                </div>
            </div>
        </div>
    )
}

export default SwiperTiles