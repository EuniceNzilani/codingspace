import React from "react"; 

// Profile images
import directorImg from "./assets/Group 29.png";
import frontendImg from "./assets/Mask group.png";
import designerImg from "./assets/Mask group1.png";
import backendImg from "./assets/Mask group2.png";

// Social icon images (use your actual relative paths)
import whatsappIcon from "./assets/whatsapp icon.png";
import linkedinIcon from "./assets/linkedin icon.png";
import instagramIcon from "./assets/instagram icon.png";

export default function Team() {
  const dividerColor = "#e0e0e0";

  // Add this style to reset any potential parent interference
  const containerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "48px 20px",
    background: "#fff",
    fontFamily: "'Inter', Arial, sans-serif",
    width: "100vw", // Use viewport width instead of 100%
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: "0",
    left: "50%",
    transform: "translateX(-50%)", // Force horizontal centering
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto" // Center the content container
        }}
      >
        {/* Title Section */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "8px", 
          width: "100%",
          textAlign: "center"
        }}>
          <h1
            style={{
              color: "#170961",
              fontWeight: 900,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: "2.7rem",
              textAlign: "center",
              margin: 0,
              width: "100%"
            }}
          >
            Meet Our Team
          </h1>
          <div
            style={{
              fontSize: "1.18rem",
              color: "#242424",
              textAlign: "center",
              fontWeight: 600,
              margin: 0,
              width: "100%"
            }}
          >
            We are builders, dreamers, and mentors.
          </div>
        </div>

        {/* Director Section */}
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center", 
          gap: "40px", 
          width: "100%",
          maxWidth: "900px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {/* Director Image */}
          <div style={{ 
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "240px"
          }}>
            <img
              src={directorImg}
              alt="Director"
              style={{
                width: "240px",
                height: "240px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 4px 24px rgba(36,36,36,0.10)",
                display: "block"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-28px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                color: "#170961",
                fontWeight: 600,
                fontSize: "1.15rem",
                fontFamily: "'Montserrat', Arial, sans-serif",
                borderRadius: "10px",
                padding: "8px 20px",
                boxShadow: "0 2px 10px rgba(36,36,36,0.10)",
                border: "2px solid #170961",
                whiteSpace: "nowrap",
                textAlign: "center"
              }}
            >
              Director & Founder
            </div>
          </div>

          {/* Director Info */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            gap: "16px", 
            flex: 1,
            minWidth: "300px",
            textAlign: "left"
          }}>
            <h2
              style={{
                color: "#170961",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "1.45rem",
                margin: 0,
                textAlign: "left"
              }}
            >
              Anakhe Ajayi
            </h2>
            <p
              style={{
                color: "#242424",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                margin: 0,
                textAlign: "left"
              }}
            >
              Director of CodingPlayGround Technologies, I'm passionate about transforming ideas into scalable tech solutions. With experience in software development, product management, and startup consulting, I've led projects that bridge innovation and impact. At CodingPlayGround, my mission is to empower businesses and train the next generation of tech experts.
            </p>
            
            {/* Social icons */}
            <div style={{ 
              display: "flex", 
              gap: "18px", 
              justifyContent: "flex-start",
              alignItems: "center"
            }}>
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }} 
              />
              <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }} 
              />
              <img 
                src={linkedinIcon} 
                alt="LinkedIn" 
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }} 
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: `2px solid ${dividerColor}`,
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        />

        {/* Team Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            width: "100%",
            maxWidth: "800px",
            justifyItems: "center",
            margin: "0 auto"
          }}
        >
          {/* Frontend Developer */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "16px", 
            width: "100%",
            textAlign: "center"
          }}>
            <img
              src={frontendImg}
              alt="Frontend Developer"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 14px rgba(36,36,36,0.10)",
                margin: "0 auto",
                display: "block"
              }}
            />
            <h3
              style={{
                color: "#170961",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "1.15rem",
                margin: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              Eunice Nzilani
            </h3>
            <p
              style={{
                color: "#242424",
                fontSize: "1rem",
                margin: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              Lead Frontend Developer
            </p>
          </div>

          {/* Designer */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "16px", 
            width: "100%",
            textAlign: "center"
          }}>
            <img
              src={designerImg}
              alt="UI/UX Designer"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 14px rgba(36,36,36,0.10)",
                margin: "0 auto",
                display: "block"
              }}
            />
            <h3
              style={{
                color: "#170961",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "1.15rem",
                margin: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              Mariam Tajudeen
            </h3>
            <p
              style={{
                color: "#242424",
                fontSize: "1rem",
                margin: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              Lead UI/UX Designer
            </p>
          </div>

          {/* Backend Developer */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "16px", 
            width: "100%",
            textAlign: "center"
          }}>
            <img
              src={backendImg}
              alt="Backend Developer"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 14px rgba(36,36,36,0.10)",
                margin: "0 auto",
                display: "block"
              }}
            />
            <h3
              style={{
                color: "#170961",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "1.15rem",
                margin: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              Wycliffe Kibet
            </h3>
            <p
              style={{
                color: "#242424",
                fontSize: "1rem",
                margin: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              Lead Backend Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}