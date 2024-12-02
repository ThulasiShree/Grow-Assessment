
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Contents from "./MainContent";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex bg-gray-200 shadow-lg">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main >
          <Contents/>
          </main>
      </div>
    </div>
  );
};

export default Dashboard;
