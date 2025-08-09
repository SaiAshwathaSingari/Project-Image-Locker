import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register"; 
import About from "../pages/Signup/about"; 
import Terms from "../pages/Signup/terms";
import Privacy from "../pages/Signup/privacy";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user info from backend API
  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user?._json || data.user || null);
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <Routes>
        {/* Root */}
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" replace />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" replace /> : <Signup />}
        />

        {/* Register page - PUBLIC or PROTECTED, up to you */}
        <Route
          path="/register"
          element={<Register />} // can make it protected if needed
        />

        {/* About Us */}
        <Route
          path="/about"
          element={<About />} // Public page
        />

        {/* Terms of Service */}
        <Route
          path="/terms"
          element={<Terms />} // Public page
        />
        {/* Terms of Service */}
        <Route
          path="/privacy"
          element={<Privacy />} // Public page
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/login" replace />}
        />

        {/* Catch-all */}
        <Route
          path="*"
          element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
