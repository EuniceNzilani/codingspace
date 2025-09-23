import React from "react";
import group27 from "./assets/Group 27.png"; // Ensure this path is correct and the image exists

// SVG icons for roles (minimal examples, you can replace with full SVGs or use icon libraries)
const roleIcons = {
  fullstack: (
    <svg height="32" width="32" viewBox="0 0 32 32"><text x="9" y="22" fontSize="20" fill="#170961">&lt;/&gt;</text></svg>
  ),
  mobile: (
    <svg width="32" height="32" viewBox="0 0 32 32"><rect x="8" y="4" width="16" height="24" rx="4" fill="#170961"/><rect x="12" y="26" width="8" height="2" rx="1" fill="#fff"/></svg>
  ),
  backend: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#170961"/><text x="11" y="22" fontSize="11" fill="#fff">API</text></svg>
  ),
  frontend: (
    <svg width="32" height="32" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="3" fill="#170961"/><rect x="12" y="24" width="8" height="2" rx="1" fill="#fff"/></svg>
  ),
  security: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#170961"/><rect x="13" y="13" width="6" height="8" rx="2" fill="#fff"/></svg>
  ),
  devops: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#170961"/><text x="9" y="22" fontSize="14" fill="#fff">Dev</text></svg>
  ),
  uiux: (
    <svg width="32" height="32" viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="16" rx="3" fill="#170961"/><circle cx="16" cy="16" r="4" fill="#fff"/></svg>
  ),
  nocode: (
    <svg width="32" height="32" viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="16" rx="3" fill="#170961"/><text x="10" y="22" fontSize="12" fill="#fff">No</text></svg>
  ),
  pm: (
    <svg width="32" height="32" viewBox="0 0 32 32"><rect x="8" y="10" width="16" height="12" rx="2" fill="#170961"/><rect x="14" y="22" width="4" height="2" rx="1" fill="#fff"/></svg>
  ),
  marketing: (
    <svg width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="12" ry="8" fill="#170961"/><text x="11" y="21" fontSize="12" fill="#fff">DM</text></svg>
  ),
  video: (
    <svg width="32" height="32" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="2" fill="#170961"/><polygon points="15,13 22,16 15,19" fill="#fff"/></svg>
  ),
  va: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#170961"/><text x="10" y="22" fontSize="12" fill="#fff">VA</text></svg>
  ),
};

// Icons for languages/tools (SVGs or image links; you can replace these with your own or use SVGs from public sources)
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
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  webflow: "https://assets-global.website-files.com/5f7f5ee8685a125c3b6d2b53/5f7f5ee8685a12fdf46d2d56_webflow-logo.png",
  bubble: "https://upload.wikimedia.org/wikipedia/commons/4/47/Bubble_Logo.png",
  zapier: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zapier_logo.png",
};

// Role data
const roles = [
  { title: "Full Stack Developer", icon: roleIcons.fullstack },
  { title: "Mobile App Developer", icon: roleIcons.mobile },
  { title: "Backend Engineer", icon: roleIcons.backend },
  { title: "Frontend Engineer", icon: roleIcons.frontend },
  { title: "Cyber Security Expert", icon: roleIcons.security },
  { title: "DevOps Engineer", icon: roleIcons.devops },
  { title: "UI/UX Designer", icon: roleIcons.uiux },
  { title: "No-Code Developer", icon: roleIcons.nocode },
  { title: "Product Manager", icon: roleIcons.pm },
  { title: "Digital Marketing", icon: roleIcons.marketing },
  { title: "Video Editing", icon: roleIcons.video },
  { title: "Virtual Assistant", icon: roleIcons.va },
];

// Skills data
const skills = [
  "Problem Solving & Logic Building",
  "System Design & Architecture",
  "Team Collaboration & Agile Development",
  "Resume Crafting & Career Prep",
];

