import React from "react";
import { useState } from "react";
// Import all your page components
import Home from "./Home";
import AboutUs from "./AboutUs";
import ProductServices from "./ProductsAndServices";
import TrainingPrograms from "./TrainingPrograms";
import Team from "./Team";
import Careers from "./Careers";
import Partnership from "./Partnerships";
import ContactUs from "./ContactUs";

// Simple navigation bar
const pages = [
  { name: "Home", component: <Home /> },
  { name: "About Us", component: <AboutUs /> },
  { name: "Product & Services", component: <ProductServices /> },
  { name: "Training Programs", component: <TrainingPrograms /> },
  { name: "Our Team", component: <Team /> },
  { name: "Careers", component: <Careers /> },
  { name: "Partnership", component: <Partnership /> },
  { name: "Contact Us", component: <ContactUs /> },
];

function App() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div>
      {/* Custom navigation bar for switching screens */}
      <nav style={{
        background: "#fff",
        borderBottom: "1.5px solid #E7E4F5",
        padding: "0 0 0 32px",
        fontFamily: "'Inter', Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        height: "48px"
      }}>
        {pages.map((page, idx) => (
          <button
            key={page.name}
            style={{
              background: "none",
              border: "none",
              color: activePage === idx ? "#170961" : "#242424",
              fontWeight: activePage === idx ? 700 : 500,
              fontSize: "1.07rem",
              padding: "0 18px",
              cursor: "pointer",
              borderBottom: activePage === idx ? "2px solid #170961" : "2px solid transparent",
              outline: "none",
            }}
            onClick={() => setActivePage(idx)}
          >
            {page.name}
          </button>
        ))}
      </nav>

      {/* Render the selected page */}
      <div>
        {pages[activePage].component}
      </div>
    </div>
  );
}

export default App;