import React from "react";
import group39 from "./assets/Group 39.png";

export default function ProductServices() {
  // Reduce box size by another 10px, so total -20px
  const cardWidth = 240; // px
  const cardHeight = 230; // px

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "'Inter', Arial, sans-serif",
        boxSizing: "border-box",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 8px 40px 8px",
          position: "relative",
        }}
      >
        {/* Title */}
        <h1
          style={{
            color: "#170961",
            fontWeight: 900,
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontSize: "2.7rem",
            textAlign: "center",
            marginBottom: "18px",
          }}
        >
          Product & Services
        </h1>
        <div
          style={{
            fontSize: "1.18rem",
            color: "#242424",
            textAlign: "center",
            marginBottom: "38px",
          }}
        >
          We offer varieties of products and services in our Software<br />
          development company
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "56px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          {/* Software Development */}
          <div
            style={{
              flex: `0 0 ${cardWidth}px`,
              minWidth: `${cardWidth}px`,
              maxWidth: `${cardWidth}px`,
              height: `${cardHeight}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#170961",
                border: "2px solid #170961",
                borderRadius: "9px 9px 0 0",
                background: "#fff",
                padding: "3px 0",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Montserrat', Arial, sans-serif",
                marginBottom: 0,
              }}
            >
              Software Development
            </div>
            <div
              style={{
                background: "#D3CCE6",
                borderRadius: "0 0 15px 15px",
                padding: "10px 10px 8px 10px", // reduced top padding
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                textAlign: "center",
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // content starts at top
              }}
            >
              <div style={{ color: "#242424", fontSize: "0.83rem", lineHeight: "1.9" }}>
                Web Development<br />
                Mobile Apps (iOS & Android)<br />
                UI/UX Design<br />
                Product Management & Maintenance
              </div>
            </div>
          </div>
          {/* Tech Academy */}
          <div
            style={{
              flex: `0 0 ${cardWidth}px`,
              minWidth: `${cardWidth}px`,
              maxWidth: `${cardWidth}px`,
              height: `${cardHeight}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#170961",
                border: "2px solid #170961",
                borderRadius: "9px 9px 0 0",
                background: "#fff",
                padding: "3px 0",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Montserrat', Arial, sans-serif",
                marginBottom: 0,
              }}
            >
              Tech Academy
            </div>
            <div
              style={{
                background: "#D3CCE6",
                borderRadius: "0 0 15px 15px",
                padding: "10px 10px 8px 10px", // reduced top padding
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                textAlign: "center",
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ color: "#242424", fontSize: "0.83rem", lineHeight: "1.9" }}>
                Beginner to expert coding programs<br />
                No-code Tools & AI Integration<br />
                Mentorship + Hands-On Projects<br />
                Internship & Job placement Support
              </div>
            </div>
          </div>
          {/* Innovation Hub */}
          <div
            style={{
              flex: `0 0 ${cardWidth}px`,
              minWidth: `${cardWidth}px`,
              maxWidth: `${cardWidth}px`,
              height: `${cardHeight}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#170961",
                border: "2px solid #170961",
                borderRadius: "9px 9px 0 0",
                background: "#fff",
                padding: "3px 0",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Montserrat', Arial, sans-serif",
                marginBottom: 0,
              }}
            >
              Innovation Hub
            </div>
            <div
              style={{
                background: "#D3CCE6",
                borderRadius: "0 0 15px 15px",
                padding: "10px 10px 8px 10px", // reduced top padding
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                textAlign: "center",
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ color: "#242424", fontSize: "0.83rem", lineHeight: "1.9" }}>
                Start-Up Consultation<br />
                MVP(Minimum Viable Product) Building<br />
                Growth & Scaling Support
              </div>
            </div>
          </div>
        </div>

        {/* Special Programs Section */}
        <div style={{ marginTop: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            {/* Text */}
            <div style={{ flex: "1 1 370px", minWidth: "320px" }}>
              <h2
                style={{
                  color: "#170961",
                  fontWeight: 700,
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: "1.5rem",
                  marginBottom: "16px",
                }}
              >
                Special Programs
              </h2>
              <div style={{ color: "#242424", fontSize: "1.08rem", lineHeight: "1.7" }}>
                We also extend our training to schools through our Coding & Robotics for Schools program. Introducing primary and secondary students to coding, robotics, and problem-solving early. If you’re a school administrator or teacher reach out to us let's work together.
              </div>
            </div>
            {/* Single Image */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "440px",
                flex: "1 1 340px",
                alignSelf: "flex-start",
                marginTop: "0px",
                paddingTop: "0px",
              }}
            >
              <img
                src={group39}
                alt="Coding and robotics"
                style={{
                  width: "100%",
                  height: "310px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 2px 12px rgba(36,36,36,0.08)",
                  marginTop: "0px",
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}