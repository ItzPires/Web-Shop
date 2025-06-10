import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { CONDITION_LABELS } from '../../utils/enums/Condition';
import { BRAND_PRODUCTS_LABELS } from '../../utils/enums/Brands';
import { CATEGORIES_PRODUCTS_LABELS } from '../../utils/enums/Categories';
import './Table.css';

/**
 * Table Component
 *
 * @param {array} products - List of products to be displayed.
 *
 */
const Table = ({ products }) => {
    const allColumns = [
        { key: 'name', label: 'Name', fixed: true },
        { key: 'description', label: 'Description' },
        { key: 'price', label: 'Price (€)' },
        { key: 'brand', label: 'Brand' },
        { key: 'condition', label: 'Condition' },
        { key: 'category', label: 'Category' },
        { key: 'location', label: 'Location' },
        { key: 'date', label: 'Date' }
    ];

    const [visibleColumns, setVisibleColumns] = useState(
        allColumns.map(col => col.key)
    );
    const [showSettings, setShowSettings] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const totalPages = Math.ceil(products.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;

    // Function to get the display value based on the key to order
    const getDisplayValue = (key, value) => {
        switch (key) {
            case 'brand':
                return BRAND_PRODUCTS_LABELS[value] || value;
            case 'condition':
                return CONDITION_LABELS[value] || value;
            case 'category':
                return CATEGORIES_PRODUCTS_LABELS[value] || value;
            case 'price':
                return parseFloat(value);
            default:
                return value;
        }
    };

    // Sort products based on the sortConfig
    const sortedProducts = [...products].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const valA = getDisplayValue(sortConfig.key, a[sortConfig.key]);
        const valB = getDisplayValue(sortConfig.key, b[sortConfig.key]);

        const aVal = typeof valA === 'string' ? valA.toLowerCase() : valA;
        const bVal = typeof valB === 'string' ? valB.toLowerCase() : valB;

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });


    // Handle sorting when a column header is clicked
    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                return {
                    key,
                    direction: prev.direction === 'asc' ? 'desc' : 'asc'
                };
            } else {
                return { key, direction: 'asc' };
            }
        });
    };

    // Get the current products for the current page
    const currentProducts = sortedProducts.slice(startIndex, startIndex + rowsPerPage);

    const closeModal = () => setShowSettings(false);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Toggle visibility of columns
    const toggleColumn = (key) => {
        setVisibleColumns((prev) =>
            prev.includes(key)
                ? prev.filter((k) => k !== key)
                : [...prev, key]
        );
    };

    // Format cell values based on their key
    const formatCell = (key, value) => {
        switch (key) {
            case 'brand':
                return BRAND_PRODUCTS_LABELS[value] || value;
            case 'condition':
                return CONDITION_LABELS[value] || value;
            case 'category':
                return CATEGORIES_PRODUCTS_LABELS[value] || value;
            default:
                return value;
        }
    };

    // Reset current page when products or rows per page change
    useEffect(() => {
        setCurrentPage(1);
    }, [products, rowsPerPage]);

    // Symbols used for sorting indicators - https://symbl.cc/pt/collections/arrow-symbols/
    return (
        <div className="table-wrapper">
            <Modal isOpen={showSettings} onClose={closeModal}>
                <h3 className="modal-title">Show/Hide Columns</h3>
                <div className="modal-checkboxes">
                    {allColumns.map(col => (
                        <div key={col.key}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={visibleColumns.includes(col.key)}
                                    disabled={col.fixed}
                                    onChange={() => toggleColumn(col.key)}
                                />
                                {col.label}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="modal-select">
                    <h3 className="modal-title">Items per Page</h3>
                    <select
                        value={rowsPerPage}
                        onChange={(e) => {
                            setRowsPerPage(parseInt(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        {[5, 10, 20, 50].map(num => (
                            <option key={num} value={num}>{num} items</option>
                        ))}
                    </select>
                </div>
            </Modal>

            <div className="table-settings-button">
                <Button onClick={() => setShowSettings(true)}>Settings</Button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        {visibleColumns.map((key) => {
                            const col = allColumns.find(c => c.key === key);
                            return <th key={key} onClick={() => handleSort(key)} className="sortable-column">
                                {col?.label || key}
                                {sortConfig.key === key && (
                                    <span className="sort-indicator">
                                        {sortConfig.direction === 'asc' ? '⮝' : '⮟'}
                                    </span>
                                )}
                            </th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((p, index) => (
                        <tr key={index}>
                            {visibleColumns.map((key) => (
                                <td key={key}>{formatCell(key, p[key])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <Button onClick={prevPage} disabled={currentPage === 1}>Previous</Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
            </div>
        </div>
    );
};

export default Table;
