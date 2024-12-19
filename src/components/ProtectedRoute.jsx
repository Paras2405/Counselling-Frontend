import React from "react";
import { Navigate } from "react-router-dom";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth-token"); // Check if user has a valid token

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
