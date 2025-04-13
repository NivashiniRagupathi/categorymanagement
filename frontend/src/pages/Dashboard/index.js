import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import DashboardHome from '../../pages/DashboardHome';
import Categories from '../../pages/Categories';

function Dashboard() {
  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      <Sidebar />
      <div className="main-content" style={{ flex: 1 }}>
        <div className="content" style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;