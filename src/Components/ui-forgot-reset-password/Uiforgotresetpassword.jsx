import "./uiforgotresetpassword.scss"
import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom"



const Uiforgotresetpassword = () => {
  const navigate=useNavigate()
  const [password, setEmail] = useState("");
  const[cnfPassword,setNewemail]=useState('')

  const ResetSumitbtn=()=>{

    
    console.log(localStorage.setItem('password',password))
    console.log(localStorage.setItem('cnfpassword', cnfPassword))

    
alert("passward reset successfully")
navigate('/')
  }
  return (
    <div className=" container Uiforgotresetpassword"
    >
      <div className=" conatainer forgot-password-container">
   <div className=" row password-card">
    <h2>Reset your password</h2>
    <div className=" password-card-coloumn-size">
    <Form>
   <Form.Group> 
              <div className="input-form-first-label">
                <Form.Label for="validationCustom01"> New password</Form.Label>
                <Form.Control
                  type="password"
                  className=" form-control form-control-input"
                  id="alidationCustom01"
                  placeholder="enter your new password"
                  value={password}
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

              <Form.Group> 
              <div className="input-form-first-label">
                <Form.Label for="validationCustom01">Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  className=" form-control form-control-input"
                  id="alidationCustom01"
                  placeholder="confirm your new password"
                  value={cnfPassword}
                  // onChange={e=>setFirstName(e.target.value)
                  // }
                  name="firstName"
                  onChange={(e)=>setNewemail(e.target.value)}
                  // value={data.firstName}
                  required
                />
                 <Form.Control.Feedback type="invalid">
                  confirm your email
                </Form.Control.Feedback>

              </div>
              </Form.Group>
              </Form>
              <div class=" button-login d-grid gap-2">
            <button
              onClick={ResetSumitbtn}
              className=" buttonsubmitforgotpassword btn btn-warning"
              type="button"
            >
              Reset password
            </button>
          </div>

   </div>
    </div>
 
 
    </div>
    
    </div>
  )
}

export default Uiforgotresetpassword

