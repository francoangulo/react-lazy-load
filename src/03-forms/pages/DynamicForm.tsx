import { Formik, Form } from "formik";
import jsonForm from "../data/custom-form.json";
import { CustomSelectComponent, CustomTextComponent } from "../components";
import * as Yup from "yup";

const initialValues: {
  [key: string]: any;
} = {};

const requiredFields: {
  [key: string]: any;
} = {};

for (const input of jsonForm) {
  initialValues[input.name] = input.value;
  if (!input.validations) {
    continue;
  }

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }
    if (rule.type === "minLength" && (rule as any).value) {
      schema = schema.min((rule as any).value, rule.message);
    }
    if (rule.type === "maxLength" && (rule as any).value) {
      schema = schema.max((rule as any).value, rule.message);
    }
    if (rule.type === "email") {
      schema = schema.email(rule.message);
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {jsonForm.map(({ label, name, type, placeholder, options }) => {
              if (["text", "email", "password", "number"].includes(type)) {
                return (
                  <CustomTextComponent
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <CustomSelectComponent key={name} label={label} name={name}>
                    <option value="" disabled>
                      Select a game
                    </option>
                    {options?.map(({ id, label }) => (
                      <option key={`opt-${id}`} value={id}>
                        {label}
                      </option>
                    ))}
                  </CustomSelectComponent>
                );
              }
              throw new Error(`Type: ${type} -- not supported`);
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
