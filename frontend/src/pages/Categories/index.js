import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import CategoryCard from '../../components/CategoryCard';
import EditCategoryModal from '../../components/EditCategoryModal';
import './index.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Load 20 sample categories
  useEffect(() => {
    const sampleCategories = [
      { id: 1, name: 'Electronics', image: 'https://aitdgoa.edu.in/wp-content/uploads/sites/5/2020/08/ece.jpg', itemCount: 42 },
      { id: 2, name: 'Fashion', image: 'https://img.freepik.com/free-vector/fashion-history-clothing-design-evolution-from-early-20th-century-modern-times-flat-vector-illustration_1284-84946.jpg', itemCount: 30 },
      { id: 3, name: 'Home Decor', image: 'https://homafy.com/wp-content/uploads/2023/05/Modern-Home-Metal-Wall-Art.jpeg', itemCount: 18 },
      { id: 4, name: 'Books', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', itemCount: 24 },
      { id: 5, name: 'Sports', image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?semt=ais_hybrid&w=740', itemCount: 36 },
      { id: 6, name: 'Toys', image: 'https://etimg.etb2bimg.com/thumb/msid-99459111,imgsize-148476,width-1200,height=765,overlay-etretail/toys-kids-and-baby/toys/top-global-firms-approaching-indian-toy-makers-for-sourcing-goods-official.jpg', itemCount: 15 },
      { id: 7, name: 'Beauty', image: 'https://static.vecteezy.com/system/resources/thumbnails/005/990/830/small_2x/feminine-line-art-beauty-women-natural-logo-design-template-free-vector.jpg', itemCount: 28 },
      { id: 8, name: 'Groceries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9RRp8J_v5DzFsNhhiM5jCo6tCF-R9IzAZQ&s', itemCount: 19 },
      { id: 9, name: 'Footwear', image: 'https://images.hindustantimes.com/img/2022/12/22/550x309/istockphoto-1279108197-170667a_1671687926903_1671687937504_1671687937504.jpg', itemCount: 22 },
      { id: 10, name: 'Health & Wellness', image: 'https://globalwellnessinstitute.org/wp-content/uploads/2019/05/wellnessinfographic.png', itemCount: 16 },
      { id: 11, name: 'Music', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViSkpvbmjpMA3P4HSawBt-tB1-Qea5o7-2g&s', itemCount: 12 },
      { id: 12, name: 'Gaming', image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg', itemCount: 25 },
      { id: 13, name: 'Pets', image: 'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg', itemCount: 10 },
      { id: 14, name: 'Office Supplies', image: 'https://5.imimg.com/data5/AK/ZN/CZ/SELLER-15948769/office-stationery-products.jpg', itemCount: 13 },
      { id: 15, name: 'Art & Craft', image: 'https://i.ytimg.com/vi/wzdMqeMg9XA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1D_z44lIjgRCkU2m7SWfUyn0hEw', itemCount: 11 },
      { id: 16, name: 'Automotive', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFxDxlQhuz8PGqeiP5ufHt_sNKvRnAlHUHw&s', itemCount: 20 },
      { id: 17, name: 'Gardening', image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/04/04230832/Gardening-tools-Must-have-tools-for-growing-a-home-garden.jpg', itemCount: 17 },
      { id: 18, name: 'Jewelry', image: 'https://jewelemarket.com/cdn/shop/files/bridalcombo31green.jpg?v=1721033555', itemCount: 9 },
      { id: 19, name: 'Kitchenware', image: 'https://m.media-amazon.com/images/I/71b054FatZS.jpg', itemCount: 14 },
      { id: 20, name: 'Travel Gear', image: 'https://hips.hearstapps.com/hmg-prod/images/ghi-travelgear-1669237611.png?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*', itemCount: 7 },
    ];
    setCategories(sampleCategories);
  }, []);

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleAddCategory = () => {
    setSelectedCategory(null); // null means we're adding a new one
    setIsModalOpen(true);
  };

  return (
    <div className="categories-container">
      <Sidebar />
      <div className="main-content">
        <div className="categories-header">
          <h2>All Categories</h2>
          <button className="add-category-btn" onClick={handleAddCategory}>
            + Add Category
          </button>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onEdit={() => handleEdit(cat)}
            />
          ))}
        </div>

        <EditCategoryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          category={selectedCategory}
          onSave={(updatedCategory) => {
            if (updatedCategory.id) {
              // Update existing
              setCategories((prev) =>
                prev.map((c) =>
                  c.id === updatedCategory.id ? updatedCategory : c
                )
              );
            } else {
              // Add new
              const newCategory = {
                ...updatedCategory,
                id: Date.now(),
                itemCount: 0,
              };
              setCategories((prev) => [...prev, newCategory]);
            }
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default Categories;