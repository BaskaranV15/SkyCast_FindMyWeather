import React, { useState } from "react";

const SurveyFormComponent = () => {
  const [formData, setFormData] = useState({
    gender: "",
    hobbies: [],
    country: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const hobbies = checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((h) => h !== value);
        return { ...prev, hobbies };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  

  return (
    <div style={styles.container}>
      <h2>Survey Form</h2>

      <label style={styles.label}>
        Country:
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        >
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="india">India</option>
        </select>
      </label>

      <div style={styles.inputGroup}>
        <span style={styles.label}>Gender:</span>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <div style={styles.inputGroup}>
        <span style={styles.label}>Hobbies:</span>
        <div style={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              checked={formData.hobbies.includes("reading")}
              onChange={handleChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="traveling"
              checked={formData.hobbies.includes("traveling")}
              onChange={handleChange}
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="sports"
              checked={formData.hobbies.includes("sports")}
              onChange={handleChange}
            />
            Sports
          </label>
        </div>
      </div>

      <div style={styles.summary}>
        <h3>Summary</h3>
        <p>Country: {formData.country || "Not selected"}</p>
        <p>Gender: {formData.gender || "Not selected"}</p>
        <p>
          Hobbies:{" "}
          {formData.hobbies.length ? formData.hobbies.join(", ") : "None"}
        </p>
      </div>
    </div>
  );
};



const styles = {
    container: {
      maxWidth: "400px",
      margin: "0 450px",
      padding: " 0 100px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    label: {
      display: "block",
      margin: "10px 0 5px",
      fontWeight: "bold",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    checkboxGroup: {
      display: "flex",
      flexDirection: "column",
    },
    summary: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#eef",
      borderRadius: "6px",
    },
  };
export default SurveyFormComponent;
