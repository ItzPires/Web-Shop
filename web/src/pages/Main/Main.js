import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import Filters from '../../components/Filters/Filters';
import Navbar from '../../components/Navbar/Navbar';
import Service from '../../services/Service';
import './Main.css';

/**
 * MainPage component that manages and renders the main layout of the application.
 * 
 * This component handles the state and logic for:
 * - Managing a list of products, which can be uploaded via a file.
 * - Filtering products based on category, brand, condition, and location.
 * - Rendering a table of products that match the selected filters.
 * 
 */
const MainPage = () => {
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    condition: [],
    location: []
  });

  // Function to get unique values for filter options - Ex. get unique categories, brands, etc.
  const getUniqueValues = (key) => {
    const values = products.map((p) => p[key]);
    return [...new Set(values)];
  };

  // Function to handle filter changes - Ex. when a user selects/deselects a filter option
  const handleFilterChange = (filter, value) => {
    const newFilters = { ...filters };

    if (newFilters[filter].includes(value)) {
      newFilters[filter] = newFilters[filter].filter(v => v !== value);
    } else {
      newFilters[filter] = [...newFilters[filter], value];
    }

    setFilters(newFilters);
  };

  // Function to handle file upload and parse JSON data
  const handleFileUpload = async (file) => {
    try {
      const processedProducts = await Service.processFile(file);

      if (processedProducts.length === 0) {
        alert('No valid products found in the file');
        return;
      }

      setProducts(processedProducts);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      filters.category.length === 0 || filters.category.includes(p.category);
    const brandMatch =
      filters.brand.length === 0 || filters.brand.includes(p.brand);
    const conditionMatch =
      filters.condition.length === 0 || filters.condition.includes(p.condition);
    const locationMatch =
      filters.location.length === 0 || filters.location.includes(p.location);

    return categoryMatch && brandMatch && conditionMatch && locationMatch; // If true, product matches all selected filters
  });

  // Render the main page with filters and table - If no products, show a message, else show filters and table
  return (
    <div className="main-page-wrapper">
      <Navbar onFileUpload={handleFileUpload} />

      {!filteredProducts.length ? (
        <div className="no-products-container">
          <p className="no-products-message">No products available</p>
        </div>
      ) : (
        <div className="main-page-container">
          <div className="sidebar">
            <Filters
              filters={filters}
              onChange={handleFilterChange}
              filterOptions={{
                category: getUniqueValues('category'),
                brand: getUniqueValues('brand'),
                condition: getUniqueValues('condition'),
                location: getUniqueValues('location'),
              }}
            />
          </div>
          <div className="content">
            <Table products={filteredProducts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
