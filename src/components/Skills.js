import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "MERN Stack", level: 100 },
    { name: "Git & GitHub", level: 95 },
    { name: "C Programming", level: 95 },
    { name: "Java", level: 80 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 60 },
    { name: "MS Excel", level: 100 },
    { name: "SQL", level: 90 },
    { name: "Tableau", level: 90 },
    { name: "PowerBI", level: 95 },
    { name: "R Programming", level: 90 },
  ];

  return (
    <section className="skill text-white py-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-3xl font-bold mb-3">My Skills</h2>
              <p className="mb-4">These are my top technical and creative skills with visual proficiency.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item text-center p-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div style={{ width: 120, height: 120, margin: "0 auto" }}>
                      <svg style={{ height: 0 }}>
                        <defs>
                          <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a64bf4" />
                            <stop offset="100%" stopColor="#00c6ff" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <CircularProgressbar
                        value={skill.level}
                        text={`${skill.level}%`}
                        styles={buildStyles({
                          pathColor: `url(#gradient${index})`,
                          trailColor: "#222",
                          textColor: "#fff",
                          textSize: "16px"
                        })}
                      />
                    </div>
                    <h5 className="mt-3">{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
