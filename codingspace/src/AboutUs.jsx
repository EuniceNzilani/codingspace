import React from "react";
import group7 from "./assets/Group 7.png";

export default function AboutUs() {
  return (
    <div style={{
      background: "#fff",
      height: "100vh",
      fontFamily: "'Inter', Arial, sans-serif",
      paddingBottom: "60px",
      boxSizing: "border-box",
      width: "100vw",
      overflow: "hidden", // Make it not scrollable
    }}>
      <div style={{
        maxWidth: "1100px", // Increased to accommodate image grid
        margin: "0 auto",
        paddingTop: "30px", // Reduced padding
        paddingLeft: "20px",
        paddingRight: "20px",
        boxSizing: "border-box",
      }}>
        {/* Page Title */}
        <h1 style={{
          color: "#170961",
          fontWeight: 900,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: "2.2rem", // Reduced font size
          textAlign: "center",
          marginBottom: "6px"
        }}>
          About Us
        </h1>
        {/* Subtitle */}
        <div style={{
          fontSize: "1.1rem", // Reduced font size
          color: "#242424",
          textAlign: "center",
          marginBottom: "20px" // Reduced margin
        }}>
          We are a Software Development Company and Coding Institution<br />
          headquartered in Nigeria.
        </div>
        {/* What we do and image grid */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "5px", // REDUCED GAP FROM 20PX TO 5PX
          marginBottom: "25px" // Reduced margin
        }}>
          {/* What we do */}
          <div style={{
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 32px rgba(36,36,36,0.15)", // Increased shadow
            padding: "25px 25px", // Reduced padding
            minWidth: "280px", // Reduced width
            maxWidth: "320px", // Reduced width
            flex: "0 0 320px"
          }}>
            <div style={{
              fontWeight: 700,
              fontSize: "1.12rem",
              color: "#242424",
              marginBottom: "12px"
            }}>
              What we do:
            </div>
            <div style={{
              fontSize: "1rem",
              color: "#242424",
              lineHeight: "1.7"
            }}>
              Help thinkers and entrepreneurs bring their bold ideas to life.<br />
              Build, maintain, and scale world-class software solutions.<br />
              Train beginners into job-ready tech professionals.
            </div>
          </div>
          {/* Single Image section - your original image */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "420px", // Reduced width
            height: "240px", // Reduced height
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 32px rgba(36,36,36,0.15)", // Increased shadow as requested
            flex: "0 0 420px"
          }}>
            <img
              src={group7}
              alt="Group 7"
              style={{
                width: "80%",
                height: "auto",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto"
              }}
            />
          </div>
        </div>
        {/* Mission and Vision */}
        <div style={{
          background: "#D3CCE6",
          borderRadius: "16px",
          padding: "20px 25px", // Reduced padding
          boxShadow: "0 8px 32px rgba(36,36,36,0.12)", // Increased shadow
          maxWidth: "650px", // Made smaller
          margin: "0 auto",
          marginTop: "20px", // Added margin-top to ensure visibility of the box
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: "1.1rem", // Slightly reduced
            color: "#242424",
            marginBottom: "8px" // Reduced margin
          }}>
            MISSION
          </div>
          <div style={{
            fontSize: "0.95rem", // Reduced font size
            color: "#242424",
            marginBottom: "15px", // Reduced margin
            lineHeight: "1.6" // Slightly reduced line height
          }}>
            To empower thinkers, businesses, and learners by building innovative software solutions and delivering world-class technology education that transforms ideas into scalable impact.
          </div>
          <div style={{
            fontWeight: 700,
            fontSize: "1.1rem", // Slightly reduced
            color: "#242424",
            marginBottom: "8px" // Reduced margin
          }}>
            VISION
          </div>
          <div style={{
            fontSize: "0.95rem", // Reduced font size
            color: "#242424",
            lineHeight: "1.6" // Slightly reduced line height
          }}>
            To become Africa's leading tech powerhouse, blending innovation with education, nurturing talent, and driving sustainable growth in the global digital economy.
          </div>
        </div>
      </div>
    </div>
  );
}