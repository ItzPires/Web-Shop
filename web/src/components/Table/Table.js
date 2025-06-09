import React from 'react';
import { CONDITION_LABELS } from '../../utils/enums/Condition';
import { BRAND_PRODUCTS_LABELS } from '../../utils/enums/Brands';
import { CATEGORIES_PRODUCTS_LABELS } from '../../utils/enums/Categories';

const Table = ({ products }) => {
    if (!products.length) return <p>No products available.</p>;

    return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price (€)</th>
                    <th>Brand</th>
                    <th>Condition</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p, index) => (
                    <tr key={index}>
                        <td>{p.name}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{BRAND_PRODUCTS_LABELS[p.brand]}</td>
                        <td>{CONDITION_LABELS[p.condition]}</td>
                        <td>{CATEGORIES_PRODUCTS_LABELS[p.category]}</td>
                        <td>{p.location}</td>
                        <td>{p.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
