import React from 'react';
import { Fade } from "react-awesome-reveal";
import check from '../../images/icon/check.svg'
import error from '../../images/icon/erorr.svg'
import logo from '../../images/logo/F6-logo-black.svg'
import star from '../../images/icon/star.svg'

const FeaturesSection = (props) => {

    return (
        <section className="feature">
            <div className="feature-wrapper sec-bg sec-bg--2 pt-130 pb-130">
                <div className="container">
                    <div className="feature_inner">
                        <div className="sec-title--two text-center mb-60">
                            <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                <div>
                                    <div className="sub-title wow fadeInDown" data-wow-duration="600ms"><img
                                        src={star} alt="" />Why we’re different</div>
                                </div>
                            </Fade>
                            <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                <div>
                                    <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Take a
                                        look at how we're different</h2>
                                </div>
                            </Fade>
                        </div>
                        <table className="feature-table">
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th><img src={logo} alt="" /></th>
                                    <th>Other Companies</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr>
                                    <td>Strategic Focus on Measurable Business Outcomes</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={error} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Tailor-Made, Revenue-Boosting & Growth Strategy</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={error} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Client-Centric Approach With Dedicated Execution</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={error} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Transparent Processes, Predictable Delivery Timelines</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={check} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Seamless Collaboration Across Teams and Functions</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={error} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>ROI-Driven, Not Just Data-Driven Work</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={error} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Enterprise-Grade Technology With Agile Flexibility</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={check} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Tech-Driven, People-Powered Digital Transformation</td>
                                    <td><img src={check} alt="" /></td>
                                    <td><img src={error} alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;