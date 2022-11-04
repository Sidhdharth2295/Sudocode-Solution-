import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [formvalue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formvalue, [name]: value });
    console.log(formvalue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formvalue));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formvalue);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const upeercaseRegex = /^(?=.*[A-Z])/;
    const lowercaseRegex = /^(?=.*[a-z])/;
    const specialCharRegex = /^(?=.*?[^\w\s])/;
    const numberRegex = /^(?=.*?[0-9])/;
    const length = /^.{8,12}$/;
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email format is not valid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!upeercaseRegex.test(values.password)) {
      errors.password = "At least 1 uppercase letter";
    } else if (!lowercaseRegex.test(values.password)) {
      errors.password = "At least 1 lowercase letter";
    } else if (!numberRegex.test(values.password)) {
      errors.password = "At least 1 numeric character";
    } else if (!specialCharRegex.test(values.password)) {
      errors.password = "At least 1 special character";
    } else if (!length.test(values.password)) {
      errors.password = "At least 8 characters and At most 12 characters";
    }
    return errors;
  };

  return (
    <>
      <div className="container">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-content">
            <h3 className="title">Login</h3>
            <div className="mt-4">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={formvalue.email}
                onChange={handleChange}
              />
              <p>{formError.email}</p>
            </div>
            <div className="mt-4">
              <label>password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formvalue.password}
                onChange={handleChange}
              />
              <p>{formError.password}</p>
            </div>
            <div className="submit">
              <button>Login</button>
            </div>
            <div className="link">
              {/* <Link to="/signin">Sign In</Link> */}
              <Link to="/signin">
              <button className="SignInButton">Sign In</button>
            </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
