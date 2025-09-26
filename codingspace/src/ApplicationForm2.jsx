import React, { useState, useRef } from "react";
import logo from "./assets/Coding PLayground 1.png"; // Adjust path as needed

export default function JoinAcademy({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    startDate: "",
    reason: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const startDateRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleStartDateCalendarClick(e) {
    e.preventDefault();
    if (startDateRef.current) {
      startDateRef.current.showPicker
        ? startDateRef.current.showPicker()
        : startDateRef.current.click();
    }
  }

  function handleStartDateChange(e) {
    setForm(f => ({
      ...f,
      startDate: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      program: "",
      experience: "",
      startDate: "",
      reason: "",
    });
  }

  // Programs from screenshot (image 2)
  const programOptions = [
    "Software Engineer",
    "Frontend/Backend Developer",
    "Coding Instructor",
    "Business Development Lead",
    "Digital Marketing Specialist",
    "Robotics Engineer (Tutor)",
    "Video Editor"
  ];

  // Experience options
  const experienceOptions = [
    "Beginner",
    "Intermediate",
    "Advanced"
  ];

  // Common input style
  const inputStyle = {
    padding: "14px",
    fontSize: "1.07rem",
    borderRadius: "9px",
    border: "1px solid #ececec",
    outline: "none",
    boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
    background: "#fff",
    color: "#242424",
    fontFamily: "'Nunito', Arial, sans-serif"
  };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", width: "100vw", fontFamily: "'Nunito', Arial, sans-serif", overflowX: "hidden" }}>
      {/* Custom header with logo only */}
      <header style={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        height: "70px",
        borderBottom: "1px solid #ececec",
        boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
        paddingLeft: "28px"
      }}>
        <img src={logo} alt="Coding Playground Logo" style={{ height: "48px", width: "auto", objectFit: "contain" }} />
      </header>
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "36px 10px 0 10px"
      }}>
        {/* Page Title & Subtitle */}
        <h1 style={{
          color: "#170961",
          fontWeight: 900,
          fontFamily: "'Oswald', Arial, sans-serif",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "7px",
          marginTop: "0px",
          letterSpacing: "1px",
        }}>
          Application Form
        </h1>
        <div style={{
          fontSize: "1.12rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "34px",
          fontFamily: "'Nunito', Arial, sans-serif"
        }}>
          Fill in your details to become one of CodingPlayGround Technology Student
        </div>

        {/* Form Card */}
        <form
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
          onSubmit={handleSubmit}
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

          {/* Full Name */}
          <label style={{
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "8px",
            color: "#242424",
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your Full name"
            style={{ ...inputStyle, marginBottom: "24px" }}
          />

          {/* Email Address */}
          <label style={{
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "8px",
            color: "#242424",
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            style={{ ...inputStyle, marginBottom: "24px" }}
          />

          {/* Phone Number */}
          <label style={{
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "8px",
            color: "#242424",
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            style={{ ...inputStyle, marginBottom: "24px" }}
          />

          {/* Program of Interest */}
          <label style={{
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "8px",
            color: "#242424",
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Program of Interest</label>
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            required
            style={{ ...inputStyle, marginBottom: "24px" }}
          >
            <option value="" disabled>Select your program of interest</option>
            {programOptions.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          {/* Level of experience & Preferred start date (side by side) */}
          <div style={{ display: "flex", gap: "18px", marginBottom: "24px" }}>
            <div style={{ flex: 1 }}>
              <label style={{
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "8px",
                color: "#242424",
                fontFamily: "'Oswald', Arial, sans-serif"
              }}>Level of experience</label>
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="" disabled>Select your level of experience</option>
                {experienceOptions.map(e => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "8px",
                color: "#242424",
                fontFamily: "'Oswald', Arial, sans-serif"
              }}>Preferred start date</label>
              <div style={{ position: "relative", display: "flex" }}>
                <input
                  type="text"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  required
                  placeholder="Enter your preferred start date"
                  style={{ ...inputStyle, width: "100%" }}
                />
                <input
                  ref={startDateRef}
                  type="date"
                  style={{
                    display: "none"
                  }}
                  onChange={handleStartDateChange}
                />
                <button
                  onClick={handleStartDateCalendarClick}
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
            </div>
          </div>

          {/* Why do you want to join? */}
          <label style={{
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "8px",
            color: "#242424",
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Why do you want to join?</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
            placeholder="Explain briefly the reason why you want to Join CodingPlayGround Academy"
            rows={4}
            style={{ ...inputStyle, resize: "none", marginBottom: "32px" }}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                background: "#170961",
                color: "#fff",
                border: "none",
                borderRadius: "9px",
                fontSize: "1.18rem",
                fontWeight: 700,
                padding: "13px 0",
                boxShadow: "0 2px 8px rgba(36,36,36,0.13)",
                cursor: "pointer",
                width: "210px",
                marginTop: "18px",
                fontFamily: "'Oswald', Arial, sans-serif"
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </main>
      {/* Success Popup (matches screenshot image 3) */}
      {showSuccess && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.12)", zIndex: 9999,
          display: "flex", justifyContent: "center", alignItems: "center"
        }}>
          <div style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "32px 38px",
            boxShadow: "0 8px 32px rgba(36,36,36,0.18)",
            textAlign: "center",
            minWidth: "340px",
            maxWidth: "95vw"
          }}>
            {/* Popup icon from screenshot (SVG recreation) */}
            <div style={{ marginBottom: "18px" }}>
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                <circle cx="27" cy="27" r="18" fill="#15B89A"/>
                <path d="M19 28.5l6 6 10-13" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="35" cy="12" r="3" fill="#15B89A"/>
                <circle cx="18" cy="16" r="2" fill="#15B89A"/>
                <circle cx="44" cy="26" r="2" fill="#15B89A"/>
              </svg>
            </div>
            <div style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#242424",
              marginBottom: "9px",
              fontFamily: "'Oswald', Arial, sans-serif"
            }}>
              Application Submitted Successfully
            </div>
            <div style={{
              color: "#242424",
              fontSize: "1.05rem",
              marginBottom: "7px",
              fontFamily: "'Nunito', Arial, sans-serif"
            }}>
              You will receive an email once the process is complete
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                marginTop: "14px",
                background: "#15B89A",
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
      )}
    </div>
  );
}