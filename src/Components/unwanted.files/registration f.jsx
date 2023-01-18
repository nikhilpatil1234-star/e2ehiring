// import React from "react";
// import { useState } from "react";
// import "./registrationpage.scss";
// import Form from "react-bootstrap/Form";
// // import {useNavigate} from "react-router-dom"

// const Registrationpage = () => {
//   const [validated, setValidated] = useState(false);
//   // useEffect(()=>{
//   //   localStorage.setItem('company',company)

//   // },[ ])
//   const Submit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   const submitForm = (e) => {
//     // const navigate= useNavigate()
//     // let userDataArray=[ ]
//     let userDataArray = JSON.parse(localStorage.getItem("userData") || "[]");
//     // console.log(userDataArray);
//     let userData = {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       company: data.company,
//       email: data.email,
//       phone: data.phone,
//       password: data.password,
//       cnfPassword: data.cnfPassword,
//     };

//     if (
//       userDataArray.some((store) => {
//         return store.email === data.email;
//       })
//     ) {
//       alert("email already exits");
//     } else {
//       userDataArray.push(userData);
//       localStorage.setItem("userData", JSON.stringify(userDataArray));
//     }
//     // navigate('/Home')

//     // localStorage.setItem('company',company)
//     // localStorage.setItem('firstName',JSON.stringify(firstName))
//     // localStorage.setItem('lastName',JSON.stringify(lastName))
//     // localStorage.setItem('email',email)
//     // localStorage.setItem('phone',phone)
//     // localStorage.setItem('password',password)
//     // localStorage.setItem('cnfPassword',cnfPassword)
//   };

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     company: "",
//     email: "",
//     phone: "",
//     password: "",
//     cnfPassword: "",
//   });
//   const inputEvent = (event) => {
//     let { value, name } = event.target;
//     setData((prevalue) => {
//       if (name === "firstName") {
//         return {
//           ...prevalue,
//           firstName: value,
//         };
//       } else if (name === "lastName") {
//         return {
//           ...prevalue,
//           lastName: value,

//           // firstName: prevalue.firstName,
//           // lastName: value,
//           // company: prevalue.company,
//           // email: prevalue.email,
//           // phone: prevalue.phone,
//           // password: prevalue.password,
//           // cnfPassword: prevalue.cnfPassword,
//         };
//       } else if (name === "company") {
//         return {
//           ...prevalue,
//           company: value,
//           // firstName: prevalue.firstName,
//           // lastName: prevalue.lastName,
//           // company: value,
//           // email: prevalue.email,
//           // phone: prevalue.phone,
//           // password: prevalue.password,
//           // cnfPassword: prevalue.cnfPassword,
//         };
//       } else if (name === "email") {
//         return {
//           ...prevalue,
//           email: value,
//           // firstName: prevalue.firstName,
//           // lastName: prevalue.lastName,
//           // company: prevalue.company,
//           // email: value,
//           // phone: prevalue.phone,
//           // password: prevalue.password,
//           // cnfPassword: prevalue.cnfPassword,
//         };
//       } else if (name === "phone") {
//         return {
//           ...prevalue,
//           phone: value,

//           // firstName: prevalue.firstName,
//           // lastName: prevalue.lastName,
//           // company: prevalue.company,
//           // email: prevalue.email,
//           // phone: value,
//           // password: prevalue.password,
//           // cnfPassword: prevalue.cnfPassword,
//         };
//       } else if (name === "password") {
//         return {
//           ...prevalue,
//           password: value,
//           // firstName: prevalue.firstName,
//           // lastName: prevalue.lastName,
//           // company: prevalue.company,
//           // email: prevalue.email,
//           // phone: prevalue.phone,
//           // password: value,
//           // cnfPassword: prevalue.cnfPassword,
//         };
//       } else if (name === "cnfPassword") {
//         return {
//           ...prevalue,
//           cnfPassword: value,
//           // firstName: prevalue.firstName,
//           // lastName: prevalue.lastName,
//           // company: prevalue.company,
//           // email: prevalue.company,
//           // phone: prevalue.phone,
//           // password: prevalue.password,
//           // cnfPassword: value,
//         };
//       }
//     });
//   };
//   // )
//   // setData({
//   //   ...prevalue,
//   //   [event.target.name]: value
//   // });

//   // const [ firstName,setFirstName]=useState('')
//   // const [ lastName,setLastName]=useState('')
//   // const [company,setCompany]=useState('')
//   // const [email,setEmail]=useState('')
//   // const [phone,setPhone]=useState('')
//   // const [password,setPassword]=useState('')
//   // const [cnfPassword,setCnfPassword]=useState('')

