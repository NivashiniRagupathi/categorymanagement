import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutModal from '../../components/LogoutModal';
import './index.css';

function Sidebar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <>
      <div className="sidebar">
        <h2 className="logo">Revisit</h2>
        <ul className="sidebar-links">
          <li onClick={() => navigate('/dashboard')}>Dashboard</li>
          <li onClick={() => navigate('/categories')}>Categories</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <LogoutModal
        isOpen={isModalOpen}
        onConfirm={confirmLogout}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Sidebar;