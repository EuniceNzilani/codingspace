import React from "react";
import group27 from "./assets/Group 27.png";
import webflowIcon from "./assets/image 10.png";
import bubbleIcon from "./assets/image 11.png";
import zapierIcon from "./assets/image 12.png";
import certificateCircle from "./assets/Star 1.png";

// Role icon imports
import fullstackIcon from "./assets/Layer_1.png";
import mobileIcon from "./assets/Frame.png";
import backendIcon from "./assets/layer2.png";
import frontendIcon from "./assets/svg8.png";
import securityIcon from "./assets/Icons.png";
import devopsIcon from "./assets/devops.png";
import uiuxIcon from "./assets/uiux.png";
import nocodeIcon from "./assets/no code.png";
import productManagerIcon from "./assets/product manager.png";
import marketingIcon from "./assets/digital marketing.png";
import videoEditingIcon from "./assets/video editing.png";
import virtualAssistantIcon from "./assets/virtual assistant.png";
import arrowIcon from "./assets/arrow.png";

// SVG icons for roles replaced with image imports
const roleIcons = {
  fullstack: <img src={fullstackIcon} alt="Full Stack Developer" style={{ width: 38, height: 38 }} />,
  mobile: <img src={mobileIcon} alt="Mobile App Developer" style={{ width: 38, height: 38 }} />,
  backend: <img src={backendIcon} alt="Backend Engineer" style={{ width: 38, height: 38 }} />,
  frontend: <img src={frontendIcon} alt="Frontend Engineer" style={{ width: 38, height: 38 }} />,
  security: <img src={securityIcon} alt="Cyber Security Expert" style={{ width: 38, height: 38 }} />,
  devops: <img src={devopsIcon} alt="DevOps Engineer" style={{ width: 38, height: 38 }} />,
  uiux: <img src={uiuxIcon} alt="UI/UX Designer" style={{ width: 38, height: 38 }} />,
  nocode: <img src={nocodeIcon} alt="No-Code Developer" style={{ width: 38, height: 38 }} />,
  pm: <img src={productManagerIcon} alt="Product Manager" style={{ width: 38, height: 38 }} />,
  marketing: <img src={marketingIcon} alt="Digital Marketing" style={{ width: 38, height: 38 }} />,
  video: <img src={videoEditingIcon} alt="Video Editing" style={{ width: 38, height: 38 }} />,
  va: <img src={virtualAssistantIcon} alt="Virtual Assistant" style={{ width: 38, height: 38 }} />,
};

const rolesGrid = [
  [
    { title: "Full Stack Developer", icon: roleIcons.fullstack, highlight: false },
    { title: "Mobile App Developer", icon: roleIcons.mobile, highlight: true },
    { title: "Backend Engineer", icon: roleIcons.backend, highlight: false },
    { title: "Frontend Engineer", icon: roleIcons.frontend, highlight: true },
  ],
  [
    { title: "Cyber Security Expert", icon: roleIcons.security, highlight: true },
    { title: "DevOps Engineer", icon: roleIcons.devops, highlight: false },
    { title: "UI/UX Designer", icon: roleIcons.uiux, highlight: true },
    { title: "No-Code Developer", icon: roleIcons.nocode, highlight: false },
  ],
  [
    { title: "Product Manager", icon: roleIcons.pm, highlight: false },
    { title: "Digital Marketing", icon: roleIcons.marketing, highlight: true },
    { title: "Video Editing", icon: roleIcons.video, highlight: false },
    { title: "Virtual Assistant", icon: roleIcons.va, highlight: true },
  ]
];

const skills = [
  "Problem Solving & Logic Building",
  "System Design & Architecture",
  "Team Collaboration & Agile Development",
  "Resume Crafting & Career Prep",
];

const toolIcons = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  csharp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  dotnet: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
};

