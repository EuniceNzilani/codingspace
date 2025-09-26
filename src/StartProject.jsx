import React, { useState, useRef } from "react";

// --- SuccessPopup: green color updated to #14A388, fonts as requested ---
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
        maxWidth: "90vw",
        fontFamily: "'Nunito', Arial, sans-serif"
      }}>
        <div style={{ marginBottom: "18px" }}>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
            <circle cx="27" cy="27" r="27" fill="#14A388"/>
            <path d="M18 28l6.3 6.3L36 22.6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="39" cy="12" r="2.2" fill="#14A388"/>
            <circle cx="14" cy="16" r="1.6" fill="#14A388"/>
            <circle cx="46" cy="26" r="1.2" fill="#14A388"/>
          </svg>
        </div>
        <div style={{ fontWeight: 600, fontSize: "1.25rem", color: "#242424", marginBottom: "9px", fontFamily: "'Oswald', Arial, sans-serif" }}>
          Application Submitted Successfully
        </div>
        <div style={{ color: "#7A7A7A", fontSize: "1.05rem", marginBottom: "7px", fontFamily: "'Nunito', Arial, sans-serif" }}>
          You will receive an email once the process is complete
        </div>
        <button
          onClick={onClose}
          style={{
            marginTop: "14px",
            background: "#14A388",
            color: "#fff",
            border: "none",
            padding: "10px 32px",
            borderRadius: "9px",
            fontWeight: 500,
            fontSize: "1rem",
            boxShadow: "0 2px 8px rgba(36,36,36,0.13)",
            cursor: "pointer",
            fontFamily: "'Nunito', Arial, sans-serif"
          }}
        >Close</button>
      </div>
    </div>
  );
}

// --- Field component: headings use Oswald, body Nunito ---
function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "18px" }}>
      <label style={{
        fontWeight: 600,
        fontSize: "1rem",
        marginBottom: "6px",
        color: "#242424",
        fontFamily: "'Oswald', Arial, sans-serif"
      }}>{label}</label>
      {children}
    </div>
  );
}

