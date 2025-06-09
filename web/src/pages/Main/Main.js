import React from 'react';
import Table from '../../components/Table/Table';

const MainPage = () => {
  const products = [
    {
      name: 'Iphone Back 256 GB',
      description: 'Iphone usado com 256 GB de armazenamento',
      price: '500.00',
      brand: 1,
      condition: 3,
      location: 'Lisboa',
      date: '2023/12/10',
      category: 1
    },
    {
      name: 'Samsung Galaxy S21',
      description: 'Smartphone com 128 GB de armazenamento',
      price: '100.00',
      brand: 2,
      condition: 2,
      location: 'Aveiro',
      date: '2023/12/07',
      category: 1
    }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <Table products={products} />
    </div>
  );
};

export default MainPage;
