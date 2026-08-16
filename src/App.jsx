import "./index.css";
import { Outlet } from 'react-router-dom';

import React from 'react';
import Sidebar from "./rafi/SideBar";
import Navbar from "./rafi/NavBar";

const App22 = () => {
  return (
    <div className="flex min-h-screen overflow-y-scroll bg-[#030503] grid-bg">
      <div className="flex">
        <Sidebar />
      </div>

      <div className="flex-1 min-h-screen transition-all duration-300 md:ml-72 md:mr-16">
        <Outlet />
      </div>

      <div className="flex-none">
        <Navbar />
      </div>
    </div>
  );
};

export default App22;
