import React from 'react';
import './CategoryFilter.css';

export default function CategoryFilter({ category, onCategoryChange }) {
  const categories = ['All', 'Fitness', 'Nutrition', 'Mental Health'];

  return (
    <div className="category-filter">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
