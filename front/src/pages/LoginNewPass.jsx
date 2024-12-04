// NewPassword
import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  },
  leftPanel: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  logoIcon: {
    width: '30px',
    height: '30px',
    marginRight: '0.5rem',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '2rem',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#ffd43b',
    color: '#333',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '300px',
  },
};

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Password reset successful!');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <img
          src="https://via.placeholder.com/300" // Replace with actual image URL
          alt="Password illustration"
          style={styles.image}
        />
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>
        <div style={styles.logo}>
          <img
            src="https://via.placeholder.com/30" // Replace with actual logo URL
            alt="Logo"
            style={styles.logoIcon}
          />
          grocerymart
        </div>
        <h2 style={styles.title}>Create new password</h2>
        <p style={styles.subtitle}>
          At least 6 characters, with uppercase and lowercase letters.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            placeholder="New password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            style={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" style={styles.button}>
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
