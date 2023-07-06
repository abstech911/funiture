import React from 'react'
import interiorDeco from '../../images/unsplash_dPUWzT5dqz8Interior deco.png';
import useWindowScroll from '@react-hook/window-scroll';

const Featured = () => {
    const scrollY = useWindowScroll(120);
    return (
        <div className='h-[fit-content]'>
            <nav className={`fixed top-0 z-50  w-full  flex items-center justify-center p-4 ${scrollY > 40 && 'bg-orange-950 shadow-md duration-300 '}`}>
                <div className='flex-1'></div>
                <div className='flex-1 flex text-xs text-white font-semibold gap-2 items-center justify-between '>

                    <ul className='hidden text-white font-semibold gap-4 sm:flex'>

                        <li><a className='text-xs ' href='/'>Home</a></li>
                        <li><a className='text-xs ' href='/'>Shop</a></li>
                        <li><a className='text-xs ' href='/'>About Us</a></li>
                        <li><a className='text-xs ' href='/'>Contact</a></li>
                    </ul>
                    <div className='sm:mx-auto ml-auto flex gap-4'>
                        <i className='bx bx-camera-movie' ></i>
                        <i className='bx bx-menu sm:hidden' ></i>
                    </div>

                </div>
            </nav>
            <div className='relative'>
                <img src={interiorDeco} alt='interior deco' />
                <div className=' absolute top-0 bottom-0 my-auto z-20 w-full text-center'>
                    <div className='w-[80%] md:w-[50%] m-auto h-full flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-xl md:text-2xl font-extrabold text-white'>Bring Serenity to your Place with Interior</h1>
                        <p className='text-[0.5rem] md:text-xs font-semibold text-white'>find your dream plant for your home decoration with us, and we will make it happen.</p>
                        <div className='rounded-full w-[70%] bg-white/25 mt-2 border-white border-2 px-3 py-1 flex gap-2 items-center'>
                            <input className='text-white outline-none focus:outline-none text-xs px-3 py-1 rounded-full w-full m-auto bg-transparent  placeholder:text-white placeholder:text-xs focus:text-white' placeholder="Search plant" />
                            <div className='bg-gray-800 p-1.5 rounded-full flex items-center justify-center'>
                                <i className='bx bx-search font-xs shadow-lg text-white'></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden absolute bottom-16 left-2 border-2 border-white w-[25%] rounded-3xl px-2 py-1 bg-white/25 md:block'>
                    <div className=' h-5 w-5 rounded-full bg-black flex items-center justify-center absolute -top-1 right-0'>
                        <div className='h-3 w-3 rounded-full bg-white '>

                        </div>
                    </div>
                    <div className='flex flex-col text-xs'>
                        <h1>Milan Jack</h1>
                        <div className='flex gap-4'>
                            <p>position</p>
                            <p>rating</p>
                        </div>
                        <div>
                            <p>content</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Featured