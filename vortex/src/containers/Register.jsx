import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Register() {
  const initialvalues = { username: "", email: "", password: "" };
  const [formvalues, setFormvalues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
  };

  useEffect(() => {
    setHasErrors(Object.keys(formErrors).length > 0 && isSubmit);
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot be more than 10 characters";
    }
    return errors;
  }

  return (
    <>
      <div className="welcome-details">
        Welcome
        <p className="details">Please enter your details</p>
      </div>

      <div className={`reg-form-container ${hasErrors ? 'has-errors' : ''}`}>
        {hasErrors ? (
          <div className="message">Signed in successfully</div>
        ) : (
          <p></p>
        )}

        <form onSubmit={handleSubmit} className={hasErrors ? 'has-errors' : ''}>
          <h2>Register</h2>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formvalues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formvalues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formvalues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>
          <button className="submit">Submit</button>
          <div className="term">By joining, you agree to the Terms and Privacy Policy.</div>
        </form>
      </div>

      <div className="login-account">
        Already have an account? <Link to="/Login" className='login-link'>Login</Link>
      </div>
    </>
  );
}

export default Register;
