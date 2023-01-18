import "./uiforgotpassword.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom"

const Uiforgotpassword = () => {
  const [email, setEmail] = useState("");

const navigate=useNavigate()
  const submitForgotButton=()=>{
    const getData = JSON.parse(localStorage.getItem("userData"));
    if( (
      getData.some((localStorage) => {
        return localStorage.email === email;
      })
      
    ) || (
      getData.some((localStorage) => {
        return localStorage.email === " ";
      })
      
    )) {
      navigate("/ForgotresetPassword")
    }   else {
      alert(" please registor ");
      navigate("/registration");
    }

    
    
  }
  return (
    <div className=" conatainer forgot-password-container">
   <div className=" row password-card">
    <h2>Forgot password</h2>
    <div className=" password-card-coloumn-size">
    <Form>
   <Form.Group> 
              <div className="input-form-first-label">
                <Form.Label for="validationCustom01"> enter your email</Form.Label>
                <Form.Control
                  type="text"
                  className=" form-control form-control-input"
                  id="alidationCustom01"
                  placeholder="Enter your name"
                  value={email}
                  // onChange={e=>setFirstName(e.target.value)
                  // }
                  name="firstName"
                  onChange={(e)=>setEmail(e.target.value)}
                  // value={data.firstName}
                  required
                />
                 <Form.Control.Feedback type="invalid">
                  enter valid email
                </Form.Control.Feedback>

              </div>
              </Form.Group>
              </Form>
              <div class=" button-login d-grid gap-2">
            <button
              onClick={submitForgotButton}
              className=" buttonsubmitforgotpassword btn btn-info"
              type="button"
            >
              submit
            </button>
          </div>

   </div>
    </div>
 
 
    </div>
  );
};

export default Uiforgotpassword;
