import React from 'react';
import chair from '../../images/colorful-vintage-collage-design 1-1.png'
import img1 from '../../images/colorful-vintage-collage-design 1-2.png'
import img2 from '../../images/colorful-vintage-collage-design 1-3.png'
import img3 from '../../images/colorful-vintage-collage-design 1-8.png'
import img4 from '../../images/colorful-vintage-collage-design 1.png'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules'
import SwiperTiles from './SwiperTiles';


const BestProduct = () => {

    return (
        <div className='w-full flex flex-col'>
            <div className='w-[80%] m-auto flex flex-col gap-3'>
                <h1 className='text-2xl max-w-[20%] font-bold'>Best Seller Product</h1>
                <div className='inline-flex items-center py-3  gap-3'>
                    <p className=''>See all collection </p>
                    <span><i className='bx bx-right-arrow-alt'></i></span>
                </div>
            </div>
            <div className='w-[80%]  sm:w-[100%] m-auto bg-white flex items-center justify-center'>
                <Swiper

                    className='mySwiper'
                    modules={[Pagination, EffectCoverflow]}

                    coverflowEffect={{
                        depth: 0,
                        rotate: 10,
                        scale: 1.3,
                        stretch: 0,
                        modifier: 0.7,
                        slideShadows: true,
                    }}
                    autoplay={true}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                        enabled: true
                    }}
                    spaceBetween={20}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        400: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2.5,
                            // spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            // spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            // spaceBetween: 50,
                        },
                    }}
                >

                    <SwiperSlide>
                        <SwiperTiles img={chair} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={img1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={img2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={img3} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={img4} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={chair} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={img1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SwiperTiles img={img2} />
                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default BestProduct