import { useFormik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const onSubmit = (formValues: FormValues) => {
    console.log("Form Values", formValues);
  };

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit,
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "15 chars at max").required("Required"),
      lastName: Yup.string().max(20, "20 chars at max").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  return (
    <div>
      <h1>Formik YUP Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
