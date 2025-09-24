import React from "react";
import playgroundLogo from "./assets/Coding PLayground (1) 1.png";
import networkLeft from "./assets/6.png";
import networkRight from "./assets/7.png";
import arrowImg from "./assets/5.png";

export default function Home() {
  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "'Inter', Arial, sans-serif",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <main
        style={{
          position: "relative",
          minHeight: "calc(100vh - 80px)",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* Bottom left network asset */}
        <img
          src={networkLeft}
          alt="Network Decorative Left"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "350px",
            height: "350px",
            zIndex: 1,
          }}
        />
        {/* Bottom right network asset */}
        <img
          src={networkRight}
          alt="Network Decorative Right"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "350px",
            height: "350px",
            zIndex: 1,
          }}
        />

        {/* Main Content */}
        <section
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            paddingTop: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <div style={{ position: "relative", display: "inline-block", marginBottom: "18px" }}>
            {/* Playground logo to the left of first B in Building */}
            <img
              src={playgroundLogo}
              alt="Coding Playground Decorative Logo"
              style={{
                position: "absolute",
                left: "-40px", // 0px gap: left = -width
                top: "-0px",   // Slightly above the text
                width: "90px",
                height: "90px",
                zIndex: 4,
              }}
            />
            {/* Headline */}
            <h1
              style={{
                fontSize: "3rem",
                color: "#170961",
                fontWeight: 900,
                lineHeight: "1.15",
                marginBottom: "0px",
                letterSpacing: "-1.5px",
                fontFamily: "'Montserrat', Arial, sans-serif",
                display: "inline-block",
                position: "relative",
              }}
            >
              Building People. Building <span id="products-keyword">Products</span>.<br />
              Building the Future.
            </h1>
            {/* Arrow image below "Products" */}
            <span
              style={{
                position: "absolute",
                left: "700px",
                top: "85px",
                zIndex: 5,
              }}
            >
              <img
                src={arrowImg}
                alt="Decorative Arrow"
                style={{
                  width: "180px",
                  height: "auto",
                  pointerEvents: "none",
                  display: "block",
                }}
              />
            </span>
          </div>
          {/* Subtext, with "world-class" on the lower line */}
          <p
            style={{
              fontSize: "1.18rem",
              color: "#242424",
              marginBottom: "38px",
              lineHeight: "1.6",
            }}
          >
            We build, we train, we launch. At CodingPlayGround Technologies, we transform ideas into<br />
            world-<span style={{ whiteSpace: 'nowrap' }}>class digital products</span> while empowering learners to become tech experts.
          </p>
          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginBottom: 30,
            }}
          >
            <button
              style={{
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
              }}
            >
              Start a Project
            </button>
            <button
              style={{
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
              }}
            >
              Join our Academy
            </button>
          </div>
          {/* WhatsApp */}
          <div style={{ textAlign: "center", marginTop: "46px" }}>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={{ width: 48, height: 48 }}
              />
              <div style={{ color: "#242424", fontSize: "1.02rem", marginTop: 8 }}>
                Chat on WhatsApp
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}