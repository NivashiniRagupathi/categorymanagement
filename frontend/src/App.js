import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar'; // Import custom Navbar

const App = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="app-container">
      <Navbar auth={auth} logout={logout} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;