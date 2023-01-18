// import React, { useState } from "react";
// import "./logininputfield.scss";
// import { useNavigate } from "react-router-dom";
// // import Uidashboard from "../ui-dash-board/Uidashboard";

// const Logininputfield = () => {
//   const [validated, setValidated] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // for login if email and password matches in local storage useref() and apply some condtional rendering
//   // const email = useRef();
//   // const password = useRef();
//   const navigate = useNavigate();
//   const getData = JSON.parse(localStorage.getItem("userData"));
//   console.log(getData);
//   // console.log(getEmail.email)
//   // let sortedEmail=getEmail.filter((sort)=>sort.email==="patiln7504@gmail.com")
//   // console.log(sortedEmail)
//   //  let filt=getEmail.filter((x)=>x.firstName==="Nikhil")
//   //  console.log(filt)
//   // const getPassword=localStorage.getItem('userData')

//   const HandleSubmit = (event) => {
//     const getData = JSON.parse(localStorage.getItem("userData"));
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true)

//     //  getData.some((localStorage) => ( localStorage.email === email && localStorage.password=== password? navigate("/Dashboard") :console.log("registor") ));
//     if (
//       getData.some((localStorage) => {
//         return localStorage.email === email;
//       })
//     ) {
//       navigate("/Dashboard");
//     }
//     if (
//       getData.some((localStorage) => {
//         return localStorage.password === password;
//       })
//     ) {
//       navigate("/Dashboard");
//     }
//     // if( getData.some((localStorage)=>{ return localStorage.email===" " || 0 })) {
//     // //  alert("please fill the sign page")
//     //  navigate("/")
//     // }
//     else {
//       alert(" invalid password or please registor for going to dash board");
//       navigate("/Registration");
//     }
//   };
//   // let find=email.current.value
//   // console.log(find)
//   // if ( getData.some((v) => {
//   //     return v.email === setEmail(email);
//   //   }) &&
//   //   getData.some((v) => {
//   //     return v.password === setPassword(password);
//   //   })
//   // )
//   //  {
//   //   navigate("/Dashboard");
//   // }
//   //  else {
//   //   navigate("/Registration");
//   // }

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
//           <form action="" className="needs-validation" noValidate>  
//             <div className="input-form input-form2">
//             <label for="email"> Work email</label>
//             <input
//               type="text"
//               className=" form-control form-control-input"
//               id="email"
//               placeholder="Enter your company name"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback"> please enter your email</div>
//             <label for="password"> Password</label>
//             <input
//               type="password"
//               className=" form-control form-control-input"
//               id="password"
//               placeholder="Enter your 10 digits phone number"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback"> please enter your valid password</div>
//             </div>
//             <div className="forgot-password-link">
//             <a href="tt">Forgot Password ?</a>
//              </div>
//              <div className=" button-login d-grid gap-2">
//             <button
//               onClick={HandleSubmit}
//               className=" btn1 btn btn-primary"
//               type="button"
//             >
//               Login
//             </button>
//              </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Logininputfield;
