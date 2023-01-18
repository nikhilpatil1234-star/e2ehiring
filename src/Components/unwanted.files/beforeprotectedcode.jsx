// import React, { useState } from "react";
// import "./logininputfield.scss";
// import {  useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";

// // import Uidashboard from "../ui-dash-board/Uidashboard";

// const Logininputfield = () => {

//   const [validated, setValidated] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // for login if email and password matches in local storage useref() and apply some condtional rendering

//   const navigate = useNavigate();
//   const getData = JSON.parse(localStorage.getItem("userData"));
//   console.log(getData);


//   const forgotPasswordLink=()=>{
//      navigate("/ForgotPassword")
//   }
//   const Submit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

 
//   const HandleSubmit = (event) => {
//       // localStorage.setItem('login',true);
//       // navigate('/Uidashboard')
//       // let login=localStorage.getItem('login'); 
//     const getData = JSON.parse(localStorage.getItem("userData"));

//     //  getData.some((localStorage) => ( localStorage.email === email && localStorage.password=== password? navigate("/Dashboard") :console.log("registor") ));
//     if (
//       getData.some((localStorage) => {
//         return localStorage.email === email;
//       }) &&
//       getData.some((localStorage) => {
//         return localStorage.password === password;
//       })
//     ){
//       navigate("/Dashboard");
//     }
//     //  {
//     //   toast.success('Success Notification !')
//     //  }
//     else {
//       alert(" invalid password or please registor for going to dash board");
//       navigate("/");
//     }
//   };
// //   const useEffect=(()=>{ 
// //     let login=localStorage.getItem('login'); 
// //  if(login){
// //     navigate('/Uidashboard')
// //  }
// //    })
// //   const login=()=>{
// //     localStorage.setItem('login',true);
// //     navigate('/Uidashboard')
// //   }
// //   const useEffect=(()=>{ 
// //     let login=localStorage.getItem('login'); 
// //  if(login){
// //     navigate('/Uidashboard')
// //  }
// //    }) 

//   return (
//     <>
//       <div className=" login-main-container">
//         <div className=" left-side-login">
//           {/* <img src="./background.png" alt="background" srcset="" /> */}
//           {/* <div className="image-office-left-side">
//           <img src="./officeman.jpg" alt="office" srcset="" />
//         </div> */}
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Welcome back</h5>
//               <p className="card-text"> Login to your recruiter portal</p>
//             </div>
//           </div>
//         </div>
//         <div className=" right-side-login">
//           <h1>Login</h1>
//           {/* {getEmail && getPassword? <Uidashboard/>:"failed"} */}
//           <Form
//             className="needs-validation"
//             onClick={Submit}
//             validated={validated}
//             noValidate
//           >
//             <div className="input-form input-form2">
//               <Form.Group controlId="validationCustom01">
//                 <Form.Label> Work email</Form.Label>
//                 <Form.Control
//                   type="text"
//                   className=" form-control form-control-input"
//                   id="email"
//                   placeholder="Enter your company name"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   please enter your name
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group controlId="validationCustom02">
//                 <Form.Label> Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   className=" form-control form-control-input"
//                   id="password"
//                   placeholder="Enter your 10 digits phone number"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {" "}
//                   please enter your password
//                 </Form.Control.Feedback>
//               </Form.Group>
//             </div>
//             <div className="forgot-password-link">

//               <a onClick={forgotPasswordLink} href="forgot">Forgot Password ?</a> 
//             </div>
//             {/* <Form.Group>
//             <Form.Check 
//             required
//             label=" Agree to term and condition"
//             feedback="you must agree"
//             feedbackType="invalid"/>
//              </Form.Group> */}
//             <div className=" button-login d-grid gap-2">
//               <button
//                 onClick={HandleSubmit}
//                 className=" btn1 btn btn-primary"
//                 type="button"
//               >
//                 Login
//               </button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Logininputfield;
