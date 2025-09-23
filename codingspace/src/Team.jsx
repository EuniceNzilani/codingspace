import React from "react";

// Import profile images from the specified locations
import directorImg from "./assets/Group 29.png";
import frontendImg from "./assets/Mask group.png";
import designerImg from "./assets/Mask group1.png";
import backendImg from "./assets/Mask group2.png";

// Social SVG icons
const instagram = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#170961" strokeWidth="2"/><rect x="7" y="7" width="8" height="8" rx="4" stroke="#170961" strokeWidth="2"/><circle cx="15.5" cy="6.5" r="1" fill="#170961"/></svg>
);
const facebook = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#170961" strokeWidth="2"/><path d="M13 11h2V9h-2V8c0-.5.2-.8.8-.8H15V6.2c-.3-.1-.7-.2-1.2-.2C11.4 6 11 6.7 11 7.7V9H9v2h2v5h2v-5z" fill="#170961"/></svg>
);
const linkedin = (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#170961" strokeWidth="2"/><rect x="7" y="9" width="2" height="6" fill="#170961"/><rect x="11" y="12" width="2" height="3" fill="#170961"/><circle cx="8" cy="7" r="1" fill="#170961"/></svg>
);

export default function Team() {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "'Inter', Arial, sans-serif",
        width: "100vw",
        overflowX: "hidden"
      }}
    >
      <main
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: "48px 10px 30px 10px", // Reduced left and right padding
        }}
      >
        {/* Title and subtitle */}
        <h1
          style={{
            color: "#170961",
            fontWeight: 900,
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontSize: "2.7rem",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Meet Our Team
        </h1>
        <div
          style={{
            fontSize: "1.18rem",
            color: "#242424",
            textAlign: "center",
            marginBottom: "38px",
          }}
        >
          We are builders, dreamers, and mentors.
        </div>
        {/* Director row */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "52px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={directorImg}
              alt="Director"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 4px 24px rgba(36,36,36,0.10)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                color: "#170961",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "10px",
                padding: "4px 16px",
                boxShadow: "0 2px 10px rgba(36,36,36,0.06)",
              }}
            >
              Director & Founder
            </div>
          </div>
          <div style={{ maxWidth: "400px" }}>
            <div
              style={{
                color: "#170961",
                fontWeight: 700,
                fontSize: "1.45rem",
                marginBottom: "9px",
              }}
            >
              Anakhe Ajayi
            </div>
            <div
              style={{
                color: "#242424",
                fontSize: "1.05rem",
                marginBottom: "18px",
                lineHeight: "1.7",
              }}
            >
              Director of CodingPlayGround Technologies, I'm passionate about transforming ideas into scalable tech solutions. With experience in software development, product management, and startup consulting, I've led projects that bridge innovation and impact. At CodingPlayGround, my mission is to empower businesses and train the next generation of tech experts.
            </div>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "13px" }}>
              <a href="#" style={{ color: "#170961" }}>{instagram}</a>
              <a href="#" style={{ color: "#170961" }}>{facebook}</a>
              <a href="#" style={{ color: "#170961" }}>{linkedin}</a>
            </div>
          </div>
        </div>
        {/* Team grid */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {/* Frontend Developer */}
          <div style={{ textAlign: "center", width: "200px" }}>
            <img
              src={frontendImg}
              alt="Frontend Developer"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 14px rgba(36,36,36,0.10)",
              }}
            />
            <div
              style={{
                color: "#170961",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginTop: "13px",
              }}
            >
              Eunice Nzilani
            </div>
            <div
              style={{
                color: "#242424",
                fontSize: "1rem",
                marginTop: "2px",
              }}
            >
              Lead Frontend Developer
            </div>
          </div>
          {/* Designer */}
          <div style={{ textAlign: "center", width: "200px" }}>
            <img
              src={designerImg}
              alt="UI/UX Designer"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 14px rgba(36,36,36,0.10)",
              }}
            />
            <div
              style={{
                color: "#170961",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginTop: "13px",
              }}
            >
              Mariam Tajudeen
            </div>
            <div
              style={{
                color: "#242424",
                fontSize: "1rem",
                marginTop: "2px",
              }}
            >
              Lead UI/UX Designer
            </div>
          </div>
          {/* Backend Developer */}
          <div style={{ textAlign: "center", width: "200px" }}>
            <img
              src={backendImg}
              alt="Backend Developer"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 14px rgba(36,36,36,0.10)",
              }}
            />
            <div
              style={{
                color: "#170961",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginTop: "13px",
              }}
            >
              Ayojime Akosi
            </div>
            <div
              style={{
                color: "#242424",
                fontSize: "1rem",
                marginTop: "2px",
              }}
            >
              Lead Backend Developer
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}