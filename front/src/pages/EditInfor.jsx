// EditInfo.jsx
import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  sidebar: {
    width: '250px',
    padding: '20px',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    marginRight: '2rem',
  },
  profile: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  profilePicture: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#333',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '2rem',
    gap: '1rem',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    color: '#333',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
  },
  saveButton: {
    backgroundColor: '#ff9a9e',
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
  },
  sidebarNav: {
    listStyle: 'none',
    padding: 0,
  },
  sidebarNavItem: {
    color: '#555',
    padding: '0.5rem 0',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

const EditInfo = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.profile}>
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            style={styles.profilePicture}
          />
          <h3>Imran Khan</h3>
          <p>Registered: 17th May 2022</p>
        </div>
        <ul style={styles.sidebarNav}>
          <li style={styles.sidebarNavItem}>Personal info</li>
          <li style={styles.sidebarNavItem}>Addresses</li>
          <li style={styles.sidebarNavItem}>Communications & privacy</li>
          <li style={styles.sidebarNavItem}>Reorder</li>
          <li style={styles.sidebarNavItem}>Lists</li>
          <li style={styles.sidebarNavItem}>Registries</li>
          <li style={styles.sidebarNavItem}>Protection plans</li>
          <li style={styles.sidebarNavItem}>Help</li>
          <li style={styles.sidebarNavItem}>Terms of Use</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.title}>
          <span>&larr;</span> Personal info
        </div>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="fullName">Full name</label>
            <input
              style={styles.input}
              type="text"
              id="fullName"
              placeholder="Full name"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email address</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              placeholder="Email address"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">Phone Number</label>
            <input
              style={styles.input}
              type="tel"
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">Password</label>
            <input
              style={styles.input}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </form>
        <div style={styles.buttonGroup}>
          <button style={styles.cancelButton}>Cancel</button>
          <button style={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
