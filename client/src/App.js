// React / Library imports
import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

// Component Imports
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import NavHeader from "./components/NavHeader/NavHeader.jsx";

// Style imports

// Component imports

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route element={<Protected />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

function Layout() {
  return (
    <>
      <NavHeader />
      <Outlet />
    </>
  );
}

function Protected() {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <Navigate to="login" />;
  }
  return <Outlet />;
}

export default App;
