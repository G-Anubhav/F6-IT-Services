import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/hero';
import PartnerSection from '../../components/PartnerSection';
import About from '../../components/about/about';
import About2 from '../../components/It-Services-Components/about/about';
import FeaturedSection from '../../components/It-Services-Components/FeatureSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import IndustrieSection from '../../components/IndustrieSection/IndustrieSection';
import FunFactSection from '../../components/It-Services-Components/FunFact/FunFact';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <main className="page_content">
                    <Hero />
                    <FeaturedSection />
                    <About2 />
                    <About />
                    <ServiceSection />
                    <FunFactSection />
                    <ProjectSection />
                    <WorkProcess />
                    <PartnerSection />
                    <IndustrieSection />
                    <Testimonial />
                    <FeaturesSection />
                    <TeamSection />
                    <FaqSection />
                    <CtaSection /> 
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;