// --- Main StartProject form ---
export default function StartProject({ onBack, onNavigate, activePage = -1 }) {
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

  const timelineDateRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
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

  function handleTimelineCalendarClick(e) {
    e.preventDefault();
    if (timelineDateRef.current) {
      timelineDateRef.current.showPicker
        ? timelineDateRef.current.showPicker()
        : timelineDateRef.current.click();
    }
  }

  function handleTimelineDateChange(e) {
    const value = e.target.value;
    setForm(f => ({
      ...f,
      timeline: value
    }));
  }

  // Common input style for all fields
  const inputStyle = {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ececec",
    outline: "none",
    boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
    background: "#fff",
    color: "#242424",
    transition: "background 0s",
    fontFamily: "'Nunito', Arial, sans-serif"
  };

  const navBarHeight = 78;

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'Nunito', Arial, sans-serif", width: "100vw", overflowX: "hidden" }}>
      {/* Autofill fix for Chrome, Edge, Safari */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 2px 8px rgba(36,36,36,0.09) 0px 0px 0px 1000px #fff inset !important;
          box-shadow: 0 2px 8px rgba(36,36,36,0.09) 0px 0px 0px 1000px #fff inset !important;
          background-color: #fff !important;
          color: #242424 !important;
          caret-color: #242424 !important;
        }
      `}</style>

      {/* Header matching the main app navigation */}
      <nav style={{
        background: "#fff",
        boxShadow: "0 6px 22px rgba(36,36,36,0.08)",
        fontFamily: "'Inter', Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        height: `${navBarHeight}px`,
        position: "relative",
        zIndex: 12,
      }}>
        {/* Logo section */}
        <div style={{
          height: `${navBarHeight}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "26px",
          paddingRight: "10px"
        }}>
          <img
            src="/src/assets/Coding PLayground 1.png"
            alt="Coding Playground Logo"
            style={{
              height: "58px",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Navigation items */}
        <div style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          height: `${navBarHeight}px`,
          marginLeft: "14px",
          position: "relative",
          justifyContent: "flex-start",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            height: "42px",
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            width: "100%",
            justifyContent: "flex-start",
          }}>
            {[
              { name: "Home", index: 0 },
              { name: "About Us", index: 1 },
              { name: "Product & Services", index: 2 },
              { name: "Training Programs", index: 3 },
              { name: "Our Team", index: 4 },
              { name: "Careers", index: 5 },
              { name: "Partnership", index: 6 },
              { name: "Contact Us", index: 7 }
            ].map((page) => (
              <div key={page.name} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                position: "relative",
                padding: "0 18px"
              }}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: activePage === page.index ? "#170961" : "#242424",
                    fontWeight: activePage === page.index ? 700 : 500,
                    fontSize: "1.08rem",
                    cursor: "pointer",
                    outline: "none",
                    padding: "0",
                    marginBottom: "0",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(page.index);
                    }
                  }}
                >
                  {page.name}
                </button>
                {/* Selected underline */}
                {activePage === page.index && (
                  <div style={{
                    width: "120%",
                    height: "2px",
                    background: "#170961",
                    borderRadius: "3px",
                    marginTop: "4px",
                    transition: "width 0.23s"
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Page title */}
      <div style={{
        background: "#fff",
        padding: "18px 26px",
        borderBottom: "1px solid #ececec",
        textAlign: "center"
      }}>
        <span style={{
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#170961",
          fontFamily: "'Oswald', Arial, sans-serif"
        }}>
          Start a Project
        </span>
      </div>

      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "36px 10px 0 10px",
      }}>
        <div style={{
          fontSize: "1.12rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "34px",
          fontFamily: "'Nunito', Arial, sans-serif"
        }}>
          Fill in your details for a preferred project and for a streamlined deliverances
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 2px 16px rgba(36,36,36,0.09)",
            padding: "36px 38px 24px 38px",
            maxWidth: "765px",
            margin: "0 auto",
            border: "1px solid #ececec",
            marginBottom: "26px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{
            fontWeight: 700,
            fontSize: "1.13rem",
            fontFamily: "'Oswald', Arial, sans-serif",
            color: "#242424",
            marginBottom: "18px",
            textAlign: "center"
          }}>
            Basic Details
          </div>
          <Field label="Full Name">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your Full name"
              style={inputStyle}
            />
          </Field>
          <Field label="Email Address">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your email address"
              style={inputStyle}
            />
          </Field>
          <Field label="Company/Organization">
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Your Company Name"
              style={inputStyle}
            />
          </Field>
          <div style={{ display: "flex", gap: "18px", marginBottom: "18px" }}>
            <div style={{ flex: 1 }}>
              <Field label="Project Type">
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="" disabled>Select type of project</option>
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Web App">Web App</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Other">Other</option>
                </select>
              </Field>
            </div>
            <div style={{ flex: 1 }}>
              <Field label="Budget Range">
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Enter your budget range"
                  style={inputStyle}
                />
              </Field>
            </div>
          </div>
          <Field label="Timeline">
            <div style={{ position: "relative", display: "flex" }}>
              <input
                type="text"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="What is your preferred timeline"
                style={{ ...inputStyle, width: "100%" }}
              />
              <input
                ref={timelineDateRef}
                type="date"
                style={{
                  display: "none"
                }}
                onChange={handleTimelineDateChange}
              />
              <button
                onClick={handleTimelineCalendarClick}
                tabIndex={0}
                type="button"
                aria-label="Open calendar"
                style={{
                  background: "none",
                  border: "none",
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  padding: 0,
                  marginLeft: "8px",
                  outline: "none"
                }}
              >
                <svg width="22" height="22" fill="none">
                  <rect x="2" y="5" width="18" height="14" rx="3" stroke="#242424" strokeWidth="2"/>
                  <path d="M7 2v3M15 2v3" stroke="#242424" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="7" cy="11" r="1" fill="#242424"/>
                  <circle cx="11" cy="11" r="1" fill="#242424"/>
                  <circle cx="15" cy="11" r="1" fill="#242424"/>
                </svg>
              </button>
            </div>
          </Field>
          <Field label="Brief Description">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Explain briefly about your project"
              rows={4}
              style={{ ...inputStyle, resize: "none" }}
            />
          </Field>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "18px" }}>
            <button
              type="button"
              onClick={handleSubmit}
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
                textAlign: "center",
                fontFamily: "'Nunito', Arial, sans-serif"
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </main>
      <SuccessPopup open={popupOpen} onClose={handlePopupClose} />
    </div>
  );
}