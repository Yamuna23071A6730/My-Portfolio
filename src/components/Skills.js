import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "Web Development", level: 90 },
    { name: "React JS", level: 85 },
    { name: "Logo Design", level: 80 },
    { name: "Brand Identity", level: 70 }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>These are my top technical and creative skills with visual proficiency.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item text-center p-4" key={index}>
                    <div style={{ width: 120, height: 120, margin: "0 auto" }}>
                      <CircularProgressbar
                        value={skill.level}
                        text={`${skill.level}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#00c6ff",
                          trailColor: "#444",
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
