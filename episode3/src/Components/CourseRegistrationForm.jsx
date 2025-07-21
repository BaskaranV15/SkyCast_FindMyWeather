import React, { useState } from "react";

const CourseRegistrationFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Submitted Data:", formData);
      setSubmittedData(formData);
      setFormData({ name: "", course: "", feedback: "" });
      setErrors({});
    }
  };

  const handleClear = () => {
    setFormData({ name: "", course: "", feedback: "" });
    setErrors({});
    setSubmittedData(null);
  };

  
  return (
    <div style={styles.container}>
      <h2>Course Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              style={styles.input}
            />
          </label>
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Course:
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              onBlur={handleBlur}
              style={styles.input}
            >
              <option value="">Select</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
          </label>
          {errors.course && <p style={styles.error}>{errors.course}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="4"
              style={styles.textarea}
            />
          </label>
          <p>Characters: {formData.feedback.length}</p>
          {errors.feedback && <p style={styles.error}>{errors.feedback}</p>}
        </div>

        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>Submit</button>
          <button
            type="button"
            onClick={handleClear}
            style={{ ...styles.button, ...styles.clearButton }}
          >
            Clear
          </button>
        </div>
      </form>

      {submittedData && (
        <div style={styles.summary}>
          <h3>Submission Summary</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Course:</strong> {submittedData.course}
          </p>
          <p>
            <strong>Feedback:</strong> {submittedData.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
      maxWidth: "500px",
      margin: "0 500px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      resize: "vertical",
    },
    error: {
      color: "red",
      fontSize: "0.85rem",
      marginTop: "4px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    clearButton: {
      backgroundColor: "#f44336",
    },
    summary: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#eef",
      borderRadius: "6px",
    },
  };

export default CourseRegistrationFormComponent;
