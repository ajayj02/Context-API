import { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./main.css";

const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", backgroundColor: "aqua", color: "white" }}>
      <p className="item">This is the topbar</p>
      <button
        className="item"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go to dashboard
      </button>
      <button
        className="item"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to landing Page
      </button>
    </div>
  );
}

export default App;
