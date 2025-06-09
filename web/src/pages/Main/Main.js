import React from 'react';
import Table from '../../components/Table/Table';

const MainPage = () => {
  const products = [
    {
      name: 'Iphone Back 256 GB',
      description: 'Iphone usado com 256 GB de armazenamento',
      price: '500.00',
      brand: 'Iphone',
      condition: 'Boas condições',
      location: 'Lisboa',
      date: '2023/12/10'
    },
    {
      name: 'Samsung Galaxy S21',
      description: 'Smartphone com 128 GB de armazenamento',
      price: '100.00',
      brand: 'Samsung',
      condition: 'Como novo',
      location: 'Aveiro',
      date: '2023/12/07'
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
