// import React, { useState } from 'react'
// import SimpleReactValidator from 'simple-react-validator';


// const ContactForm = (props) => {

//     const [forms, setForms] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         phone: '',
//         company: '',
//         message: ''
//     });
//     const [validator] = useState(new SimpleReactValidator({
//         className: 'errorMessage'
//     }));
//     const changeHandler = e => {
//         setForms({ ...forms, [e.target.name]: e.target.value })
//         if (validator.allValid()) {
//             validator.hideMessages();
//         } else {
//             validator.showMessages();
//         }
//     };

//     const submitHandler = e => {
//         e.preventDefault();
//         if (validator.allValid()) {
//             validator.hideMessages();
//             setForms({
//                 name: '',
//                 email: '',
//                 subject: '',
//                 phone: '',
//                 company: '',
//                 message: ''
//             })
//         } else {
//             validator.showMessages();
//         }
//     };

//     return (
//         <form onSubmit={(e) => submitHandler(e)} className="contact-form">
//             <div className="row">
//                 <div className="col-lg-6">
//                     <div className="input-field">
//                         <label htmlFor="text1">Full Name<span className='required-label'>*</span></label>
//                         <div className="input-box">
//                             <input
//                                 value={forms.name}
//                                 type="text"
//                                 name="name"
//                                 className="form-control"
//                                 onBlur={(e) => changeHandler(e)}
//                                 onChange={(e) => changeHandler(e)} />
//                             {validator.message('name', forms.name, 'required|alpha_space')}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-6">
//                     <div className="input-field">
//                         <label htmlFor="text2">Email<span className='required-label'>*</span></label>
//                         <div className="input-box">
//                             <input
//                                 value={forms.email}
//                                 type="email"
//                                 name="email"
//                                 className="form-control"
//                                 onBlur={(e) => changeHandler(e)}
//                                 onChange={(e) => changeHandler(e)} />
//                             {validator.message('email', forms.email, 'required|email')}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div className="input-field">
//                         <label htmlFor="text3">Phone<span className='required-label'>*</span></label>
//                         <div className="input-box">
//                             <input
//                                 value={forms.phone}
//                                 type="phone"
//                                 name="phone"
//                                 className="form-control"
//                                 onBlur={(e) => changeHandler(e)}
//                                 onChange={(e) => changeHandler(e)} />
//                             {validator.message('phone', forms.phone, 'required|phone')}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div className="input-field text-field">
//                         <label htmlFor="text5">Message</label>
//                         <div className="input-box">
//                             <textarea
//                                 onBlur={(e) => changeHandler(e)}
//                                 onChange={(e) => changeHandler(e)}
//                                 value={forms.message}
//                                 type="text"
//                                 name="message"
//                                 className="form-control"
//                                 placeholder="How can we help you?">
//                             </textarea>
//                             {validator.message('message', forms.message, 'required')}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="cp-det-btn mt-20 d-grid">
//                 <button className="cp-btn" type='submit'>Send us a message <i className="fal fa-arrow-right"></i></button>
//             </div>
//         </form>
//     )
// }

// export default ContactForm;

import React, { useState } from 'react';
import Select from 'react-select';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        company: '',
        message: '',
        services: []
    });

    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));

    const serviceOptions = [
        { value: "Branded Content", label: "Branded Content" },
        { value: "Business Applications", label: "Business Applications" },
        { value: "Business Automations (AI)", label: "Business Automations (AI)" },
        { value: "Cloud Communication", label: "Cloud Communication" },
        { value: "Creative Innovations", label: "Creative Innovations" },
        { value: "Ecommerce Automation", label: "Ecommerce Automation" },
        { value: "Impact / Awareness Campaigns", label: "Impact / Awareness Campaigns" },
        { value: "Lead Management System", label: "Lead Management System" },
        { value: "Marketing Automation", label: "Marketing Automation" },
        { value: "Mobile Apps", label: "Mobile Apps" },
        { value: "Online Reputation Management", label: "Online Reputation Management" },
        { value: "Performance Marketing", label: "Performance Marketing" },
        { value: "Search Engine Optimization (SEO)", label: "Search Engine Optimization (SEO)" },
        { value: "Social Media Management (SMM)", label: "Social Media Management (SMM)" },
        { value: "User/Customer Experience Design", label: "User/Customer Experience Design" },
        { value: "Web Development/DevOps", label: "Web Development/DevOps" }
    ];

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms(prev => ({ ...prev, [name]: value }));

        if (validator.allValid()) validator.hideMessages();
        else validator.showMessages();
    };

    const handleServiceChange = selectedOptions => {
        setForms(prev => ({ ...prev, services: selectedOptions || [] }));

        if (validator.allValid()) validator.hideMessages();
        else validator.showMessages();
    };

    const submitHandler = e => {
        e.preventDefault();

        if (validator.allValid()) {
            validator.hideMessages();
            const submissionData = {
                ...forms,
                services: forms.services.map(option => option.value)
            };

            console.log('Form submitted:', submissionData);

            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                company: '',
                message: '',
                services: []
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text1">Full Name<span className="required-label">*</span></label>
                        <div className="input-box">
                            <input
                                type="text"
                                name="name"
                                value={forms.name}
                                onChange={changeHandler}
                                onBlur={changeHandler}
                                className="form-control"
                            />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text2">Email<span className="required-label">*</span></label>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                value={forms.email}
                                onChange={changeHandler}
                                onBlur={changeHandler}
                                className="form-control"
                            />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field">
                        <label htmlFor="text3">Phone<span className="required-label">*</span></label>
                        <div className="input-box">
                            <input
                                type="tel"
                                name="phone"
                                value={forms.phone}
                                onChange={changeHandler}
                                onBlur={changeHandler}
                                className="form-control"
                            />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field">
                        <label htmlFor="text4">Service(s) Interested In<span className="required-label">*</span></label>
                        <div className="input-box" style={{ position: 'relative', zIndex: 2 }}>
                            <Select
                                isMulti
                                name="services"
                                options={serviceOptions}
                                value={forms.services}
                                onChange={handleServiceChange}
                                classNamePrefix="select"
                                placeholder="Select services..."
                            />
                            {validator.message('services', forms.services.length ? 'ok' : '', 'required')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <label htmlFor="text5">Message</label>
                        <div className="input-box">
                            <textarea
                                name="message"
                                value={forms.message}
                                onChange={changeHandler}
                                onBlur={changeHandler}
                                className="form-control"
                                placeholder="How can we help you?"
                                style={{ position: 'relative', zIndex: 0 }}
                            />
                            {validator.message('message', forms.message, 'required')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cp-det-btn mt-20 d-grid">
                <button type="submit" className="cp-btn">
                    Send us a message <i className="fal fa-arrow-right"></i>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
