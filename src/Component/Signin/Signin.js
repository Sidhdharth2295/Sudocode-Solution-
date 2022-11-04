import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
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
    const length = /^.{8,12}$/;
    const numberRegex = /^(?=.*?[0-9])/;
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
            <h3 className="title">Sign In</h3>
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
              <button>Sign In</button>
            </div>
            <h5>SignIn Using</h5>
            <div className="icon-link">
              <Link to="https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=8e0e8db5-b713-4e91-98e6-470fed0aa4c2&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DX7jUnnZ_GYlgqDq60w-J74JTD9baB4t4Q3YYTrEvQhOXXZB7e-8850B01KCbJFJ7SPuHesam7Er3H7DdgsftB7TZAdmRTESYb339WYOEvAmbKGmp4oHUqHRIFc1bZ7m03FT0_8xvZn5_RpF5xEfc15we70MXIINEQs55K4OYireaefDqm0zacc-aJteFYe_Be_HdLnUYtZdQPef-C2v03XEFHbs5gc7BMJklADRuYe4jTgoEbmkXpaRz5xG_47XOLk4EiTywPOAXWBxi9OsWmEuiJ5HnZ80ankqia9kIBR4UF353jE8WxBp7Qv5YiwJ5VHTPkNthB7z21ehpAmP8omoy8oKWOGsN4EzCvdK7RLa0A1jIAPF8aCDQnAWy6mrZ6542Q9okLvKGfUs6QtGgL0en5GYvSZBCmCvxJow0myr2Ma4F5uw-hCDo6_0PP4CdfsqAP6XCETadT9YhuPmcozmN0qVQwgE2Y9a0cEiMkND6w9CyDNwybYOpV6EbiRbm1cETE4AOlkQMnhdEddp1vw&response_mode=form_post&nonce=638031493055276926.NzBmMzc4MDEtZGE5Zi00ZWRjLTliNjktZWRkY2ZhMmIyN2RhYTUyNmU5MzUtMTRjZi00YjhiLThkMjAtMDY0ZTU1N2I5MzYy&redirect_uri=https%3A%2F%2Fsignup.azure.com%2Fapi%2Fuser%2Flogin&max_age=86400&post_logout_redirect_uri=https%3A%2F%2Fsignup.azure.com%2Fsignup%3Foffer%3Dms-azr-0044p%26appId%3D102%26ref%3Dactive-directory%26redirectURL%3Dhttps%3A%2F%2Fazure.microsoft.com%2Fen-in%2Fget-started%2Factive-directory%2F%26l%3Den-in%26correlationId%3Dd225ce8a19744a55bad96471ee2f1447&x-client-SKU=ID_NET472&x-client-ver=6.17.0.0&sso_reload=true">
                <img
                  src="https://seeklogo.com/images/A/azure-active-directory-logo-C196F4B2D3-seeklogo.com.png"
                  height="40px"
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
