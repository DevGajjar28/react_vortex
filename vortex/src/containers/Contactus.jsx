import React, { useState, useEffect } from 'react';
import './Contactus.css'
import { Link } from "react-router-dom";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import email from '../assets/email.svg';

import bgcontact from '../assets/bg-contact.png'

function Contactus() {
  const initialvalues = { username: "", email: "", password: "" };
  const [formvalues, setFormvalues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
        
        const {name , value} = e.target;
        setFormvalues({...formvalues,[name]:value});
        console.log(formvalues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
  };

  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formvalues);
    }
  },[formErrors]);

  const validate = (values) =>{
    const errors = {}
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
        errors.username = "username is required";
    }
    if(!values.email){
        errors.email = "email is required";
    }else if(!regex.test(values.email)){
        errors.email = "This is note valid email format "
    }
    if(!values.password){
        errors.password = "password is requires";
    }else if(values.password.length < 4){
        errors.password = "password must be more than 4 charchters ";
    }else if(values.password.length > 10){
        errors.password = "password cannot ";
    }
    return errors; 
  }

  return (
    
         <>
   <div className="c-main">
        <div className="top-container"><div className='c-logo'>Vortex</div></div>

        <div className="middle-container">
          <div>
            <img src={bgcontact} alt="" />
            <div className="text-overlay">
              <h2 className='cu'>Contact Us</h2>
              <p></p>
            </div>
          </div>

          <div className="custom-form-container">
          <form onSubmit={handleSubmit}>
              <h2>What can we Do ?</h2>
              <div className="custom-form-field">
                <label>Name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formvalues.username}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.username}</p>
              <div className="custom-form-field">
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
              <div className="custom-form-field">
              <label>Details</label>
              <textarea
                type="text"
                name="details"
                placeholder="Details"
                // value={formvalues.details}
                // onChange={handleChange}
              />
              </div>
              <button className="custom-form-submit" type="submit">
  Submit &#x2192;
</button>
            </form>
          </div>
        </div>
       
      </div>
<div className="footer-container">
    <div className="our-address">OUR ADDRESS
    <span className="add">Dogenzaka Nichome East District,shibuya</span>

</div>
    <div className="our-contact">OUR CONTACT
    <span className="add">moyemoye@mail.com</span>
    <span className="add">(+00)00001 0001</span>


    </div>
    <div className="social-links-contact">
                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter}alt="twitter" />
                </Link>
                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instgram" />
                </Link>
                <Link to="" target="_blank" rel="noopener noreferrer">
                  <img src={email} alt="email" />
                </Link>
</div>
</div>

    
    </>
    
  );
}

export default Contactus;