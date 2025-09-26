import React from "react";
import partnershipImg from "./assets/image-removebg-preview (7) 1.png"; // Ensure this path is correct

export default function Partnership() {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "'Nunito', Arial, sans-serif", // Nunito for bodies
        width: "100vw",
        overflowX: "hidden"
      }}
    >
      <main
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: "50px 10px 40px 10px", // Reduced left & right padding
        }}
      >
        {/* Title and subtitle */}
        <h1
          style={{
            color: "#170961",
            fontWeight: 900,
            fontFamily: "'Oswald', Arial, sans-serif", // Oswald for heading
            fontSize: "2.7rem",
            textAlign: "center",
            marginBottom: "9px",
          }}
        >
          Partnerships
        </h1>
        <div
          style={{
            fontSize: "1.18rem",
            color: "#242424",
            textAlign: "center",
            marginBottom: "32px",
            fontFamily: "'Nunito', Arial, sans-serif"
          }}
        >
          Great things in business are never done by one person, they're<br />
          done by a team of people
        </div>
        {/* Collaborate section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "54px",
            justifyContent: "center",
            marginBottom: "45px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                color: "#170961",
                fontWeight: 700,
                fontSize: "1.35rem",
                marginBottom: "18px",
                fontFamily: "'Oswald', Arial, sans-serif"
              }}
            >
              <span style={{ textDecoration: "underline" }}>We collaborate with:</span>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 24px rgba(36,36,36,0.07)",
                padding: "28px 30px",
                minWidth: "320px",
                maxWidth: "370px",
                fontFamily: "'Nunito', Arial, sans-serif"
              }}
            >
              <ul
                style={{
                  paddingLeft: 0,
                  margin: 0,
                  fontSize: "1.08rem",
                  color: "#242424",
                  listStyle: "none",
                  fontFamily: "'Nunito', Arial, sans-serif"
                }}
              >
                <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>
                  Startups & Entrepreneurs
                </li>
                <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>
                  Businesses seeking digital transformation
                </li>
                <li style={{ marginBottom: "13px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>
                  Schools & Institutions
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontWeight: 700, marginRight: "11px", fontSize: "1.18rem" }}>✔</span>
                  Innovation Hubs
                </li>
              </ul>
            </div>
          </div>
          {/* Partnership image */}
          <div>
            <img src={partnershipImg} alt="Partnerships" style={{ width: "230px", height: "auto", marginTop: "16px" }} />
          </div>
        </div>
        {/* Contact section */}
        <div style={{ fontSize: "1.08rem", color: "#242424", textAlign: "left", marginBottom: "16px", fontFamily: "'Nunito', Arial, sans-serif" }}>
          If you are interested in collaborating with Us, send us an email to:
        </div>
        <a
          href="mailto:careers@codingplayground.tech"
          style={{
            color: "#170961",
            fontWeight: 700,
            fontSize: "1.1rem",
            textDecoration: "underline",
            marginBottom: "30px",
            display: "inline-block",
            fontFamily: "'Oswald', Arial, sans-serif"
          }}
        >
          careers@codingplayground.tech
        </a>
      </main>
    </div>
  );
}