import { useEffect, useState } from "react";

function RegisterForm() {
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
      <div className="form-container">
    {Object.keys(formErrors).length === 0 && isSubmit  ? 
    (<div className="message">Signed in successfully</div> )
:(
   
 <p></p>
)}

     
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          {/* <div className="divider"></div> */}
          {/* <div className="form"> */}
            
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
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
                placeholder="password"
                value={formvalues.password}
                onChange={handleChange}
              />
            <p>{formErrors.password}</p>
                
            </div>
            
          

            {/* <input type="submit" name="" value="submit"/>  */}
            <button className="submit">Submit</button>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
