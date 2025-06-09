import React from 'react';

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
                        <td>{p.brand}</td>
                        <td>{p.condition}</td>
                        <td>{p.location}</td>
                        <td>{p.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
