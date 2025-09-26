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
import ApplicationForm2 from "./ApplicationForm2"; // Import ApplicationForm2
import StartProject from "./StartProject"; // Import StartProject.jsx
import playgroundLogo from "./assets/Coding PLayground 1.png";


function App() {
  const [activePage, setActivePage] = useState(0);
  const [showJoinAcademy, setShowJoinAcademy] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showApplicationForm2, setShowApplicationForm2] = useState(false); // Add state for ApplicationForm2
  const [showStartProject, setShowStartProject] = useState(false); // Control for StartProject

  const handleShowJoinAcademy = () => setShowJoinAcademy(true);
  const handleShowApplicationForm = () => setShowApplicationForm(true);
  const handleShowApplicationForm2 = () => setShowApplicationForm2(true); // Handler for ApplicationForm2
  const handleShowStartProject = () => setShowStartProject(true); // Handler for StartProject
  const handleGoBack = () => {
    setShowJoinAcademy(false);
    setShowApplicationForm(false);
    setShowApplicationForm2(false); // Reset ApplicationForm2 state
    setShowStartProject(false);
  };

  // Navigation handler from ApplicationForm
  const handleNavigateFromApplicationForm = (pageIndex) => {
    setActivePage(pageIndex);
    setShowApplicationForm(false);
  };

  // Navigation handler from ApplicationForm2
  const handleNavigateFromApplicationForm2 = (pageIndex) => {
    setActivePage(pageIndex);
    setShowApplicationForm2(false);
  };

  // Navigation handler for StartProject
  const handleNavigateFromStartProject = (pageIndex) => {
    setActivePage(pageIndex);
    setShowStartProject(false);
  };

  const pages = [
    { name: "Home", component: <Home onApplyNow={handleShowJoinAcademy} onStartProject={handleShowStartProject} /> }, // Pass StartProject handler to Home or where relevant
    { name: "About Us", component: <AboutUs /> },
    { name: "Product & Services", component: <ProductServices /> },
    { name: "Training Programs", component: <TrainingPrograms onApplyNow={handleShowApplicationForm2} /> }, // Pass ApplicationForm2 handler
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

  // Determine which page should be highlighted in navigation
  const getActivePageForNav = () => {
    if (showApplicationForm) return 5; // Careers page index
    if (showApplicationForm2) return 3; // Training Programs page index
    return activePage;
  };

  return (
    <div>
      {/* Custom navigation bar for switching screens */}
      {(!showJoinAcademy && !showStartProject && !showApplicationForm2) && (
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
                      color: getActivePageForNav() === idx ? "#170961" : "#242424",
                      fontWeight: getActivePageForNav() === idx ? 700 : 500,
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
                      if (showApplicationForm) {
                        handleNavigateFromApplicationForm(idx);
                      } else if (showApplicationForm2) {
                        handleNavigateFromApplicationForm2(idx);
                      } else {
                        setActivePage(idx);
                      }
                    }}
                  >
                    {page.name}
                  </button>
                  {/* Selected underline directly below the page name, centered in navbar */}
                  {getActivePageForNav() === idx && (
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

      {/* Render JoinAcademy, ApplicationForm, ApplicationForm2, StartProject, or selected page */}
      <div>
        {showJoinAcademy ? (
          <JoinAcademy onBack={handleGoBack} onApplyNow={handleShowApplicationForm} />
        ) : showApplicationForm ? (
          <ApplicationForm 
            onBack={handleGoBack} 
            onNavigate={handleNavigateFromApplicationForm}
          />
        ) : showApplicationForm2 ? (
          <ApplicationForm2 
            onBack={handleGoBack} 
            onNavigate={handleNavigateFromApplicationForm2}
          />
        ) : showStartProject ? (
          <StartProject 
            onBack={handleGoBack} 
            onNavigate={handleNavigateFromStartProject}
            activePage={activePage}
          />
        ) : (
          pages[activePage].component
        )}
      </div>
    </div>
  );
}

export default App;