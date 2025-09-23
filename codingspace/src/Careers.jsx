import React from "react";

import weAreHiring from "./assets/image 17.png"; // Ensure this path matches your project

export default function Careers() {
  return (
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "'Inter', Arial, sans-serif",
      width: "100vw",
      overflowX: "hidden"
    }}>
      <main style={{
        maxWidth: "950px",
        margin: "0 auto",
        padding: "50px 10px 40px 10px" // Reduced left/right padding
      }}>
        {/* Title and subtitle */}
        <h1 style={{
          color: "#170961",
          fontWeight: 900,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: "2.7rem",
          textAlign: "center",
          marginBottom: "9px"
        }}>
          Careers
        </h1>
        <div style={{
          fontSize: "1.22rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "32px"
        }}>
          Join our growing team of innovators, developers, and educators.
        </div>
        {/* Description */}
        <div style={{
          color: "#242424",
          fontSize: "1.08rem",
          textAlign: "center",
          margin: "0 auto 38px",
          maxWidth: "760px",
          lineHeight: "1.7"
        }}>
          At CodingPlayGround Technologies, we’re building a culture of innovation, creativity, and impact. We welcome passionate people at all levels, including entry-level applicants eager to learn. We also offer internships for beginners looking to hone their skills and grow into professionals.
        </div>
        {/* Open roles and hiring image row */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "54px",
          justifyContent: "center",
          marginBottom: "0px", // Remove extra space below
          flexWrap: "wrap"
        }}>
          {/* Open roles box */}
          <div style={{
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
            padding: "32px 34px",
            minWidth: "320px",
            maxWidth: "370px"
          }}>
            <div style={{
              color: "#170961",
              fontWeight: 700,
              fontSize: "1.35rem",
              marginBottom: "18px"
            }}>
              <span style={{ textDecoration: "underline" }}>Current Open Roles</span>
            </div>
            <ul style={{ paddingLeft: 0, margin: 0, fontSize: "1.08rem", color: "#242424", listStyle: "none" }}>
              <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Software Engineer
              </li>
              <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Frontend/Backend Developer
              </li>
              <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Coding Instructor
              </li>
              <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Business Development Lead
              </li>
              <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Digital Marketing Specialist
              </li>
              <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Robotics Engineer (Tutor)
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>Video Editor
              </li>
            </ul>
            {/* Apply Now button directly below Video Editor */}
            <div style={{ textAlign: "center", marginTop: "24px" }}>
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
                transition: "background 0.2s"
              }}>
                Apply Now
              </button>
            </div>
          </div>
          {/* We Are Hiring Image */}
          <div>
            <img src={weAreHiring} alt="We Are Hiring" style={{ width: "230px", height: "auto", marginTop: "36px" }} />
          </div>
        </div>
      </main>
    </div>
  );
}