const toolsGrid = [
  [
    { name: "HTML", icon: toolIcons.html },
    { name: "CSS", icon: toolIcons.css },
    { name: "JavaScript", icon: toolIcons.js },
    { name: "React", icon: toolIcons.react },
    { name: "Angular", icon: toolIcons.angular },
    { name: "Vue", icon: toolIcons.vue }
  ],
  [
    { name: "Node JS", icon: toolIcons.node },
    { name: "Express", icon: toolIcons.express },
    { name: "Python", icon: toolIcons.python },
    { name: "Django", icon: toolIcons.django },
    { name: "Flask", icon: toolIcons.flask },
    { name: "Java", icon: toolIcons.java }
  ],
  [
    { name: "Spring Boot", icon: toolIcons.spring },
    { name: "C#", icon: toolIcons.csharp },
    { name: ".Net", icon: toolIcons.dotnet },
    { name: "SQL", icon: toolIcons.sql },
    { name: "PostgreSQL", icon: toolIcons.postgres },
    { name: "MongoDB", icon: toolIcons.mongodb }
  ],
  [
    { name: "Git", icon: toolIcons.git },
    { name: "GitHub", icon: toolIcons.github },
    { name: "Rust", icon: toolIcons.rust },
    { name: "GO", icon: toolIcons.go }
  ]
];

const nocode = [
  { name: "Webflow", icon: webflowIcon },
  { name: "Bubble", icon: bubbleIcon },
  { name: "Zapier", icon: zapierIcon },
];

