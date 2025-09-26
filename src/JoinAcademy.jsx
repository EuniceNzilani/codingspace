import React, { useRef } from "react";

// Import images
import logo from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/Coding PLayground 1.png";
import bgHome from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/image 18.png";
import valuePropImg from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/Group 177.png";
import uniqueBenefitImg from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/image 25.png";
import amakaImg from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/image 21.png";
import davidImg from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/Mask group3.png";
import partnerImg from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/image 22.png";

const navItems = [
  { label: "Home", ref: "home" },
  { label: "Value Proposition", ref: "value" },
  { label: "Unique Benefits", ref: "unique" },
  { label: "Testimonials & Success stories", ref: "testimonials" },
  { label: "Training programs", ref: "programs" }
];

export default function JoinAcademy() {
  // refs for scroll navigation
  const homeRef = useRef(null);
  const valueRef = useRef(null);
  const uniqueRef = useRef(null);
  const testimonialsRef = useRef(null);
  const programsRef = useRef(null);

  // Scroll to section
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      overflowX: "hidden",
      background: "#fff"
    }}>
      {/* Top nav */}
      <header style={{
        width: "100%",
        background: "#fff",
        boxShadow: "0 2px 12px rgba(36,36,36,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 0",
        position: "sticky",
        top: 0,
        zIndex: 99
      }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 24px", height: "70px" }}>
          <img src={logo} alt="Coding Playground" style={{ height: "38px", marginRight: "12px" }} />
        </div>
        <nav style={{ flex: 1 }}>
          <ul style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            gap: "34px",
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontSize: "1.08rem"
          }}>
            {navItems.map(item => (
              <li
                key={item.ref}
                style={{
                  color: "#170961",
                  fontWeight: 500,
                  cursor: "pointer",
                  borderBottom: "2px solid transparent",
                  padding: "9px 0",
                  transition: "border .13s"
                }}
                onClick={() => {
                  if (item.ref === "home") scrollToSection(homeRef);
                  if (item.ref === "value") scrollToSection(valueRef);
                  if (item.ref === "unique") scrollToSection(uniqueRef);
                  if (item.ref === "testimonials") scrollToSection(testimonialsRef);
                  if (item.ref === "programs") scrollToSection(programsRef);
                }}
                onMouseOver={e => e.currentTarget.style.borderBottom = "2px solid #170961"}
                onMouseOut={e => e.currentTarget.style.borderBottom = "2px solid transparent"}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ width: "38px", height: "38px" }} /> {/* spacer */}
      </header>

      {/* Scrollable content */}
      <div style={{ height: "100vh", overflowY: "auto", scrollBehavior: "smooth" }}>
        {/* Home Section */}
        <section ref={homeRef}
          style={{
            position: "relative",
            minHeight: "540px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `url(${bgHome}) center center / cover no-repeat`,
            color: "#fff"
          }}
        >
          <div style={{
            position: "absolute",
            inset: 0,
            background: "rgba(15,16,47,0.55)"
          }} />
          <div style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "700px",
            textAlign: "center",
            margin: "0 auto"
          }}>
            <h1 style={{
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "2.9rem",
              marginBottom: "19px",
              letterSpacing: "1px"
            }}>
              Learn. Build. Become Industry-Ready
            </h1>
            <div style={{
              fontSize: "1.28rem",
              fontWeight: 400,
              marginBottom: "38px"
            }}>
              Empowering beginners to grow into tech experts through guidance, practice, and confidence.
            </div>
            <button
              style={{
                background: "#170961",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1.19rem",
                fontWeight: 700,
                padding: "18px 54px",
                boxShadow: "0 6px 18px rgba(36,36,36,0.13)",
                cursor: "pointer",
                margin: "0 auto",
                outline: "none"
              }}
            >
              Apply Now
            </button>
          </div>
        </section>

        {/* Value Proposition */}
        <section ref={valueRef}
          style={{
            background: "#fff",
            padding: "56px 0 62px",
            minHeight: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <div style={{
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "48px"
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{
                color: "#170961",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "2.18rem",
                marginBottom: "12px"
              }}>Value Proposition</h2>
              <div style={{
                fontSize: "1.1rem",
                color: "#242424",
                marginBottom: "23px"
              }}>Why Choose CodingPlayGround Academy?</div>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "1.09rem"
              }}>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Industry-relevant curriculum
                </li>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Internship & job placement support
                </li>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Hands-on projects & mentorship
                </li>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Certificates to showcase skills
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Pathway from beginner to professional
                </li>
              </ul>
            </div>
            <div style={{ flex: 1, display: "flex", gap: "12px", justifyContent: "center" }}>
              <img src={valuePropImg} alt="Value Proposition" style={{
                width: "260px",
                borderRadius: "17px",
                boxShadow: "0 4px 16px rgba(36,36,36,0.11)"
              }} />
            </div>
          </div>
        </section>

        {/* Unique Benefits */}
        <section ref={uniqueRef}
          style={{
            background: "#E6E4F5",
            padding: "54px 0 70px",
            minHeight: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <div style={{
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "45px"
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{
                color: "#170961",
                fontWeight: 900,
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: "2.18rem",
                marginBottom: "12px"
              }}>Unique Benefit</h2>
              <div style={{
                fontSize: "1.08rem",
                color: "#242424",
                marginBottom: "23px"
              }}>
                What are the benefits associated with choosing CodingPlayGround Academy
              </div>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "1.09rem"
              }}>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Mentorship: Learn from experienced developers and educators.
                </li>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Hands-On Projects: Build real applications, not just theory.
                </li>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Internships: Gain industry exposure with real teams.
                </li>
                <li style={{ marginBottom: "18px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Certificates: Showcase your skills to employers.
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#170961", fontSize: "1.45rem", marginRight: "15px" }}>✔</span>
                  Career Support: Resume crafting, job readiness, and networking.
                </li>
              </ul>
            </div>
            <div style={{ flex: 1, display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
              <img src={uniqueBenefitImg} alt="Unique Benefit" style={{
                width: "250px",
                borderRadius: "28px",
                boxShadow: "0 4px 18px rgba(36,36,36,0.13)",
                transform: "rotate(10deg)"
              }} />
            </div>
          </div>
        </section>

        {/* Testimonials & Success Stories */}
        <section ref={testimonialsRef}
          style={{
            background: "#fff",
            padding: "54px 0 70px",
            minHeight: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <div style={{
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto"
          }}>
            <h2 style={{
              color: "#170961",
              fontWeight: 900,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: "2.18rem",
              marginBottom: "10px",
              textAlign: "center"
            }}>Testimonials & Success stories</h2>
            <div style={{
              fontSize: "1.08rem",
              color: "#242424",
              marginBottom: "34px",
              textAlign: "center"
            }}>
              Here’s what our students have to say about their experience learning with us, and how we’ve helped them achieve their goals
            </div>
            <div style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              alignItems: "flex-end"
            }}>
              {/* Amaka Williams */}
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 18px rgba(36,36,36,0.09)",
                padding: "23px 18px 32px 18px",
                width: "305px",
                minHeight: "246px",
                textAlign: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "-18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#170961",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem"
                }}>1</div>
                <div style={{
                  fontSize: "1.09rem",
                  fontWeight: 500,
                  marginBottom: "18px",
                  marginTop: "27px"
                }}>
                  “Joining CodingPlayGround Academy transformed my career. I went from zero experience to landing my first internship in just 6 months.”
                </div>
                <img src={amakaImg} alt="Amaka Williams" style={{
                  width: "73px",
                  height: "73px",
                  borderRadius: "50%",
                  border: "2px dashed #D3CCE6",
                  objectFit: "cover",
                  marginBottom: "10px"
                }} />
                <div style={{
                  fontWeight: 700,
                  color: "#170961",
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: "1.1rem"
                }}>
                  Amaka Williams
                </div>
                <div style={{
                  fontSize: "0.98rem",
                  color: "#242424"
                }}>
                  Frontend Developer Intern
                </div>
              </div>
              {/* David Michael */}
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 18px rgba(36,36,36,0.09)",
                padding: "23px 18px 32px 18px",
                width: "305px",
                minHeight: "246px",
                textAlign: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "-18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#170961",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem"
                }}>2</div>
                <div style={{
                  fontSize: "1.09rem",
                  fontWeight: 500,
                  marginBottom: "18px",
                  marginTop: "27px"
                }}>
                  “The mentorship and hands-on projects gave me confidence to apply for real-world roles.”
                </div>
                <img src={davidImg} alt="David Michael" style={{
                  width: "73px",
                  height: "73px",
                  borderRadius: "50%",
                  border: "2px dashed #D3CCE6",
                  objectFit: "cover",
                  marginBottom: "10px"
                }} />
                <div style={{
                  fontWeight: 700,
                  color: "#170961",
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: "1.1rem"
                }}>
                  David Michael
                </div>
                <div style={{
                  fontSize: "0.98rem",
                  color: "#242424"
                }}>
                  Software Engineering Graduate
                </div>
              </div>
              {/* Partner (School Admin) */}
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 18px rgba(36,36,36,0.09)",
                padding: "23px 18px 32px 18px",
                width: "305px",
                minHeight: "246px",
                textAlign: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  top: "-18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#170961",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem"
                }}>3</div>
                <div style={{
                  fontSize: "1.09rem",
                  fontWeight: 500,
                  marginBottom: "18px",
                  marginTop: "27px"
                }}>
                  “Our students benefited greatly from the Robotics & Coding program. It sparked creativity and problem-solving.”
                </div>
                <img src={partnerImg} alt="Partner" style={{
                  width: "73px",
                  height: "73px",
                  borderRadius: "50%",
                  border: "2px dashed #D3CCE6",
                  objectFit: "cover",
                  marginBottom: "10px"
                }} />
                <div style={{
                  fontWeight: 700,
                  color: "#170961",
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: "1.1rem"
                }}>
                  Partner
                </div>
                <div style={{
                  fontSize: "0.98rem",
                  color: "#242424"
                }}>
                  School Admin
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section ref={programsRef}
          style={{
            background: "#E6E4F5",
            padding: "54px 0 70px",
            minHeight: "240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <div style={{
            maxWidth: "800px",
            width: "100%",
            margin: "0 auto",
            textAlign: "center"
          }}>
            <h2 style={{
              color: "#1C176C",
              fontWeight: 900,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: "2.18rem",
              marginBottom: "24px",
              letterSpacing: "-1px"
            }}>
              Training Programs
            </h2>
            <div style={{
              color: "#222",
              fontSize: "1.15rem",
              marginBottom: "30px"
            }}>
              “We offer structured programs across web & mobile development, UI/UX design, robotics, and more. Explore the full list of roles, languages, and tools we train in our Training Programs.”
            </div>
            <button
              style={{
                background: "#2516A1",
                color: "#fff",
                border: "none",
                borderRadius: "13px",
                fontSize: "1.13rem",
                fontWeight: 700,
                padding: "16px 44px",
                boxShadow: "0 6px 18px rgba(36,36,36,0.13)",
                cursor: "pointer",
                margin: "0 auto",
                outline: "none"
              }}
            >
              Explore Training Programs
            </button>
          </div>
        </section>

        {/* Call To Action: Start your journey */}
        <section style={{
          background: "#fff",
          padding: "54px 0 110px",
          minHeight: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            maxWidth: "900px",
            width: "100%",
            margin: "0 auto",
            textAlign: "left"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px"
            }}>
              <div>
                <h2 style={{
                  color: "#2516A1",
                  fontWeight: 900,
                  fontFamily: "'Montserrat', Arial, sans-serif",
                  fontSize: "2rem",
                  marginBottom: "14px",
                  letterSpacing: "-1px"
                }}>
                  Start Your<br />Journey Today!
                </h2>
                <div style={{
                  color: "#222",
                  fontSize: "1.07rem"
                }}>
                  Apply now to kickstart your career with<br />
                  CodingPlayground Technology
                </div>
              </div>
              <div>
                <button
                  style={{
                    background: "#2516A1",
                    color: "#fff",
                    border: "none",
                    borderRadius: "13px",
                    fontSize: "1.13rem",
                    fontWeight: 700,
                    padding: "16px 44px",
                    boxShadow: "0 6px 18px rgba(36,36,36,0.13)",
                    cursor: "pointer",
                    outline: "none",
                    marginTop: "16px"
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}