// ProductDetail.jsx
import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  breadcrumb: {
    fontSize: '0.875rem',
    color: '#888',
    marginBottom: '1rem',
    alignSelf: 'flex-start',
  },
  content: {
    display: 'flex',
    gap: '2rem',
    width: '100%',
    maxWidth: '1200px',
  },
  productImage: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  thumbnail: {
    display: 'flex',
    gap: '0.5rem',
  },
  thumbnailImage: {
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    border: '2px solid transparent',
  },
  selectedThumbnail: {
    border: '2px solid #ffd43b',
  },
  productDetails: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#888',
    marginBottom: '1rem',
  },
  priceBox: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#ffd43b',
    color: '#333',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    width: '100%',
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  },
  tab: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    fontSize: '1rem',
  },
  activeTab: {
    borderBottom: '2px solid #ffd43b',
    fontWeight: '600',
  },
  tabContent: {
    marginTop: '1rem',
  },
};

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState('https://via.placeholder.com/300');
  const [activeTab, setActiveTab] = useState('Description');

  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  const tabs = ['Description', 'Review', 'Similar'];

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>Departments &gt; Coffee &gt; Coffee Beans &gt; LavAzza</div>
      <div style={styles.content}>
        {/* Product Image Section */}
        <div style={styles.productImage}>
          <img src={selectedImage} alt="Product" style={{ width: '100%' }} />
          <div style={styles.thumbnail}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Thumbnail"
                style={{
                  ...styles.thumbnailImage,
                  ...(selectedImage === image ? styles.selectedThumbnail : {}),
                }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div style={styles.productDetails}>
          <h2 style={styles.title}>Phuong gay</h2>
          <div style={styles.rating}>⭐ 0.5 (7 reviews)</div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Size/Weight: </label>
            <select style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}>
              <option>78kg</option>
              <option>75</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Delivery: </label>
            <span>Arrives in 2-4 days</span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Pickup: </label>
            <span>Ready for pickup in 2 days</span>
          </div>

          <div style={styles.priceBox}>
            <div style={{ fontSize: '0.875rem', color: '#888', textDecoration: 'line-through' }}>
              $60.00 - 10%
            </div>
            <div style={styles.price}>$2.00</div>
          </div>
          <button style={styles.addToCartButton}>Add to cart</button>
        </div>
      </div>

      {/* Tabs Section */}
      <div style={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{ ...styles.tab, ...(activeTab === tab ? styles.activeTab : {}) }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div style={styles.tabContent}>
        {activeTab === 'Description' && (
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid explicabo. Modi, quidem, ullam et!</p>
        )}
        {activeTab === 'Review' && (
          <div>
            <h4>Reviews</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid explicabo. Modi, quidem, ullam et!</p>
          </div>
        )}
        {activeTab === 'Similar' && (
          <div>
            <h4>Similar Products</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid explicabo. Modi, quidem, ullam et!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
