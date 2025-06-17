
import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
import CtaSection from '../../components/CtaSection/CtaSection';
import ServiceSection from '../../components/It-Services-Components/ServiceSection/ServiceSection';
import IntegrationSection from '../../components/Help-Desk-Components/IntegrationSection/IntegrationSection';
import icon from '../../images/icon/magic-icon.svg'
import Video from '../../images/video.mp4'
import FeaturesSection from './Features';
import WhyChoose from './WhyChoose';
import FunfactSection from './Funfact';
import WorkSection from '../TeamPage/work';
import Roadmap from './Roadmap';
// import AwardSection from './AwardSection';
import GallerySection from '../CareerPage/Gallery';
import bImg1 from '../../images/about/ab-img02.png'
import bImg2 from '../../images/shape/brd_shape.png'

const AboutUsPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title pt-150 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-xl-9 col-lg-8 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><img src={icon} alt="" /> About F6 IT Services</span>
                                        <h2 className="title">Unlocking New Heights of Online Success: How our Digital Agency Transforms <span className="title-highlight">Visibility</span> and <span className="title-highlight">Growth</span></h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 mt-30">
                                    {/* <div className="count-box">
                                        <h2 className="number">12 <span className="suffix">+</span></h2>
                                        <span className="text">Years of experience</span>
                                    </div> */}
                                    <div className="sd-right-img pos-rel">
                                        <img src={bImg1} alt="" />
                                        <div className="sd-arrow-shape style-3">
                                            <img className="xbzoominzoomup" src={bImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="about-video pt-75">
                    <div className="container">
                        <div className="career_video">
                            <video
                                loop
                                muted
                                playsInline
                                autoPlay
                            >
                                <source src={Video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <FeaturesSection />
                <WorkSection />
                <div style={{ backgroundColor: "#f6f6f8" }}>
                    <WhyChoose />
                    <FunfactSection />
                </div>
                <Roadmap />
                <ServiceSection />
                <IntegrationSection />
                {/* <AwardSection /> */}
                <GallerySection pClass={'pt-130'} />
                <CtaSection />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutUsPage;