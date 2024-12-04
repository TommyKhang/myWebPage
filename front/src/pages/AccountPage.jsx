// AccountPage.jsx
import React, { useEffect, useState } from 'react';
import './Account.css';

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/sign-in';
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/profile`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          console.error(data.message);
          window.location.href = '/sign-in';
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  // Fetch user's favorite items or other data as needed
  useEffect(() => {
    // Placeholder for fetching items
    setItems([
      {
        id: 1,
        name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
        price: '$47.00',
        image: 'https://via.placeholder.com/50',
      },
      {
        id: 2,
        name: 'Lavazza Coffee Blends - Try the Italian Espresso',
        price: '$53.00',
        image: 'https://via.placeholder.com/50',
      },
    ]);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="account-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
          <img src={user.profilePicture || 'https://via.placeholder.com/100'} alt={user.name} className="profile-picture" />
          <h3>{user.name}</h3>
          <p>Registered: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        <nav className="navigation">
          {/* ... (navigation code remains the same) */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <section className="wallet-section">
          {/* ... (wallet section code can be updated to reflect real data) */}
        </section>

        <section className="account-info">
          <h2>Account Info</h2>
          <p>Addresses, contact information, and password</p>
          <div className="info-box">
            <div className="info-item">
              <span>Email Address</span>
              <p>{user.email}</p>
            </div>
            <div className="info-item">
              <span>Phone number</span>
              <p>{user.phoneNumber || 'Not provided'}</p>
            </div>
            <div className="info-item">
              <span>Add an address</span>
              <p>{user.address || 'No address provided'}</p>
            </div>
          </div>
        </section>

        <section className="lists">
          <h2>Lists</h2>
          <p>{items.length} items - Primary</p>
          <div className="list-items">
            {items.map(item => (
              <div key={item.id} className="list-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="price">{item.price}</p>
                  <button className="add-to-cart">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
