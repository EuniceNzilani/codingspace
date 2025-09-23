import React, { useState } from "react";

// Popup component for submission success (see ![image3](image3))
function SuccessPopup({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.21)", zIndex: 1000,
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "17px",
        padding: "38px 32px",
        boxShadow: "0 8px 32px rgba(36,36,36,0.15)",
        textAlign: "center",
        minWidth: "360px",
        maxWidth: "90vw"
      }}>
        <div style={{ marginBottom: "18px" }}>
          {/* Green success checkmark with dots */}
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
            <circle cx="27" cy="27" r="27" fill="#22C55E"/>
            <path d="M18 28l6.3 6.3L36 22.6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Decorative dots */}
            <circle cx="39" cy="12" r="2.2" fill="#22C55E"/>
            <circle cx="14" cy="16" r="1.6" fill="#22C55E"/>
            <circle cx="46" cy="26" r="1.2" fill="#22C55E"/>
          </svg>
        </div>
        <div style={{ fontWeight: 600, fontSize: "1.25rem", color: "#242424", marginBottom: "9px" }}>
          Application Submitted Successfully
        </div>
        <div style={{ color: "#7A7A7A", fontSize: "1.05rem", marginBottom: "7px" }}>
          You will receive an email once the process is complete
        </div>
        <button
          onClick={onClose}
          style={{
            marginTop: "14px",
            background: "#22C55E",
            color: "#fff",
            border: "none",
            padding: "10px 32px",
            borderRadius: "9px",
            fontWeight: 500,
            fontSize: "1rem",
            boxShadow: "0 2px 8px rgba(36,36,36,0.13)",
            cursor: "pointer"
          }}
        >Close</button>
      </div>
    </div>
  );
}

export default function ApplicationForm() {
  // Form state
  const [form, setForm] = useState({
    name: "", email: "", role: "", linkedin: "", github: "", portfolio: ""
  });
  const [resume, setResume] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleResumeChange(e) {
    const file = e.target.files[0];
    setResume(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate submit, show popup
    setPopupOpen(true);
  }

  function handlePopupClose() {
    setPopupOpen(false);
    setForm({
      name: "", email: "", role: "", linkedin: "", github: "", portfolio: ""
    });
    setResume(null);
  }

  return (
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "'Inter', Arial, sans-serif",
      width: "100vw",
      overflowX: "hidden"
    }}>
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "36px 10px 0 10px",
      }}>
        {/* Title and subtitle */}
        <h1 style={{
          color: "#170961",
          fontWeight: 900,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: "2.6rem",
          textAlign: "center",
          marginBottom: "7px",
          marginTop: "0px",
          letterSpacing: "1px",
        }}>
          <span style={{ color: "#1a0ca8" }}>Application Form</span>
        </h1>
        <div style={{
          fontSize: "1.12rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "34px"
        }}>
          Join our team by applying to your preferred available role
        </div>
        <form
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 16px rgba(36,36,36,0.09)",
            padding: "36px 38px 24px 38px",
            maxWidth: "765px",
            margin: "0 auto",
            border: "1px solid #ececec",
            marginBottom: "26px"
          }}
          onSubmit={handleSubmit}
        >
          <div style={{
            fontWeight: 700,
            fontSize: "1.13rem",
            fontFamily: "'Montserrat', Arial, sans-serif",
            color: "#242424",
            marginBottom: "18px",
            textAlign: "center"
          }}>
            Basic Details
          </div>
          {/* Full Name */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your Full name"
            style={{
              marginBottom: "18px",
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
            }}
          />
          {/* Email Address */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your Email Address"
            style={{
              marginBottom: "18px",
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
            }}
          />
          {/* Interested Role */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Interested Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            style={{
              marginBottom: "18px",
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
              background: "#fff"
            }}
          >
            <option value="" disabled>Enter your interested role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Instructor">Instructor</option>
            <option value="Business Development">Business Development</option>
            <option value="Other">Other</option>
          </select>
          {/* Socials */}
          <div style={{ display: "flex", gap: "18px", marginBottom: "18px" }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Linkedin profile (URL)</label>
              <input
                type="url"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="Enter your linkedin link"
                style={{
                  marginBottom: "0px",
                  padding: "12px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                  boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Github link (URL)</label>
              <input
                type="url"
                name="github"
                value={form.github}
                onChange={handleChange}
                placeholder="Enter your github link"
                style={{
                  marginBottom: "0px",
                  padding: "12px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                  boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
                }}
              />
            </div>
          </div>
          {/* Portfolio */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Portfolio</label>
          <input
            type="url"
            name="portfolio"
            value={form.portfolio}
            onChange={handleChange}
            placeholder="Enter your portfolio link"
            style={{
              marginBottom: "18px",
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
            }}
          />
          {/* Resume Upload */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Upload a Resume</label>
          <div style={{
            marginBottom: "18px",
            border: "1.5px dashed #170961",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
            padding: "24px 0",
            textAlign: "center",
            cursor: "pointer",
            position: "relative"
          }}
            onClick={() => document.getElementById("resume-input").click()}
          >
            <input
              id="resume-input"
              type="file"
              accept=".pdf,.png"
              style={{
                display: "none"
              }}
              onChange={handleResumeChange}
            />
            <div>
              <svg width="36" height="36" fill="none">
                <path d="M18 29V13M18 13l-5 5m5-5l5 5" stroke="#170961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="4" width="28" height="28" rx="7" stroke="#170961" strokeWidth="1.5" />
              </svg>
            </div>
            <div style={{
              marginTop: "6px",
              color: "#170961",
              fontWeight: 500,
              fontSize: "1rem"
            }}>
              Upload a Resume here (PNG/PDF)<br />
              {resume ? <span style={{ color: "#22C55E" }}>{resume.name}</span> : "Inbox"}
            </div>
          </div>
          <button
            type="submit"
            style={{
              background: "#1a0ca8",
              color: "#fff",
              border: "none",
              borderRadius: "9px",
              fontSize: "1.15rem",
              fontWeight: 600,
              padding: "13px 0",
              boxShadow: "0 2px 8px rgba(36,36,36,0.13)",
              cursor: "pointer",
              width: "210px",
              alignSelf: "center",
              marginTop: "18px"
            }}
          >
            Submit Application
          </button>
        </form>
      </main>
      <SuccessPopup open={popupOpen} onClose={handlePopupClose} />
    </div>
  );
}