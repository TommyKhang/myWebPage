// FavoriteList.jsx
import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  mainContent: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
  },
  productList: {
    marginBottom: '2rem',
  },
  productItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
  },
  checkbox: {
    marginRight: '1rem',
  },
  productImage: {
    width: '80px',
    height: '80px',
    marginRight: '1rem',
    borderRadius: '8px',
  },
  productDetails: {
    flex: 1,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#333',
  },
  stockStatus: {
    color: 'green',
    fontWeight: '500',
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  checkOutButton: {
    backgroundColor: '#ff9a9e',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
  },
  continueShopping: {
    textAlign: 'left',
    color: '#007bff',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'block',
    marginTop: '1rem',
  },
  allCheckOutButton: {
    backgroundColor: '#ff9a9e',
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '1rem',
    textAlign: 'center',
    marginTop: '1.5rem',
    cursor: 'pointer',
  },
};

const FavoriteList = () => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Coffee Beans - Espresso Arabica and Robusta Beans",
      price: 47.00,
      image: 'https://via.placeholder.com/80',
      stock: "In Stock",
      brand: "LavAzza",
      quantity: 1,
    },
    {
      id: 2,
      name: "Lavazza Coffee Blends - Try the Italian Espresso",
      price: 53.00,
      image: 'https://via.placeholder.com/80',
      stock: "In Stock",
      brand: "LavAzza",
      quantity: 2,
    },
    {
      id: 3,
      name: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
      price: 38.65,
      image: 'https://via.placeholder.com/80',
      stock: "In Stock",
      brand: "LavAzza",
      quantity: 1,
    },
  ];

  const toggleSelectItem = (id) => {
    setSelectedItems(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const isItemSelected = (id) => selectedItems.has(id);

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h2 style={styles.title}>Favorite List</h2>
        <p>{products.length} items</p>

        <div style={styles.productList}>
          {products.map(product => (
            <div key={product.id} style={styles.productItem}>
              <input
                type="checkbox"
                checked={isItemSelected(product.id)}
                onChange={() => toggleSelectItem(product.id)}
                style={styles.checkbox}
              />
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <div style={styles.productDetails}>
                <h4>{product.name}</h4>
                <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                <p style={styles.stockStatus}>{product.stock}</p>
              </div>
              <div style={styles.actionButtons}>
                <div style={styles.quantityControl}>
                  <button>-</button>
                  <span>{product.quantity}</span>
                  <button>+</button>
                </div>
                <button style={styles.checkOutButton}>Check Out</button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.continueShopping}>Continue Shopping</div>
        <div style={styles.allCheckOutButton}>All Check Out</div>
      </div>
    </div>
  );
};

export default FavoriteList;