export default function TrainingPrograms() {
  return (
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "'Inter', Arial, sans-serif",
      overflowX: "hidden",
      width: "100vw"
    }}>
      <main style={{
        maxWidth: "1220px",
        margin: "0 auto",
        padding: "40px 48px 20px 48px",
        position: "relative",
        boxSizing: "border-box"
      }}>
        {/* Page Title */}
        <h1 style={{
          color: "#170961",
          fontWeight: 900,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: "2.7rem",
          textAlign: "center",
          marginBottom: "18px"
        }}>
          Training Programs
        </h1>
        {/* Subtitle */}
        <div style={{
          fontSize: "1.18rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "38px"
        }}>
          Our Software development company offers training programs for future developers, Certificate & Internship Placement is guaranteed
        </div>
        {/* Roles grid */}
        <section>
          <div style={{
            color: "#170961",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: "18px"
          }}>
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>Roles</span> we train for
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "22px",
            marginBottom: "40px"
          }}>
            {rolesGrid.flat().map((role, idx) => (
              <div
                key={role.title}
                style={{
                  background: role.highlight ? "#E7E7FA" : "#fff",
                  borderRadius: "15px",
                  boxShadow: "0 4px 16px rgba(36,36,36,0.08)",
                  padding: "32px 8px 24px 8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: "1.08rem",
                  color: "#170961",
                  minWidth: 0,
                  border: "1px solid #ECECEC",
                  position: "relative"
                }}>
                <div style={{ marginBottom: "12px" }}>{role.icon}</div>
                {role.title}
                {/* Arrow icon to the right of Virtual Assistant */}
                {role.title === "Virtual Assistant" && (
                  <img src={arrowIcon} alt="Arrow" style={{
                    position: "absolute",
                    right: "-50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "38px",
                    height: "38px"
                  }} />
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Skills you will learn section */}
        <section style={{
          display: "flex",
          gap: "32px",
          marginBottom: "40px",
          alignItems: "flex-start"
        }}>
          <div style={{ flex: "1 1 340px" }}>
            <div style={{
              color: "#170961",
              fontWeight: 700,
              fontSize: "1.3rem",
              marginBottom: "18px"
            }}>
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>Skills</span> you will learn
            </div>
            <ul style={{ fontSize: "1.08rem", color: "#242424", marginBottom: 0, paddingLeft: 0, listStyle: "none" }}>
              {skills.map(skill => (
                <li key={skill} style={{ marginBottom: "14px", display: "flex", alignItems: "center" }}>
                  <span style={{
                    color: "#170961",
                    fontWeight: 700,
                    marginRight: "13px",
                    fontSize: "1.2rem"
                  }}>✔</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          {/* Larger image, no certificate circle */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "500px"
          }}>
            <img src={group27} alt="Skill" style={{
              width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 2px 12px rgba(36,36,36,0.08)"
            }} />
          </div>
        </section>
        {/* Languages and Tools */}
        <section>
          <div style={{
            color: "#170961",
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: "18px"
          }}>
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>Languages</span> and Tools
          </div>
          {/* REDUCED SIDE PADDING: Container is now wider and grid is nearly full width */}
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "18px",
            alignItems: "center",
          }}>
            {toolsGrid.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${row.length}, 110px)`,
                  gap: "18px",
                  justifyContent: "center",
                  width: "calc(110px * " + row.length + " + 18px * " + (row.length - 1) + ")",
                  maxWidth: "100vw"
                }}
              >
                {row.map(tool => (
                  <div key={tool.name}
                    style={{
                      background: "#fff",
                      borderRadius: "50%",
                      width: "110px",
                      height: "110px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 12px rgba(36,36,36,0.08)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#170961",
                      marginBottom: "9px"
                    }}>
                    <img src={tool.icon} alt={tool.name} style={{ width: "48px", height: "48px", marginBottom: "8px" }} />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
        {/* --- END OF FILE AS PER LATEST LAYOUT --- */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "38px",
          marginBottom: "0",
          minHeight: "300px"
        }}>
          {/* No-Code Tools Section */}
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              color: "#170961",
              fontWeight: 700,
              fontSize: "1.3rem",
              marginBottom: "18px"
            }}>
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>No-Code Tools</span>
            </div>
            <div style={{
              display: "flex",
              gap: "22px",
              marginBottom: "38px"
            }}>
              {nocode.map((tool) => (
                <div key={tool.name}
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    width: "110px",
                    height: "110px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 12px rgba(36,36,36,0.08)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#170961"
                  }}>
                  <img src={tool.icon} alt={tool.name} style={{
                    width: "48px",
                    height: "48px",
                    marginBottom: "8px",
                    objectFit: "contain"
                  }} />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
            {/* Start Your Journey Today and Apply Now BELOW the icons */}
            <div style={{
              margin: "0 auto",
              maxWidth: "350px",
              marginTop: "20px"
            }}>
              <h2 style={{
                color: "#170961",
                fontWeight: 700,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "2rem",
                marginBottom: "14px"
              }}>
                Start Your<br />Journey Today!
              </h2>
              <div style={{
                color: "#242424",
                fontSize: "1.08rem",
                marginBottom: "22px"
              }}>
                Apply now to kickstart your career with CodingPlayground Technology
              </div>
              <button style={{
                background: "#1A1064",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: 500,
                padding: "16px 48px",
                boxShadow: "0 4px 16px rgba(23,9,97,0.11)",
                cursor: "pointer",
                transition: "background 0.2s",
                marginBottom: "8px"
              }}>
                Apply Now
              </button>
              <span style={{
                color: "#242424",
                fontSize: "1rem",
                marginLeft: "8px"
              }}>
                Back to the top
              </span>
            </div>
          </div>
          {/* Certificate Badge Section */}
          <div style={{
            flex: "0 0 320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            minWidth: "240px",
            position: "relative"
          }}>
            <div style={{ position: "relative", width: "210px", height: "210px", marginTop: "18px", marginBottom: "24px", display: "block" }}>
              <img
                src={certificateCircle}
                alt="Certificate + Internship Placement Guaranteed"
                style={{
                  width: "210px",
                  height: "210px",
                  display: "block"
                }}
              />
              <div style={{
                position: "absolute",
                top: "44px",
                left: 0,
                width: "210px",
                textAlign: "center",
                color: "#fff",
                fontWeight: 700,
                fontFamily: "'Montserrat', Arial, sans-serif",
                pointerEvents: "none"
              }}>
                <div style={{ fontSize: "22px", lineHeight: "1.1" }}>Certificate</div>
                <div style={{ fontSize: "18px", fontWeight: "bold", margin: "6px 0 4px" }}>+</div>
                <div style={{ fontSize: "17px", fontWeight: "bold", lineHeight: "1.1" }}>Internship Placement</div>
                <div style={{ fontSize: "17px", fontWeight: "bold", lineHeight: "1.1" }}>Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}