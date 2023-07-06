import React from 'react'

const Services = () => {
    return (
        <div className='max-w-[1200px] md:w-[80%] md:m-auto py-9'>
            <div className='flex gap-4 justify-between'>
                <div className='flex items-center justify-center gap-3'>
                    <i className='bx bxs-ship text-[2rem] text-orange-200'></i>
                    <div className='flex flex-col gap-1'>
                        <p className='font-semibold text-xs'>Free Shipping</p>
                        <span className='text-[0.6rem] font-thin'>No charge for each delivery</span>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <i className='bx bx-wallet text-[2rem] text-orange-200'></i>
                    <div className='flex flex-col gap-1'>
                        <p className='font-semibold text-xs'>Quick Payment</p>
                        <span className='text-[0.6rem] font-thin'>100% secure payment</span>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <i className='bx bx-wallet text-[2rem] text-orange-200'></i>
                    <div className='flex flex-col gap-1'>
                        <p className='font-semibold text-xs'>24/7 Support</p>
                        <span className='text-[0.6rem] font-thin'>Quick support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services