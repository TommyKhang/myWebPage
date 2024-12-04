// CheckOut.jsx
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  checkoutContent: {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    gap: '2rem',
  },
  productList: {
    flex: 2,
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  productItem: {
    display: 'flex',
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
    alignItems: 'center',
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
  sidePanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  summaryBox: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    color: '#333',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#ff9a9e',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '50px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  giftOption: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};

const CheckOut = () => {
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

  const subtotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <div style={styles.container}>
      <div style={styles.checkoutContent}>
        {/* Product List */}
        <div style={styles.productList}>
          {products.map(product => (
            <div key={product.id} style={styles.productItem}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <div style={styles.productDetails}>
                <h4>{product.name}</h4>
                <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                <p style={styles.stockStatus}>{product.stock}</p>
                <p>Brand: {product.brand}</p>
              </div>
              <div style={styles.actionButtons}>
                <div style={styles.quantityControl}>
                  <button>-</button>
                  <span>{product.quantity}</span>
                  <button>+</button>
                </div>
                <button>Save</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
            <button>Continue Shopping</button>
            <div>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Shipping: ${shipping.toFixed(2)}</p>
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div style={styles.sidePanel}>
          <div style={styles.summaryBox}>
            <div style={styles.summaryItem}>
              <span>Subtotal (items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={styles.summaryItem}>
              <span>Price (Total)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={styles.summaryItem}>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div style={styles.total}>
              <span>Estimated Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div style={styles.checkoutButton}>Continue to checkout</div>
          </div>
          <div style={styles.giftOption}>
            <span>🎁</span>
            <div>
              <h4>Send this order as a gift.</h4>
              <p>Available items will be shipped to your gift recipient.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
