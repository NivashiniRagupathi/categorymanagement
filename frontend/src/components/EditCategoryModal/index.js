import React, { useState, useEffect } from 'react';
import './index.css';

function EditCategoryModal({ isOpen, onClose, onSave, category }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    if (category) {
      setName(category.name);
      setImage(category.image);
      setItemCount(category.itemCount || 0);
    } else {
      setName('');
      setImage('');
      setItemCount(0);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && image.trim()) {
      const updatedCategory = {
        ...category,
        name,
        image,
        itemCount: category?.itemCount || 0
      };
      onSave(updatedCategory);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>{category ? 'Edit Category' : 'Add Category'}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Category Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

<label>
            Item Count:
            <input
              type="number"
              value={itemCount}
              onChange={(e) => setItemCount(e.target.value)}
              min="0"
              required
            />
          </label>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCategoryModal;