// ResetPassword.jsx
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
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '0.65rem 0.55rem 0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  emailIcon: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#888',
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
  backToSignIn: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '300px',
  },
};

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div style={styles.container}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <img
          src="https://via.placeholder.com/300" // Replace with actual illustration URL
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
        <h2 style={styles.title}>Reset your password</h2>
        <p style={styles.subtitle}>
          Enter your email and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span style={styles.emailIcon}>📧</span>
          </div>
          <button type="submit" style={styles.button}>
            Reset password
          </button>
        </form>
        <div style={styles.backToSignIn}>Back to Sign In</div>
      </div>
    </div>
  );
};

export default ResetPassword;