// Languages and tools data
const tools = [
  { name: "HTML", icon: toolIcons.html },
  { name: "CSS", icon: toolIcons.css },
  { name: "JavaScript", icon: toolIcons.js },
  { name: "React", icon: toolIcons.react },
  { name: "Angular", icon: toolIcons.angular },
  { name: "Vue", icon: toolIcons.vue },
  { name: "Node JS", icon: toolIcons.node },
  { name: "Express", icon: toolIcons.express },
  { name: "Python", icon: toolIcons.python },
  { name: "Django", icon: toolIcons.django },
  { name: "Flask", icon: toolIcons.flask },
  { name: "Java", icon: toolIcons.java },
  { name: "Spring Boot", icon: toolIcons.spring },
  { name: "C#", icon: toolIcons.csharp },
  { name: ".Net", icon: toolIcons.dotnet },
  { name: "SQL", icon: toolIcons.sql },
  { name: "PostgreSQL", icon: toolIcons.postgres },
  { name: "MongoDB", icon: toolIcons.mongodb },
  { name: "Git", icon: toolIcons.git },
  { name: "GitHub", icon: toolIcons.github },
  { name: "Rust", icon: toolIcons.rust },
  { name: "GO", icon: toolIcons.go },
];

// No-code tools data
const nocode = [
  { name: "Webflow", icon: toolIcons.webflow },
  { name: "Bubble", icon: toolIcons.bubble },
  { name: "Zapier", icon: toolIcons.zapier },
];

export default function TrainingPrograms() {
  return (
    <div style={{ background: "#E7E4F5", minHeight: "100vh", fontFamily: "'Inter', Arial, sans-serif", overflowX: "hidden" }}>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 0 20px", position: "relative" }}>
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
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>Roles we train for</span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "22px",
            marginBottom: "40px"
          }}>
            {roles.map((role, idx) => (
              <div key={role.title}
                style={{
                  background: idx % 2 === 1 ? "#D3CCE6" : "#fff",
                  borderRadius: "15px",
                  boxShadow: "0 4px 16px rgba(36,36,36,0.08)",
                  padding: "32px 8px 24px 8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: 500,
                  fontSize: "1.08rem",
                  color: "#170961"
                }}>
                <div style={{ marginBottom: "12px" }}>{role.icon}</div>
                {role.title}
              </div>
            ))}
          </div>
        </section>
        {/* Arrow to scroll down at bottom right of roles */}
        <div style={{
          position: "absolute",
          right: "10px",
          top: "520px",
          zIndex: 1
        }}>
          <img src={group27} alt="Scroll Down" style={{ width: "38px", height: "38px" }} />
        </div>
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
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>Skills you will learn</span>
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
          {/* Only ONE image as requested */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "370px"
          }}>
            <img src={group27} alt="Skill" style={{
              width: "100%", height: "140px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 2px 12px rgba(36,36,36,0.08)"
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
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>Languages and Tools</span>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "22px",
            marginBottom: "18px"
          }}>
            {tools.map(tool => (
              <div key={tool.name}
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
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
                <img src={tool.icon} alt={tool.name} style={{ width: "38px", height: "38px", marginBottom: "8px" }} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
          {/* Certificate badge */}
          <div style={{
            position: "absolute",
            right: "54px",
            top: "840px",
            background: "#170961",
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "50%",
            width: "180px",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            boxShadow: "0 2px 12px rgba(36,36,36,0.10)"
          }}>
            Certificate<br />+<br />Internship Placement<br />Guaranteed
          </div>
        </section>
        {/* No-Code Tools */}
        <section style={{ marginTop: "38px" }}>
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
            {nocode.map(tool => (
              <div key={tool.name}
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 12px rgba(36,36,36,0.08)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#170961"
                }}>
                <img src={tool.icon} alt={tool.name} style={{ width: "38px", height: "38px", marginBottom: "8px" }} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Start Your Journey Today */}
        <section style={{ margin: "60px 0 40px" }}>
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
            background: "#170961",
            color: "#fff",
            border: "none",
            borderRadius: "15px",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "16px 38px",
            boxShadow: "0 4px 16px rgba(23,9,97,0.11)",
            cursor: "pointer",
            transition: "background 0.2s",
            marginRight: "32px"
          }}>
            Apply Now
          </button>
          <span style={{
            color: "#242424",
            fontSize: "1rem",
            marginLeft: "32px"
          }}>
            Back to the top
          </span>
        </section>
      </main>
    </div>
  );
}