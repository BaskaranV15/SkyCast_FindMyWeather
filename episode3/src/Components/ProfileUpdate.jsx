import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const ProfileUpdateFormComponent = () => {
  const [submitData, setSubmitData] = useState(null);

  const validationSchema = Yup.object({
    fullname: Yup.string()
      .required("Full name is required")
      .min(3, "Full name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    experience: Yup.string()
      .required("Experience is required")
      .min(2, "Experience must be at least 2 characters"),
  });



  return (
    <div style={styles.formContainer}>
      <h1>Profile Update Form</h1>
      <Formik
        initialValues={{ fullname: "", email: "", experience: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitData(values);
          resetForm();
        }}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              style={styles.field}
            />
            <ErrorMessage name="fullname" component="div" style={styles.error} />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              style={styles.field}
            />
            <ErrorMessage name="email" component="div" style={styles.error} />
          </div>

          <div>
            <Field
              type="text"
              name="experience"
              placeholder="Enter your experience"
              style={styles.field}
            />
            <ErrorMessage name="experience" component="div" style={styles.error} />
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </Form>
      </Formik>

      {submitData && (
        <div style={styles.submitted}>
          <h2>Submitted Data:</h2>
          <pre>{JSON.stringify(submitData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};


  const styles = {
    formContainer: {
      maxWidth: "400px",
      margin: "0 550px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    field: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    error: {
      color: "red",
      marginBottom: "10px",
      fontSize: "0.875rem",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    submitted: {
      marginTop: "20px",
      backgroundColor: "#eee",
      padding: "10px",
      borderRadius: "4px",
    },
  };
export default ProfileUpdateFormComponent;
