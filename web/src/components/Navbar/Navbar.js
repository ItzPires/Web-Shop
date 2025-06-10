import React from 'react';
import './Navbar.css';

/**
 * Navbar component
 *
 * @param {function} onFileUpload - A callback that is called with the selected
 * file as an argument when a file is uploaded.
 */
const Navbar = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Product Dashboard</h1>
      <div>
        <label htmlFor="upload" className="app-button">
          + Add Products
        </label>
        <input
          id="upload"
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="file-input-hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
