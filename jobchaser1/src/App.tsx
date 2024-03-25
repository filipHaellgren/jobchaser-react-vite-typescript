import React from 'react';
import "./index.css";
import Navbar from "./Navbar"
import Jobpage from "./pages/jobpage"
import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const App: React.FC = () => {
    return (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/pages/Register" element={<Register />} />
              <Route path="/pages/Login" element={<Login />} />
              <Route path="/pages/jobpage" element={<Jobpage />} />
            </Routes>
          </div>
        </>
    );
};

export default App;