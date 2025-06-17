
import React, { useState } from 'react';
import hicon from '../../images/icon/magic.svg'
import { Fade } from "react-awesome-reveal";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pt-100 pb-140">
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                        <div>
                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                src={hicon} alt="" />FAQ’s</div>
                        </div>
                    </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Have a
                                question look here</h2>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="xb-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                            <Accordion open={open} toggle={toggle} className='accordion_box clearfix list-unstyled'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'><span className="number">01</span> _ Can your digital solutions seamlessly integrate with our existing business systems?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>Yes — our solutions are designed with interoperability in mind. We prioritize seamless integration to ensure minimal disruption while enhancing your current ecosystem’s efficiency and scalability. <br /> Key aspects of our integration process include:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>Assessment of your existing platforms and architecture.
                                                </li>
                                                <li><i className="far fa-check"></i>Custom APIs and middleware for smooth connectivity.</li>
                                                <li><i className="far fa-check"></i>Data migration and synchronization with minimal downtime.</li>
                                                <li><i className="far fa-check"></i>Ongoing support to maintain system compatibility and performance.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'><span className="number">02</span> _ How does F6 IT Services ensure measurable ROI from marketing campaigns?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>We take a data-driven, performance-first approach to ensure every campaign contributes to your business goals. From targeting to execution, every decision is backed by insights and optimization. <br /> Key practices we follow include:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>Defining clear Key Performance Indicators(KPIs) and Return On Investment
                                                    (ROI) benchmarks upfront.
                                                </li>
                                                <li><i className="far fa-check"></i>Precision audience segmentation and targeting strategies.
                                                </li>
                                                <li><i className="far fa-check"></i>Continuous A/B testing to refine creative and messaging.</li>
                                                <li><i className="far fa-check"></i>Transparent performance reporting with actionable insights.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'><span className="number">03</span>  _ Do you offer bundled digital transformation services tailored to business needs?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>Yes, we provide comprehensive digital transformation bundles designed to streamline your operations, accelerate growth, and reduce vendor dependency. Each package is customized to meet your unique business goals and stage of maturity. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>Web & mobile development + UI/UX design.
                                                </li>
                                                <li><i className="far fa-check"></i>Automation + CRM + performance marketing.</li>
                                                <li><i className="far fa-check"></i>SEO + content + social media management.</li>
                                                <li><i className="far fa-check"></i>Business apps + cloud deployment + DevOps.</li>
                                            </ul>
                                            <p>Any combination of services can be bundled. Each bundle is customized for outcomes, efficiency, and scale.</p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'><span className="number">04</span>_ How does F6 IT Services foster long-term, value-driven client partnerships?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>At F6 IT Services, we believe in building lasting relationships that extend well beyond project delivery. We remain actively involved to support innovation, adapt to your evolving needs, and ensure long-term value creation. Like:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>Continuous performance monitoring and optimization.
                                                </li>
                                                <li><i className="far fa-check"></i>Proactive system upgrades and technology enhancements.</li>
                                                <li><i className="far fa-check"></i>Strategic guidance aligned with business growth.</li>
                                                <li><i className="far fa-check"></i>Dedicated support and rapid issue resolution.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'><span className="number">05</span> _  Do you offer strategic consulting prior to technical development or implementation?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>Yes — at F6 IT Services, we begin every project with deep strategic consultation to ensure the solution is aligned with your business objectives, technical environment, and growth roadmap. This reduces risk and maximizes return from the outset. <br /> Our consulting phase typically includes:</p>
                                            <ul className="list-unstyled">
                                                <li><i className="far fa-check"></i>In-depth business and technical requirement analysis.
                                                </li>
                                                <li><i className="far fa-check"></i>Solution architecture planning and feasibility validation.</li>
                                                <li><i className="far fa-check"></i>Risk assessment and resource planning.</li>
                                                <li><i className="far fa-check"></i>Strategic roadmap aligned with business KPIs.</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
