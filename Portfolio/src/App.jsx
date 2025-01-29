import React, { useState } from "react";
import PortfolioBody from "./PortfolioBody"; // The Home Page Component
import Contact from "./contact"; // The Contact Page Component
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");

  const goToContact = () => setPage("contact");
  const goToHome = () => setPage("home");

  return (
    <div className="app">
      {page === "home" && <PortfolioBody goToContact={goToContact} />}
      {page === "contact" && <Contact goToHome={goToHome} />}
    </div>
  );
};

export default App;
