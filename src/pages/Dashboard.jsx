import React from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <p>This is a protected page that only authenticated users can see.</p>
      {/* Aquí puedes agregar más HTML y CSS para estilizar la página */}
    </div>
  );
}

export default Dashboard;
