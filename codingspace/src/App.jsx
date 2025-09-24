import React, { useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ProductServices from "./ProductsAndServices";
import TrainingPrograms from "./TrainingPrograms";
import Team from "./Team";
import Careers from "./Careers";
import Partnership from "./Partnerships";
import ContactUs from "./ContactUs";
import JoinAcademy from "./JoinAcademy";
import ApplicationForm from "./ApplicationForm";
import StartProject from "./StartProject"; // Import StartProject.jsx
import logo from "C:/Users/SiLa/Downloads/CodingSpace/codingspace/src/assets/Coding PLayground 1.png";

function App() {
  const [activePage, setActivePage] = useState(0);
  const [showJoinAcademy, setShowJoinAcademy] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showStartProject, setShowStartProject] = useState(false); // Control for StartProject

  const handleShowJoinAcademy = () => setShowJoinAcademy(true);
  const handleShowApplicationForm = () => setShowApplicationForm(true);
  const handleShowStartProject = () => setShowStartProject(true); // Handler for StartProject
  const handleGoBack = () => {
    setShowJoinAcademy(false);
    setShowApplicationForm(false);
    setShowStartProject(false);
  };

  const pages = [
    { name: "Home", component: <Home onApplyNow={handleShowJoinAcademy} onStartProject={handleShowStartProject} /> }, // Pass StartProject handler to Home or where relevant
    { name: "About Us", component: <AboutUs /> },
    { name: "Product & Services", component: <ProductServices /> },
    { name: "Training Programs", component: <TrainingPrograms /> },
    { name: "Our Team", component: <Team /> },
    { name: "Careers", component: <Careers onApply={handleShowApplicationForm} /> },
    { name: "Partnership", component: <Partnership /> },
    { name: "Contact Us", component: <ContactUs /> },
    // Do not add StartProject to navigation header
  ];

  // NAVBAR HEIGHT
  const navBarHeight = 78;
  // Height allocated for nav buttons and underline in center of nav bar
  const navButtonContainerHeight = 42;

  return (
    <div>
      {/* Custom navigation bar for switching screens */}
      {(!showJoinAcademy && !showApplicationForm && !showStartProject) && (
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
          {/* Enlarged logo at the left end */}
          <div style={{
            height: `${navBarHeight}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "26px",
            paddingRight: "10px"
          }}>
            <img
              src={logo}
              alt="Coding Playground Logo"
              style={{
                height: "58px",
                width: "auto",
                objectFit: "contain"
              }}
            />
          </div>
          {/* Navigation buttons */}
          <div style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            height: `${navBarHeight}px`,
            marginLeft: "14px",
            position: "relative",
            justifyContent: "flex-start",
          }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: `${navButtonContainerHeight}px`,
                position: "absolute",
                top: "50%",
                left: 0,
                transform: `translateY(-50%)`,
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              {pages.map((page, idx) => (
                <div
                  key={page.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    position: "relative",
                    padding: "0 18px"
                  }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: activePage === idx ? "#170961" : "#242424",
                      fontWeight: activePage === idx ? 700 : 500,
                      fontSize: "1.08rem",
                      cursor: "pointer",
                      outline: "none",
                      padding: "0",
                      marginBottom: "0",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => setActivePage(idx)}
                  >
                    {page.name}
                  </button>
                  {/* Selected underline directly below the page name, centered in navbar */}
                  {activePage === idx && (
                    <div style={{
                      width: "120%", // Enlarged line width
                      height: "2px", // Reduced thickness
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
      )}

      {/* Render JoinAcademy, ApplicationForm, StartProject, or selected page */}
      <div>
        {showJoinAcademy ? (
          <JoinAcademy onBack={handleGoBack} onApplyNow={handleShowApplicationForm} />
        ) : showApplicationForm ? (
          <ApplicationForm onBack={handleGoBack} />
        ) : showStartProject ? (
          <StartProject onBack={handleGoBack} />
        ) : (
          pages[activePage].component
        )}
      </div>
    </div>
  );
}

export default App;