//   return (
//     <div className="  login-main-container">
//       <div className=" left-side-registration-image">
//         {/* <img src="./background.png" alt="background" srcset="" /> */}
//         {/* <div className="image-office-left-side">
//         <img src="./officeman.jpg" alt="office" srcset="" />
//       </div> */}
//         <div className="card-registration">
//           <div className="card-registration-body">
//             <h5 className="card-registration-title">
//               <span style={{ fontWeight: "750" }}>Pay </span> as you{" "}
//               <span style={{ fontWeight: "750" }}>Hire </span>{" "}
//             </h5>
//             <p className="card-text">
//               We don't charge if your hiring needs are Not fulfilled
//             </p>
//           </div>
//           <div className="card-registration-blank"> </div>
//           <div className="cart-text-2">
//             <p>You will get to try </p>
//           </div>
//           <div className="card-content-1">
//             <div className="ai-icon">
//               {/* <img src="" alt="" srcset="" /> */}
//             </div>
//             <p>
//               {" "}
//               The best AI-powered recruitment platform that helps you hire the
//               right talent in the shortest time.
//             </p>
//           </div>
//           <div className="card-content-2">
//             <div className="setting-icon">
//               {/* <img src="" alt="" srcset="" /> */}
//             </div>
//             <p>
//               The Platform to manage multiple accounts, jobs, panels and
//               candidates along with managing the entire interview lifecycle with
//               ease
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className=" right-side-login">
//         <h1>Register</h1>
//         <Form
//           className="needs-validation"
//           onClick={Submit}
//           validated={validated}
//           noValidate
//         >
//           <div className="  input-form1 input-form" novalidate>
            
//             <div className=" input-form-first-second-name">
//             <Form.Group> 
//               <div className="input-form-first-label">
//                 <Form.label for="validationCustom01"> First name</Form.label>
//                 <input
//                   type="text"
//                   className="form-control-input"
//                   id="alidationCustom01"
//                   placeholder="Enter your name"
//                   // value={firstName}
//                   // onChange={e=>setFirstName(e.target.value)
//                   // }
//                   name="firstName"
//                   onChange={inputEvent}
//                   value={data.firstName}
//                   required
//                 />
//               </div>
//               </Form.Group>
//               {/* <div className='input-form-first-name'></div> */}

//               <div className="input-form-first-label">
//                 <label htmlFor="/"> Last name</label>
//                 <input
//                   type="text"
//                   className="form-control-input"
//                   id="floatingPassword"
//                   placeholder="Enter your last name"
//                   value={data.lastName}
//                   // onChange={e=>setLastName(e.target.value)}
//                   name="lastName"
//                   onChange={inputEvent}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="input-form-others-details">
//               <label htmlFor="/"> Company name</label>
//               <input
//                 type="text"
//                 className="form-control-input"
//                 id="floatingPassword"
//                 placeholder="Enter your company name"
//                 // value={company}
//                 // onChange={(e)=>setCompany(e.target.value)}
//                 value={data.company}
//                 name="company"
//                 onChange={inputEvent}
//                 required
//               />
//               <label htmlFor="/"> Work email</label>
//               <input
//                 type="text"
//                 className="form-control-input"
//                 id="floatingPassword"
//                 placeholder="Enter your company name"
//                 // value={email}
//                 // onChange={(e)=>setEmail(e.target.value)}
//                 value={data.email}
//                 name="email"
//                 onChange={inputEvent}
//                 required
//               />
//               <label htmlFor="/">Mobile number</label>
//               <input
//                 type="number"
//                 className="form-control-input"
//                 id="floatingPassword"
//                 placeholder="Enter your 10 digits phone number"
//                 // value={phone}
//                 // onChange={(e)=>setPhone(e.target.value)}
//                 value={data.phone}
//                 name="phone"
//                 onChange={inputEvent}
//                 required
//                 maxLength={10}
//               />
//               <label htmlFor="/"> Password</label>
//               <input
//                 type="password"
//                 className="form-control-input"
//                 id="floatingPassword"
//                 placeholder="Enter your Password"
//                 // value={password}
//                 // onChange={(e)=>setPassword(e.target.value)}
//                 value={data.password}
//                 name="password"
//                 onChange={inputEvent}
//                 required
//               />
//               <label htmlFor="/"> Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control-input"
//                 id="floatingPassword"
//                 placeholder="Enter your Password"
//                 // value={cnfPassword}
//                 // onChange={(e)=>setCnfPassword(e.target.value)}
//                 value={data.cnfPassword}
//                 name="cnfPassword"
//                 onChange={inputEvent}
//                 required
//               />
//             </div>
//           </div>

//           <div className="details-privacy">
//             {/* <a href="tt">Forgot Password ?</a> */}
//             <p>
//               {" "}
//               By registering,you agree to our terms of service & privacy policy
//             </p>
//           </div>
//           <div class=" button-login d-grid gap-2">
//             <button
//               onClick={submitForm}
//               className=" btn1 btn btn-primary"
//               type="button"
//             >
//               Register
//             </button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Registrationpage;
