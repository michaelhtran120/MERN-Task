// React / Library imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import LogIn from "./pages/LogIn/LogIn.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import NavHeader from "./components/NavHeader/NavHeader.tsx";

// Style imports

// Component imports

function App() {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
