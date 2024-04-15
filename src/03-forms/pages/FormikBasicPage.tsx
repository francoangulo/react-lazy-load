import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "First name is required";
    } else if (firstName.length > 15) {
      errors.firstName = "First name must be 15 characters or less";
    }

    if (!lastName) {
      errors.lastName = "First name is required";
    } else if (lastName.length > 10) {
      errors.lastName = "First name must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const onSubmit = (formValues: FormValues) => {
    console.log("Form Values", formValues);
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit,
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
