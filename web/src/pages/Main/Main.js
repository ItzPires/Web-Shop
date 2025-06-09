import React from 'react';

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
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            {p.name} – {p.description} – {p.price}€ – {p.brand} – {p.condition} – {p.location} – {p.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
