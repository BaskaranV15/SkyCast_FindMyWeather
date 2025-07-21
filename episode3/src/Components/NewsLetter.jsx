import React, { useState } from "react";

const NewsletterSignupComponent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address!");
    } else {
      setError("");
      alert("Thank you for signing up!");
      setEmail("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Newsletter Signup Box</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter your email address"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
    container: {

      maxWidth: '400px',
      marginLeft: '550px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '14px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
  };
export default NewsletterSignupComponent;
