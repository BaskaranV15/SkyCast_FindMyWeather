import React, { useRef, useState } from "react";

const ContactUsComponent = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = emailRef.current;
    emailInput.setCustomValidity("");

    if (!emailInput.validity.valid) {
      if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity("Email is required!");
      } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please enter a valid email address!");
      } else if (emailInput.validity.patternMismatch) {
        emailInput.setCustomValidity("Email format is incorrect!");
      } else if (emailInput.validity.tooShort) {
        emailInput.setCustomValidity("Email must be at least 18 characters long!");
      }
      emailInput.reportValidity();
      return;
    }

    alert("Form submitted with email: " + email);
    setEmail("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.formGroup}>
        <input
          type="email"
          value={email}
          ref={emailRef}
          onChange={handleEmail}
          minLength={19}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          placeholder="Enter your email"
          required
          style={styles.input}
        />
      </div>
      <button type="submit" onClick={handleSubmit} style={styles.button}>
        Submit
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px 550px",
    padding: "25px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default ContactUsComponent;
