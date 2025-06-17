import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/navigation';
import tImg1 from '../../images/testimonial/sa-tas05.png'
import tImg2 from '../../images/testimonial/sa-tas01.png'
import tImg3 from '../../images/testimonial/sa-tas02.png'
import tImg4 from '../../images/testimonial/sa-tas03.png'

import icon1 from '../../images/testimonial/tes-logo02.png'
import icon2 from '../../images/testimonial/tes-logo01.png'
import icon3 from '../../images/testimonial/tes-logo03.png'
import icon4 from '../../images/testimonial/tes-logo04.png'
import icon5 from '../../images/testimonial/tes-logo05.png'

import quote from '../../images/icon/quta.png'
import hicon from '../../images/icon/like-icon.svg'



const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        logo: icon1,
        Des: "Their PPC team optimized our campaigns so efficiently that our ad spend went down by 35%, while our conversions doubled. They constantly test and refine for better results.",
        Name: 'Rahul Verma',
        sub: 'Founder at CityStyle Furniture',
        country: 'Seattle, Ukraine',
    },
    {
        id: '02',
        tImg: tImg2,
        logo: icon2,
        Des: "Within just 3 months of working with F6, our organic traffic grew by 160%! Their SEO strategies not only boosted our visibility but also brought in highly qualified leads.",
        Name: 'Ritika Mehta',
        sub: 'Marketing Head at GreenLeaf Naturals',
    },
    {
        id: '03',
        tImg: tImg3,
        logo: icon3,
        Des: "From redesigning our website to building our brand across social media platforms, the team at F6 handled everything seamlessly. We’ve seen a 3x engagement boost and stronger brand loyalty.",
        Name: 'Nitin Desai',
        sub: 'Owner at TravelWings Holidays',
    },
    {
        id: '04',
        tImg: tImg4,
        logo: icon4,
        Des: "We approached them for AI-based process automation, and they completely transformed how we manage customer support and operations. Tasks that took hours are now completed in minutes.",
        Name: 'Anjali Kapoor',
        sub: 'CTO at Zenith Enterprises',
    },
    {
        id: '05',
        tImg: tImg3,
        logo: icon5,
        Des: "After launching our ecommerce store with [Your Company Name], our sales increased by 220% in the first quarter. The site is lightning fast, mobile-optimized, and integrated with smart analytics.",
        Name: 'Mohit Arora',
        sub: 'Director at Blunite Techwear',
    },
    {
        id: '06',
        tImg: tImg2,
        logo: icon2,
        Des: "We needed a partner who could handle everything — SEO, ads, content, and web development. F6 delivered beyond expectations. Our brand now ranks on Page 1 for 20+ keywords and our revenue has doubled!",
        Name: 'Shruti Patel',
        sub: 'Co-Founder at EarthyEssentials.in',
    },
]

const Testimonial = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (

        <section className={`testimonial o-hidden pb-50 ${props.tClass}`}>
            <div className="container">
                <div className="sa-tes_top pos-rel mb-60">
                    <div className="sec-title--two">
                        <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                            <div>
                                <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                    src={hicon} alt="" />99% positive feedback</div>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                            <div>
                                <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Feedback That Speaks</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="sa-tes_button">
                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-angle-left"></i></div>
                        <div className="sa-swiper-btn active swiper-button-next" ref={nextRef}><i className="fal fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="sa-testimonial-slider-inner">
                <div className="sa-testimonial-slider">
                    <div className="swiper-wrapper">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={5}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            breakpoints={{
                                1600: {
                                    slidesPerView: 5,
                                },
                                768: {
                                    slidesPerView: 2,
                                    centeredSlides: false,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {testimonial.map((testimonial, tsm) => (
                                <SwiperSlide key={tsm}>
                                    <div className="sa-testimonial-item">
                                        <div className="xb-item--inner">
                                            <div className="xb-item--quta">
                                                <img src={quote} alt="" />
                                            </div>
                                            <p className="xb-item--content">"{testimonial.Des}"</p>
                                            <div className="xb-item--holder ul_li">
                                                <div className="xb-item--avatar">
                                                    <img src={testimonial.tImg} alt="" />
                                                </div>
                                                <div className="xb-item--author">
                                                    <h3 className="xb-item--name">{testimonial.Name}</h3>
                                                    <span className="xb-item--desig">{testimonial.sub}</span>
                                                    <div className="xb-item--logo">
                                                        <img src={testimonial.logo} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;