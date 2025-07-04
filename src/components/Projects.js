import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import achvImg1 from "../assets/img/cfg1.jpg";
import achvImg2 from "../assets/img/cfg2.jpg";
import certImg1 from "../assets/img/cert1.png";
import certImg2 from "../assets/img/cert2.png";
import certImg3 from "../assets/img/cert3.png";
import certImg4 from "../assets/img/cert4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience with smooth animations and responsive design.",
      techStack: ["React", "AOS", "Bootstrap", "React Icons"],
      githubUrl: "https://github.com/Yamuna23071A6730/Portfolio",
    },
    {
      title: "Blog Platform (MERN Stack)",
      description: "Developed a dynamic blog platform with user authentication, post CRUD operations, and RESTful API integration to practice full-stack development.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Git"],
      githubUrl: "#",
    },
    {
      title: "Mini Traveller – No-Code Chatbot",
      description: "Created a no-code chatbot for budget-conscious travelers to explore Indian destinations with tips and hacks. Built using Jotform as a beginner project.",
      techStack: ["Jotform", "No-Code Tools", "Udemy"],
      githubUrl: "#",
    },
    {
      title: "Risk Analysis – Home Credit Default",
      description: "Built a predictive model using machine learning to assess likelihood of loan default. Performed financial and behavioral analysis with visual insights.",
      techStack: ["Python", "Scikit-learn", "Tableau"],
      githubUrl: "#",
    }
  ];

  const achievements = [
    {
      imgUrl: achvImg1,
      title: "JPMC Code for Good 2025 - Finalist",
      description: "Selected among top 50 teams nationwide to develop tech solutions for non-profit organizations."
    },
    {
      imgUrl: achvImg2,
      title: "Hackathon Winner - Devthon 2024",
      description: "Won 1st place in a 24-hour hackathon by building an AI-powered accessibility tool for visually impaired users."
    },
    {
      imgUrl: "https://via.placeholder.com/400x220/2c3e50/ffffff?text=Open+Source",
      title: "Open Source Contributor",
      description: "Active contributor to open-source projects with 50+ commits and 10+ pull requests merged."
    }
  ];

  const certifications = [
    { title: "Excel: Advanced Formulas and Functions", date: "February 2025", imgUrl: certImg1 },
    { title: "Programming Fundamentals using Python, R", date: "November 2024", imgUrl: certImg2 },
    { title: "Tableau Training – Simpli Learn", date: "April 2024", imgUrl: certImg3 },
    { title: "No-code chatbot course – Udemy", date: "April 2025", imgUrl: certImg4 }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Highlights</h2>
                <p>A summary of key certifications, technical projects, and accolades demonstrating my skills, experience, and dedication.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {certifications.map((cert, index) => (
                          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                            <div className="certificate-card bg-white rounded shadow-sm h-100 overflow-hidden">
                              <div className="certificate-img" style={{ height: '180px' }}>
                                <img src={cert.imgUrl} alt={cert.title} className="w-100 h-100 object-fit-cover" />
                              </div>
                              <div className="p-3">
                                <h5 className="mb-2 fw-bold">{cert.title}</h5>
                                <span className="badge bg-secondary">{cert.date}</span>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row className="g-4">
                        {projects.map((project, index) => (
                          <Col key={index} sm={12} md={6} lg={6}>
                            <div className="project-card bg-white rounded shadow-sm p-4 h-100 d-flex flex-column">
                              <h3 className="h5 fw-bold mb-2">{project.title}</h3>
                              <p className="text-muted mb-3">{project.description}</p>
                              <div className="mb-3">
                                {project.techStack.map((tech, i) => (
                                  <span key={i} className="badge bg-light text-dark me-2 mb-2">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-auto">
                                <a href={project.githubUrl} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noreferrer">
                                  <i className="fab fa-github me-1"></i> View Code
                                </a>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row className="g-4">
                        {achievements.map((achv, index) => (
                          <Col key={index} sm={12} md={6} lg={4}>
                            <div className="achievement-card h-100 d-flex flex-column rounded-4 overflow-hidden shadow-sm border-0 bg-white">
                              <div className="achievement-img overflow-hidden" style={{ height: '180px' }}>
                                <img 
                                  src={achv.imgUrl} 
                                  alt={achv.title} 
                                  className="w-100 h-100 object-fit-cover"
                                />
                              </div>
                              <div className="achievement-content p-4 d-flex flex-column flex-grow-1">
                                <h3 className="h5 fw-bold mb-2">{achv.title}</h3>
                                <p className="text-muted mb-0">{achv.description}</p>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};