import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password1,
    password2,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit} noValidate>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          {...(name.trim().length <= 0 && { className: "has-error" })}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          {...(!isValidEmail(email) && { className: "has-error" })}
        />
        {!isValidEmail(email) && <span>Email inválido</span>}
        <input
          name="password1"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          name="password2"
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
