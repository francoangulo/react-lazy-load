import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikComponents = () => {
  const onSubmit = (formValues: FormValues) => {
    console.log("Form Values", formValues);
  };

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "15 chars at max")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "20 chars at max")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
          jobType: Yup.string()
            .required("Required")
            //     .oneOf(["jr", "ssr", "sr"])
            .notOneOf(["designer"], "Designer is not allowed"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={"span"} />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" />
            <ErrorMessage name="lastName" component={"span"} />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={"span"} />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value={""} disabled>
                Pick job
              </option>
              <option value={"jr"}>Junior Developer</option>
              <option value={"ssr"}>Semisenior Developer</option>
              <option value={"sr"}>Senior Developer</option>
              <option value={"designer"}>Designer</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
