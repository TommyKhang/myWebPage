// PaymentPage.jsx
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
  shippingInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shippingAddress: {
    fontSize: '1rem',
    color: '#555',
  },
  shippingMethod: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    border: '1px solid #ddd',
  },
  paymentInput: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '1rem',
  },
  orderSummary: {
    fontWeight: '600',
    fontSize: '1rem',
    color: '#333',
  },
  totalAmount: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#333',
  },
  payButton: {
    backgroundColor: '#ffd43b',
    color: '#333',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    width: '100%',
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
  shippingMethodLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#333',
  },
  priceTag: {
    fontWeight: '600',
    color: '#333',
  },
};

const PaymentPage = () => {
  const [selectedShipping, setSelectedShipping] = useState('FedEx Delivery');
  const shippingOptions = [
    { id: 'fedex', name: 'FedEx Delivery', details: '2-3 days work', price: 'Free' },
    { id: 'dhl', name: 'DHL Delivery', details: '2-3 days work', price: '$12.00' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Shipping Information */}
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>1. Shipping, arrives between Mon, May 16 – Tue, May 24</h2>
            <div style={styles.shippingInfo}>
              <div>
                <p style={styles.shippingAddress}><strong>Imran Khan</strong></p>
                <p style={styles.shippingAddress}>Museum of Rajas, Sylhet Sadar, Sylhet 3100.</p>
              </div>
              <button>Edit</button>
            </div>
            <p>Items details: <a href="#">View details</a></p>
          </div>

          {/* Shipping Method */}
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>2. Shipping method</h2>
            <p>Available Shipping method</p>
            {shippingOptions.map((option) => (
              <div
                key={option.id}
                style={{
                  ...styles.shippingMethod,
                  border: selectedShipping === option.name ? '2px solid #ffd43b' : '1px solid #ddd',
                }}
                onClick={() => setSelectedShipping(option.name)}
              >
                <div>
                  <span style={styles.shippingMethodLabel}>{option.name}</span>
                  <p>{option.details}</p>
                </div>
                <div style={styles.priceTag}>{option.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3 style={styles.sectionHeader}>Payment Details</h3>
          <p>Complete your purchase by providing your payment details order.</p>
          <input type="email" placeholder="Email Address" style={styles.paymentInput} />
          <input type="text" placeholder="Card Holder" style={styles.paymentInput} />
          <input type="text" placeholder="Card Details" style={styles.paymentInput} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input type="text" placeholder="MM/YY" style={styles.paymentInput} />
            <input type="text" placeholder="CVC" style={styles.paymentInput} />
          </div>

          <div>
            <div style={styles.orderSummary}>
              <p>Subtotal (items): <span style={styles.priceTag}>$191.65</span></p>
              <p>Price (Total): <span style={styles.priceTag}>$191.65</span></p>
              <p>Shipping: <span style={styles.priceTag}>$10.00</span></p>
            </div>
            <div style={styles.totalAmount}>Estimated Total: $201.65</div>
          </div>

          <button style={styles.payButton}>Pay $201.65</button>

          <div style={styles.giftOption}>
            🎁 Send this order as a gift.
            <p>Available items will be shipped to your gift recipient.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
