import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../images/icon/tp-work-icon01.svg'
import icon2 from '../../images/icon/tp-work-icon02.svg'
import icon3 from '../../images/icon/tp-work-icon03.svg'
import icon4 from '../../images/icon/tp-work-icon04.svg'
import icon5 from '../../images/icon/tp-work-icon05.svg'
import icon6 from '../../images/icon/tp-work-icon06.svg'
import iIcon from '../../images/icon/eye-icon.svg'
import iIcon2 from '../../images/icon/sms-white-icon01.svg'


const workItems = [
    {
        id: 1,
        icon: icon2,
        title: 'Confident in What We Deliver',
        content: 'We take on projects only when we’re fully confident in delivering measurable results — no false promises.',
    },
    {
        id: 2,
        icon: icon3,
        title: '100% Project Focus at Every Stage',
        content: 'We prioritize your project with dedicated attention — from kickoff to completion and beyond.',
    },
    {
        id: 3,
        icon: icon1,
        title: 'Transparent, Goal-Oriented Approach',
        content: 'We believe in clarity — clear milestones, timely updates, and full accountability on every deliverable.',
    },
    {
        id: 4,
        icon: icon4,
        title: 'Strategic Solutions Designed for Returns',
        content: 'Every solution is custom-built to align with your business goals, ensuring maximum return on investment.',
    },
    {
        id: 5,
        icon: icon5,
        title: 'Long-Term Success Over Quick Wins',
        content: 'We focus on sustainable growth — not shortcuts — to ensure your business keeps thriving post-launch.',
    },
    {
        id: 6,
        icon: icon6,
        title: 'Feels Like an Extension of Your Team',
        content: 'We collaborate closely, working with you (not just for you) to deliver solutions that truly fit your culture.',
    },
];

const WorkSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`work  pb-130 ${props.bg}`}>
            <div className="container">
                <div className="sec-title--two text-center mb-60">
                    <div className="sub-title">
                        <img src={iIcon} alt="" />
                        Why work with us
                    </div>
                    <h2 className="title">Why Choose F6 IT Services</h2>
                </div>
                <div className="tp-work-wrapp">
                    <div className="row mt-none-30">
                        {workItems.map((item) => (
                            <div className="col-lg-6 mt-30" key={item.id}>
                                <div className="tp-work-item">
                                    <div className="xb-item--inner ul_li">
                                        <div className="xb-item--icon">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">{item.title}</h3>
                                            <p className="xb-item--content">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="header-contact text-center mt-60">
                        <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso thm-btn--header-black">
                            Let’s talk
                            <img src={iIcon2} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
