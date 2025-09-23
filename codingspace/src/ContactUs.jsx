import React, { useState } from "react";

export default function ContactUs() {
  // Simple form state
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", subject: "", message: "" });
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
        maxWidth: "950px",
        margin: "0 auto",
        padding: "36px 10px 0 10px",
        flex: "1"
      }}>
        <h1 style={{
          color: "#170961", // Use true brand blue
          fontWeight: 900,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: "2.7rem",
          textAlign: "center",
          marginBottom: "7px",
          marginTop: "0px",
          letterSpacing: "1px",
        }}>
          Contact Us
        </h1>
        <div style={{
          fontSize: "1.18rem",
          color: "#242424",
          textAlign: "center",
          marginBottom: "32px"
        }}>
          CodingPlayGround Technologies is ready to provide the right solution according to your needs
        </div>
        {/* Contact Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          marginBottom: "34px"
        }}>
          {/* Get In Touch */}
          <div style={{
            background: "#fff",
            borderRadius: "7px",
            boxShadow: "0 2px 12px rgba(36,36,36,0.09)",
            padding: "28px 32px",
            minWidth: "320px",
            border: "1px solid #ececec",
            height: "fit-content"
          }}>
            <div style={{
              color: "#170961",
              fontWeight: 700,
              fontSize: "1.4rem",
              marginBottom: "18px",
              fontFamily: "'Montserrat', Arial, sans-serif"
            }}>
              Get In touch
            </div>
            {/* Head Office */}
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
              <span style={{
                background: "#170961",
                color: "#fff",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginRight: "14px",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
              }}>
                <i className="fa fa-map-marker" />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: "#170961", fontSize: "1.08rem", fontFamily: "'Montserrat', Arial, sans-serif" }}>Head Office</div>
                <div style={{ color: "#242424", fontSize: "1rem" }}>
                  Heritage Plaza, No. 30 S.N Okoronkwo, Kubwa,<br />
                  Federal Capital Territory, Abuja
                </div>
              </div>
            </div>
            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <span style={{
                background: "#170961",
                color: "#fff",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginRight: "14px",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
              }}>
                <i className="fa fa-envelope" />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: "#170961", fontSize: "1.08rem", fontFamily: "'Montserrat', Arial, sans-serif" }}>Email Us</div>
                <div style={{ color: "#242424", fontSize: "1rem" }}>
                  info@codingplayground.tech
                </div>
              </div>
            </div>
            {/* Call Us */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{
                background: "#170961",
                color: "#fff",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginRight: "14px",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
              }}>
                <i className="fa fa-phone" />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: "#170961", fontSize: "1.08rem", fontFamily: "'Montserrat', Arial, sans-serif" }}>Call Us</div>
                <div style={{ color: "#242424", fontSize: "1rem" }}>
                  Phone: +234 904 2512 356<br />
                  WhatsApp: +234 904 2512 356
                </div>
              </div>
            </div>
          </div>
          {/* Message Us Form */}
          <form
            style={{
              background: "#fff",
              borderRadius: "7px",
              boxShadow: "0 2px 12px rgba(36,36,36,0.09)",
              padding: "28px 32px",
              minWidth: "320px",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #ececec",
              height: "fit-content"
            }}
            onSubmit={handleSubmit}
          >
            <div style={{
              color: "#170961",
              fontWeight: 700,
              fontSize: "1.4rem",
              marginBottom: "18px",
              fontFamily: "'Montserrat', Arial, sans-serif"
            }}>
              Message Us
            </div>
            <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                marginBottom: "14px",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "9px",
                border: "none",
                outline: "none",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
              }}
            />
            <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              style={{
                marginBottom: "14px",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "9px",
                border: "none",
                outline: "none",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)"
              }}
            />
            <label style={{ fontWeight: 500, fontSize: "1rem", marginBottom: "3px" }}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              style={{
                marginBottom: "18px",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "9px",
                border: "none",
                outline: "none",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
                resize: "none"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#170961", // Use true brand blue
                color: "#fff",
                border: "none",
                borderRadius: "9px",
                fontSize: "1.15rem",
                fontWeight: 600,
                padding: "12px 0",
                boxShadow: "0 2px 8px rgba(36,36,36,0.09)",
                cursor: "pointer",
                width: "140px",
                alignSelf: "center",
                marginTop: "8px",
                marginBottom: "2px"
              }}
            >
              Send
            </button>
          </form>
        </div>
      </main>
      {/* Footer */}
      <footer style={{
        background: "#170961", // Use true brand blue
        color: "#fff",
        padding: "28px 0 12px",
        marginTop: "auto",
        width: "100vw"
      }}>
        <div style={{
          maxWidth: "950px",
          margin: "0 auto",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            marginBottom: "9px"
          }}>
            <div style={{ minWidth: "180px" }}>
              <div style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: "6px", fontFamily: "'Montserrat', Arial, sans-serif" }}>
                Coding
              </div>
              <div style={{ fontSize: "1rem" }}>CodingPlayGround Technologies</div>
            </div>
            <div style={{ textAlign: "center", minWidth: "220px" }}>
              <div style={{ marginBottom: "5px" }}>Join our Community on</div>
              <div style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                fontSize: "1.42rem",
                marginBottom: "3px"
              }}>
                {/* True blue icons as in screenshot */}
                <a href="#" style={{ color: "#170961", background: "#fff", borderRadius: "50%", padding: "4px" }}><i className="fa fa-instagram" /></a>
                <a href="#" style={{ color: "#170961", background: "#fff", borderRadius: "50%", padding: "4px" }}><i className="fa fa-facebook" /></a>
                <a href="#" style={{ color: "#170961", background: "#fff", borderRadius: "50%", padding: "4px" }}><i className="fa fa-twitter" /></a>
                <a href="#" style={{ color: "#170961", background: "#fff", borderRadius: "50%", padding: "4px" }}><i className="fa fa-linkedin" /></a>
              </div>
            </div>
            <div style={{ textAlign: "right", fontSize: "1.05rem", minWidth: "180px" }}>
              Website<br />
              <span style={{ color: "#fff", textDecoration: "underline" }}>codingplayground.tech</span>
            </div>
          </div>
          <div style={{
            borderTop: "1px solid #fff",
            width: "100%",
            margin: "10px 0 0 0",
            opacity: 0.3
          }} />
          <div style={{
            textAlign: "center",
            fontSize: "0.98rem",
            marginTop: "10px"
          }}>
            ©2025 All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}