// ShippingPage.jsx
import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    gap: '2rem',
  },
  mainContent: {
    flex: 2,
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  section: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
  },
  sectionHeader: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
  },
  addressOption: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '1rem',
  },
  selectedAddress: {
    border: '2px solid #ffd43b',
  },
  addButton: {
    backgroundColor: '#ffd43b',
    color: '#333',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
  },
  itemDetails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
  },
  itemImage: {
    width: '80px',
    height: '80px',
    marginRight: '1rem',
  },
  itemInfo: {
    flex: 1,
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: '1rem',
    color: '#333',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  continueButton: {
    backgroundColor: '#ffd43b',
    color: '#333',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
  },
  giftOption: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#555',
  },
};

const ShippingPage = () => {
  const [selectedAddress, setSelectedAddress] = useState('address1');
  const addresses = [
    {
      id: 'address1',
      name: 'Imran Khan',
      address: 'Museum of Rajas, Sylhet Sadar, Sylhet 3100.',
    },
    {
      id: 'address2',
      name: 'Imran Khan',
      address: 'Al Hamra City (10th Floor), Hazrat Shahjalal Road, Sylhet, Bangladesh',
    },
  ];

  const items = [
    {
      id: 1,
      name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      price: 47.0,
      image: 'https://via.placeholder.com/80',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Lavazza Coffee Blends - Try the Italian Espresso',
      price: 106.0,
      image: 'https://via.placeholder.com/80',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Qualità Oro Mountain Grown - Espresso Coffee Beans',
      price: 38.65,
      image: 'https://via.placeholder.com/80',
      quantity: 1,
    },
  ];

  const orderSummary = {
    subtotal: 191.65,
    shipping: 10.0,
    total: 201.65,
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Shipping Information */}
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>1. Shipping, arrives between Mon, May 16 – Tue, May 24</h2>
            <p>Shipping address</p>
            {addresses.map((address) => (
              <div
                key={address.id}
                style={{
                  ...styles.addressOption,
                  ...(selectedAddress === address.id ? styles.selectedAddress : {}),
                }}
              >
                <div>
                  <input
                    type="radio"
                    checked={selectedAddress === address.id}
                    onChange={() => setSelectedAddress(address.id)}
                    style={{ marginRight: '1rem' }}
                  />
                  <strong>{address.name}</strong>
                  <p>{address.address}</p>
                </div>
                <button>Edit</button>
              </div>
            ))}
            <button style={styles.addButton}>+ Add a new address</button>
          </div>

          {/* Item Details */}
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>Items details</h2>
            {items.map((item) => (
              <div key={item.id} style={styles.itemDetails}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  <p style={{ color: 'green' }}>In Stock</p>
                </div>
                <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={styles.sectionHeader}>Order Summary</h3>
          <p>Subtotal (items): ${orderSummary.subtotal.toFixed(2)}</p>
          <p>Price (Total): ${orderSummary.subtotal.toFixed(2)}</p>
          <p>Shipping: ${orderSummary.shipping.toFixed(2)}</p>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#333' }}>
            Estimated Total: ${orderSummary.total.toFixed(2)}
          </h4>
          <button style={styles.continueButton}>Continue to checkout</button>
          <div style={styles.giftOption}>
            🎁 Send this order as a gift. Available items will be shipped to your gift recipient.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
