import React, { useState } from "react";

// Success Popup for submission as in ![image5](image5)
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

export default function StartProjectForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [popupOpen, setPopupOpen] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPopupOpen(true);
  }

  function handlePopupClose() {
    setPopupOpen(false);
    setForm({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    });
  }

  return (
    <div style={{
      background: "#fff",
      minHeight: "100vh",
      fontFamily: "'Inter', Arial, sans-serif",
      width: "100vw",
      overflowX: "hidden",
    }}>
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "36px 10px 0 10px",
      }}>
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
          <span style={{ color: "#170961" }}>Start a project</span>
        </h1>
        <div style={{
          fontSize: "1.12rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "34px"
        }}>
          Fill in your details for a preferred project and for a streamlined deliverances
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
            placeholder="Enter your email address"
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
          {/* Company/Organization */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Company/Organization</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="Your Company Name"
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
          {/* Project Type and Budget Range */}
          <div style={{ display: "flex", gap: "18px", marginBottom: "18px" }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Project Type</label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                required
                style={{
                  marginBottom: "0px",
                  padding: "12px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                  boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
                  background: "#fff"
                }}
              >
                <option value="" disabled>Select type of project</option>
                <option value="Website">Website</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Web App">Web App</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Budget Range</label>
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                placeholder="Enter your budget range"
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
          {/* Timeline */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Timeline</label>
          <div style={{ position: "relative", marginBottom: "18px" }}>
            <input
              type="text"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              required
              placeholder="What is your preferred timeline"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "1rem",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
              }}
            />
            {/* Calendar icon */}
            <span style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }}>
              <svg width="22" height="22" fill="none">
                <rect x="2" y="5" width="18" height="14" rx="3" stroke="#170961" strokeWidth="2"/>
                <path d="M7 2v3M15 2v3" stroke="#170961" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="7" cy="11" r="1" fill="#170961"/>
                <circle cx="11" cy="11" r="1" fill="#170961"/>
                <circle cx="15" cy="11" r="1" fill="#170961"/>
              </svg>
            </span>
          </div>
          {/* Brief Description */}
          <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Brief Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            placeholder="Explain briefly about your project"
            rows={4}
            style={{
              marginBottom: "18px",
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
              resize: "none"
            }}
          />
          <button
            type="submit"
            style={{
              background: "#170961",
              color: "#fff",
              border: "none",
              borderRadius: "9px",
              fontSize: "1.15rem",
              fontWeight: 600,
              padding: "13px 0",
              boxShadow: "0 2px 8px rgba(36,36,36,0.13)",
              cursor: "pointer",
              width: "180px",
              alignSelf: "center",
              marginTop: "18px"
            }}
          >
            Submit
          </button>
        </form>
      </main>
      <SuccessPopup open={popupOpen} onClose={handlePopupClose} />
    </div>
  );
}