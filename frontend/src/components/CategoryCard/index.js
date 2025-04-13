import React from 'react';
import './index.css';

function CategoryCard({ category, onEdit }) {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} className="category-image" />
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-count">{category.itemCount} items</p>
        <button className="edit-button" onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}

export default CategoryCard;