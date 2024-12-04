import React, { useState } from 'react';

const HeartIcon = ({ filled }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={filled ? "#ff4d6d" : "none"} 
    stroke={filled ? "#ff4d6d" : "#666"}
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fff'
  },
  hero: {
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    borderRadius: '24px',
    padding: '3rem',
    marginBottom: '3rem',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 20px 40px rgba(255, 154, 158, 0.2)'
  },
  heroContent: {
    width: '60%',
    position: 'relative',
    zIndex: 1
  },
  heroTitle: {
    color: '#2d3436',
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  },
  heroSubtitle: {
    color: '#2d3436',
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '500px'
  },
  heroButton: {
    backgroundColor: '#fff',
    color: '#ff9a9e',
    padding: '1rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  },
  categoryCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    borderRadius: '20px',
    background: '#fff',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  categoryImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '1.5rem'
  },
  categoryTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: '0.5rem'
  },
  categoryPrice: {
    color: '#ff9a9e',
    fontSize: '1.25rem',
    fontWeight: '600'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2d3436',
    position: 'relative'
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    border: '2px solid #eee',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#2d3436',
    transition: 'all 0.2s'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  },
  productCard: {
    background: '#fff',
    borderRadius: '20px',
    padding: '1.5rem',
    position: 'relative',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
  },
  favoriteButton: {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    border: 'none',
    background: '#fff',
    borderRadius: '50%',
    padding: '0.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    zIndex: 1,
    transition: 'transform 0.2s'
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '1.5rem'
  },
  productTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: '0.5rem'
  },
  productCategory: {
    color: '#636e72',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  },
  priceRating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto'
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ff9a9e'
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    background: '#fff8f8',
    padding: '0.5rem 0.75rem',
    borderRadius: '50px'
  },
  star: {
    color: '#ffd43b'
  }
};

// Add hover effects
const hoverStyles = {
  categoryCard: {
    ...styles.categoryCard,
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
    }
  },
  productCard: {
    ...styles.productCard,
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
    }
  }
};

const FruitShop = () => {
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    {
      image: "/api/placeholder/280/200",
      title: "Fresh Seasonal Fruits",
      price: "Starting from $2.99"
    },
    {
      image: "/api/placeholder/280/200",
      title: "Organic Berries",
      price: "Starting from $4.99"
    },
    {
      image: "/api/placeholder/280/200",
      title: "Tropical Delights",
      price: "Starting from $3.99"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Strawberries",
      category: "Berries",
      price: 4.99,
      rating: 4.8,
      image: "/api/placeholder/250/200"
    },
    {
      id: 2,
      name: "Organic Bananas",
      category: "Tropical",
      price: 2.99,
      rating: 4.5,
      image: "/api/placeholder/250/200"
    },
    {
      id: 3,
      name: "Sweet Mangoes",
      category: "Tropical",
      price: 5.99,
      rating: 4.9,
      image: "/api/placeholder/250/200"
    },
    {
      id: 4,
      name: "Red Apples",
      category: "Seasonal",
      price: 3.49,
      rating: 4.7,
      image: "/api/placeholder/250/200"
    },
    {
      id: 5,
      name: "Fresh Blueberries",
      category: "Berries",
      price: 6.99,
      rating: 4.6,
      image: "/api/placeholder/250/200"
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <button onClick={() => {
        fetch("http://localhost:5000/helloworld").then(async res => {
          console.log(await res.json())
        })
      }}>Hello</button>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Fresh & Healthy<br />
            Fruits Delivered
          </h1>
          <p style={styles.heroSubtitle}>
            Get farm-fresh fruits delivered to your doorstep. Handpicked for quality and freshness.
          </p>
          <button style={styles.heroButton}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>Popular Categories</h2>
      </div>
      <div style={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} style={hoverStyles.categoryCard}>
            <img
              src={category.image}
              alt={category.title}
              style={styles.categoryImage}
            />
            <h3 style={styles.categoryTitle}>{category.title}</h3>
            <p style={styles.categoryPrice}>{category.price}</p>
          </div>
        ))}
      </div>

      {/* Products */}
      <div style={styles.header}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <button style={styles.filterButton}>
          Filter
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div style={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} style={hoverStyles.productCard}>
            <button 
              style={styles.favoriteButton}
              onClick={() => toggleFavorite(product.id)}
            >
              <HeartIcon filled={favorites.has(product.id)} />
            </button>
            
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            
            <h3 style={styles.productTitle}>{product.name}</h3>
            <p style={styles.productCategory}>{product.category}</p>
            
            <div style={styles.priceRating}>
              <span style={styles.price}>${product.price.toFixed(2)}</span>
              <div style={styles.rating}>
                <span style={styles.star}>★</span>
                <span>{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitShop;