import React from 'react';
import './index.css';

function LogoutModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <div className="logout-modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="confirm-btn" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;