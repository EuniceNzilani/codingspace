import React from "react";
import group39 from "./assets/Group 39.png";

export default function ProductServices() {
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
          padding: "40px 20px 70px 20px",
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
            gap: "54px", // More space between boxes
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Software Development */}
          <div
            style={{
              flex: "1 1 250px",
              minWidth: "220px",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.12rem",
                color: "#170961",
                border: "2px solid #170961",
                borderRadius: "9px 9px 0 0",
                background: "#fff",
                padding: "5px 0",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Montserrat', Arial, sans-serif",
              }}
            >
              Software Development
            </div>
            <div
              style={{
                background: "#D3CCE6",
                borderRadius: "0 0 15px 15px",
                padding: "20px 15px",
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div style={{ color: "#242424", fontSize: "1rem", lineHeight: "1.75" }}>
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
              flex: "1 1 250px",
              minWidth: "220px",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.12rem",
                color: "#170961",
                border: "2px solid #170961",
                borderRadius: "9px 9px 0 0",
                background: "#fff",
                padding: "5px 0",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Montserrat', Arial, sans-serif",
              }}
            >
              Tech Academy
            </div>
            <div
              style={{
                background: "#D3CCE6",
                borderRadius: "0 0 15px 15px",
                padding: "20px 15px",
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div style={{ color: "#242424", fontSize: "1rem", lineHeight: "1.75" }}>
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
              flex: "1 1 250px",
              minWidth: "220px",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.12rem",
                color: "#170961",
                border: "2px solid #170961",
                borderRadius: "9px 9px 0 0",
                background: "#fff",
                padding: "5px 0",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                fontFamily: "'Montserrat', Arial, sans-serif",
              }}
            >
              Innovation Hub
            </div>
            <div
              style={{
                background: "#D3CCE6",
                borderRadius: "0 0 15px 15px",
                padding: "20px 15px",
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div style={{ color: "#242424", fontSize: "1rem", lineHeight: "1.75" }}>
                Start-Up Consultation<br />
                MVP(Minimum Viable Product) Building<br />
                Growth & Scaling Support
              </div>
            </div>
          </div>
        </div>

        {/* Special Programs Section */}
        <div style={{ marginTop: "44px" }}>
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
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "36px",
              flexWrap: "wrap",
            }}
          >
            {/* Text */}
            <div style={{ flex: "1 1 370px", minWidth: "320px" }}>
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
                justifyContent: "center",
                maxWidth: "220px",
                flex: "1 1 220px",
                alignSelf: "center",
              }}
            >
              <img
                src={group39}
                alt="Coding and robotics"
                style={{
                  width: "100%",
                  height: "140px",
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