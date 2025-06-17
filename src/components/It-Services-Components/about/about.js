import React, { useState } from 'react';
import about1 from '../../../images/about/img-01.png';
import about2 from '../../../images/about/img-02.png';
import about3 from '../../../images/about/img-03.png';
import aIcon1 from '../../../images/icon/about-icon01.png';
import aIcon2 from '../../../images/icon/about-icon02.png';
import aIcon3 from '../../../images/icon/about-icon03.png';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const aboutItems = [
    {
      img: about1,
      icon: aIcon1,
      heading: 'About us',
      content:
        'F6 IT Services empowers businesses with innovative, scalable digital solutions tailored for modern growth. We blend technology, creativity, and strategy to streamline operations, enhance customer experiences, and drive measurable impact across industries.',
    },
    {
      img: about2,
      icon: aIcon2,
      heading: 'Our mission',
      content:
        'To deliver innovative digital solutions that drive business growth, enhance operational efficiency, and ensure long-term competitiveness. We are committed to scalable technology, seamless automation, and exceptional client support.',
    },
    {
      img: about3,
      icon: aIcon3,
      heading: 'Our vision',
      content:
        'Our vision is to empower businesses through innovative digital solutions that drive growth, streamline operations, and ensure long-term success. We deliver scalable, future-ready technology to keep you competitive in a rapidly evolving digital world.',
    },
  ];

  return (
    <section className="about pb-100">
      <div className="container">
        <div className="about-wrap mt-none-30 ul_li_between">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`about-item mt-30 xb-mouseenter wow fadeInUp ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div>
                <div className="xb-item--img">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="xb-item--heading">
                  <span>
                    <img src={item.icon} alt="" />
                  </span>
                  {item.heading}
                </h3>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <span>
                      <img src={item.icon} alt="" />
                    </span>
                    {item.heading}
                  </h3>
                  <p className="xb-item--content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
