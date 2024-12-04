// SignUp.jsx
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
    flexDirection: 'column',
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
    textAlign: 'center',
    maxWidth: '300px',
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
    padding: '0.75rem 0.55rem 0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  icon: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#888',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  signUpButton: {
    backgroundColor: '#ffd43b',
    color: '#333',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  googleButton: {
    backgroundColor: '#ffffff',
    color: '#333',
    padding: '0.75rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    border: '1px solid #ddd',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '300px',
    marginBottom: '1rem',
  },
  leftText: {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'center',
    maxWidth: '300px',
    marginTop: '1rem',
  },
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
    } else {
      alert('Account created successfully');
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Panel */}
      <div style={styles.leftPanel}>
        <img
          src="https://via.placeholder.com/300" // Replace with actual illustration URL
          alt="Illustration"
          style={styles.image}
        />
        <p style={styles.leftText}>
          The best of luxury brand values, high quality products, and innovative services.
        </p>
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
        <h2 style={styles.title}>Sign Up</h2>
        <p style={styles.subtitle}>
          Let's create your account and shop like a pro and save money.
        </p>

        <form onSubmit={handleSignUp} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span style={styles.icon}>📧</span>
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span style={styles.icon}>🔒</span>
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              placeholder="Confirm password"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span style={styles.icon}>🔒</span>
          </div>

          <div style={styles.rememberMe}>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Set as default card
          </div>

          <button type="submit" style={styles.signUpButton}>Sign Up</button>

          <button type="button" style={styles.googleButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              style={{ width: '20px', height: '20px' }}
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
