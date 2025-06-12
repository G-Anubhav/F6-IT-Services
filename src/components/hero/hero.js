import React from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Bg from '../../images/bg/hero-bg02.jpg'
import heroImg from '../../images/hero/hero-img02.png'
import heroImg2 from '../../images/hero/hero-img03.png'
import heroImg3 from '../../images/hero/hero-img04.png'


const Hero = () => {

    return (
        <section className="hero o-hidden hero-style-two pos-rel pt-120 bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="hero_wrap pt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="xb-hero">
                                {/* <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">Grow your business
                                            <br /> with <span>SEO strategy</span>
                                        </h1>
                                    </div>
                                </Fade> */}
                                <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                                            Grow your business
                                            <br /> with{' '}
                                            <span style={{ color: '#1e90ff', fontWeight: 'bold' }}>
                                                <Typewriter
                                                    words={['SEO Strategy', 'Website Development', 'Social Media Marketing', 'Pay-Per-Click Advertising', 'Enterprise Automation']}
                                                    loop={0}
                                                    cursor
                                                    cursorStyle="|"
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1500}
                                                />
                                            </span>
                                        </h1>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="100ms"
                                            data-wow-duration="600ms">We empower organizations to achieve measurable growth with data-driven strategies, seamless technology integration, and a commitment to long-term digital excellence.
                                        </p>
                                    </div>
                                </Fade>
                                {/* <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <ul className="xb-item--item list-unstyled wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="600ms">
                                            <li><i className="far fa-check"></i> Recover lost traffic</li>
                                            <li><i className="far fa-check"></i> Boost organic traffic</li>
                                            <li><i className="far fa-check"></i> Get more sales</li>
                                        </ul>
                                    </div>
                                </Fade> */}
                                {/* <Fade direction='up' triggerOnce={'false'} duration={1600} delay={9}>
                                    <div>
                                        <div className="xb-btn mt-60 wow fadeInUp" data-wow-delay="300ms"
                                            data-wow-duration="600ms">
                                            <Link to="/contact" className="thm-btn thm-btn--aso thm-btn--aso_yellow">Get Started</Link>
                                            <Link to="/about" className="thm-btn thm-btn--aso">View Services</Link>
                                        </div>
                                    </div>
                                </Fade> */}
                                <Fade direction='up' triggerOnce={'false'} duration={1800} delay={9}>
                                    <div>
                                        <div className="xb-btn wow mt-60 fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                            <Link to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--white_icon">
                                                <div className="xb-item--hidden"><span className="xb-item--hidden-text">Get Started Now</span></div>
                                                <div className="xb-item--holder">
                                                    <span className="xb-item--text">Get Started Now</span>
                                                    <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                                    <span className="xb-item--text">Get Started Now</span>
                                                </div>
                                            </Link>
                                            <Link to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--white_icon">
                                                <div className="xb-item--hidden"><span className="xb-item--hidden-text">View Services</span></div>
                                                <div className="xb-item--holder">
                                                    <span className="xb-item--text">View Services</span>
                                                    <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                                    <span className="xb-item--text">View Services</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-right_img pos-rel">
                                <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                    <img className="wow fadeInRight" data-wow-duration="600ms" src={heroImg} alt="" />
                                </Fade>
                                <div className="out-image">
                                    <div className="img img--one updown-2">
                                        <Fade direction='down' triggerOnce={'false'} duration={1200} delay={9}>
                                            <img className="wow fadeInDown"
                                                data-wow-delay="100ms" data-wow-duration="600ms"
                                                src={heroImg2} alt="" />
                                        </Fade>
                                    </div>
                                    <div className="img img--two updown-3">
                                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                            <img className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms" src={heroImg3} alt="" />
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-scroll-down active">
                    <AnchorLink href="#about" className="scrollspy-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </AnchorLink>
                </div>
            </div>
        </section>
    )
}

export default Hero;