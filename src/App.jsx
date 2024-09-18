import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import SingIn from "./pages/Sing in";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/new" element={<SingIn />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;