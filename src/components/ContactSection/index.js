import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icon/call-calling.svg'
import icon2 from '../../images/icon/icon-sms.svg'


const ContactSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className="contact pt-85">
                <div className="container">
                    <div className="row pb-130 mt-none-30">
                        <div className="col-lg-8 mt-30">
                            <div className="cs-contact-wrap cs-contact-form cd-contact-form item-contact_form">
                                <h2 className="xb-title">Send us a message</h2>
                                <p className="xb-content">Give us a chance to serve and bring magic to your brand.</p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-4 mt-30">
                            <div className="item-contact_info">
                                <div className="xb-item--inner">
                                    <div className="xb-item--top">
                                        <h3 className="xb-item--title">Contact Info</h3>
                                        <span className="xb-item--hotline"><img src={icon1} alt="" /> +91 96156 41564</span>
                                        <span className="xb-item--email"><img src={icon2} alt="" /> info@f6itservices.com</span>
                                        <ul className="social_icons_block list-unstyled ul_li">
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Twitter"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3872 0H15.9952L10.299 7.20048L17 17H11.7545L7.64298 11.0582L2.94415 17H0.332464L6.42395 9.29688L0 0H5.37853L9.09105 5.43101L13.3872 0ZM12.4711 15.2755H13.9155L4.5917 1.63462H3.0402L12.4711 15.2755Z" fill="#0C111D" />
                                                </svg></Link>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">Gurugram/Gurgaon office</h3>
                                        <span className="xb-location">SCO-88, 2nd Floor, <br /> Sector 12A, Gurugram, Haryana</span>
                                    </div>
                                    {/* <div className="contact-info_widget">
                                        <h3 className="xb-title">New Delhi office</h3>
                                        <span className="xb-location">SCO-88, 2nd Floor, <br /> Sector 12A, Gurugram, Haryana</span>
                                    </div> */}
                                    <hr className="breack-line" />
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">our office open time</h3>
                                        <span className="xb-location">Mon - Sat : 8.00 AM - 5.00 PM <br /> Sunday : Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gmap_canvas bg-light">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.383634640626!2d77.03435207416126!3d28.46799109153607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195391c91779%3A0x51da301450033261!2sJayant%20India%20Nidhi%20limited!5e0!3m2!1sen!2sin!4v1750155581818!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default ContactSection;