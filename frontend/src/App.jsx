import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user info from backend API
  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      // Adjust as needed depending on backend user data shape
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
    // You can replace this with a nicer loading spinner or skeleton UI if you want
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <Routes>
        {/* Root route renders Home if logged in, else redirects to Login */}
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" replace />}
        />
        {/* Login route redirects authenticated users to dashboard */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <Login />}
        />
        {/* Signup route redirects authenticated users to dashboard */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" replace /> : <Signup />}
        />
        {/* Dashboard is protected - requires logged in user */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/login" replace />}
        />
        {/* Catch-all route redirects based on user auth status */}
        <Route
          path="*"
          element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
