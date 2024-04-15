import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  CustomCheckboxComponent,
  CustomSelectComponent,
  CustomTextComponent,
} from "../components/";

import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikAbstraction = () => {
  const onSubmit = (formValues: FormValues) => {
    console.log("Form Values", formValues);
  };

  return (
    <div>
      <h1>Formik Abstraction</h1>

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
            <CustomTextComponent
              label="First Name"
              name="firstName"
              placeholder="Franco"
            />

            <CustomTextComponent
              label="Last Name"
              name="lastName"
              placeholder="Angulo"
            />

            <CustomTextComponent
              label="Email Address"
              name="email"
              placeholder="email@email.com"
              type="email"
            />

            <CustomSelectComponent label="Job Type" name="jobType">
              <option value={""} disabled>
                Pick job
              </option>
              <option value={"jr"}>Junior Developer</option>
              <option value={"ssr"}>Semisenior Developer</option>
              <option value={"sr"}>Senior Developer</option>
              <option value={"designer"}>Designer</option>
            </CustomSelectComponent>

            <CustomCheckboxComponent name="terms" label="Terms & Conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
