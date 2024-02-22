import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import {Landing } from "./components/Landing"
import "./main.css"


function App() {

  return (
    <div>
      <div style={{display: "flex",backgroundColor: "black", color: "white"}}>
          <p className="item">This is the topbar</p>
          <button className="item">Go to dashboard</button>
          <button className="item">Go to landing Page</button>
      </div>
      <BrowserRouter>
        <Routes>
           <Route path="/dashboard" element={<Dashboard />}></Route>
           <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
