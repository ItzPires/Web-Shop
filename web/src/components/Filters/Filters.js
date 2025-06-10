import React from 'react';
import { CONDITION_LABELS } from '../../utils/enums/Condition';
import { BRAND_PRODUCTS_LABELS } from '../../utils/enums/Brands';
import { CATEGORIES_PRODUCTS_LABELS } from '../../utils/enums/Categories';
import './Filters.css';

/**
 * Filters component for filtering products.
 *
 * This component displays filter options for categories, brands, conditions,
 * and locations. Users can select or deselect filter options using checkboxes.
 *
 * @param {Object} filters - An object containing arrays of selected filter values
 * for each filter category (e.g., category, brand, condition, location).
 * @param {function} onChange - A callback function to handle changes in filter
 * selections. It receives the filter category and the selected value as arguments.
 * @param {Object} filterOptions - An object containing arrays of available filter
 * options for each filter category.
 */
const Filters = ({ filters, onChange, filterOptions }) => {
    const handleCheckboxChange = (section, value) => {
        onChange(section, value);
    };

    // Function to render filter options for a given section
    const renderFilterOptions = (section, labelMap = null) => {
        return (
            <div className="filter-group">
                <strong>{section.charAt(0).toUpperCase() + section.slice(1)}</strong>
                {filterOptions[section]?.map((value) => (
                    <div key={value} className="filter-option">
                        <label>
                            <input
                                type="checkbox"
                                checked={filters[section]?.includes(value)}
                                onChange={() => handleCheckboxChange(section, value)}
                            />
                            {labelMap ? labelMap[value] : value}
                        </label>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="filters-wrapper">
            <h3>Filters</h3>

            {renderFilterOptions('category', CATEGORIES_PRODUCTS_LABELS)}
            {renderFilterOptions('brand', BRAND_PRODUCTS_LABELS)}
            {renderFilterOptions('condition', CONDITION_LABELS)}
            {renderFilterOptions('location')}
        </div>
    );
};

export default Filters;
