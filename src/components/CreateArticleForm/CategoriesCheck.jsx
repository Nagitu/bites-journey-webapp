import React from 'react'

const CategoriesCheck = ({ categories, selectedCategories, handleCategoryChange }) => {
  return (
    <div className="mb-4 relative flex flex-col items-center">
      <label htmlFor="categories" className="text-black bg-white px-1">
        Categories
      </label>
      <div className="flex flex-wrap text-black">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id_category} className="mr-4">
              <label>
                <input
                  type="checkbox"
                  value={category.id_category}
                  checked={selectedCategories.includes(parseInt(category.id_category, 10))}
                  onChange={() => handleCategoryChange(parseInt(category.id_category, 10))}
                />
                {category.title}
              </label>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  )
}

export default CategoriesCheck