import * as Yup from "yup";
import { Form, Formik } from "formik";

import { CustomTextComponent } from "../components/CustomTextComponent";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterFormikPage = () => {
  const onSubmit = (formValues: FormValues) => {
    console.log("Form Values", formValues);
  };

  return (
    <div>
      <h1>Register Formik</h1>

      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .max(15, "15 chars at max")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
          password2: Yup.string().equals(
            [Yup.ref("password1")],
            "Passwords must match"
          ),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <CustomTextComponent label="First Name" name="firstName" />

            <CustomTextComponent
              label="Email Address"
              name="email"
              type="email"
            />

            <CustomTextComponent
              label="Password"
              name="password1"
              type="password"
            />

            <CustomTextComponent
              label="Confirm Password"
              name="password2"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="submit" onClick={handleReset}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
