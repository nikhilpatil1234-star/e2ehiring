// import React from 'react'
// import { useState } from 'react'
// import "./registrationpage.scss"

// const Registrationpage = () => {
 
//   // useEffect(()=>{
//   //   localStorage.setItem('company',company)
//   // },[ ])

//   const submitForm=(e)=>{
//     // let userDataArray=[ ]
//     let userDataArray=JSON.parse(localStorage.getItem("userData") || "[]")
//     console.log(userDataArray)
//     let userData={
//       firstName:data.firstName,
//       lastName:data.lastName,
//       company:data.company,
//       email:data.email,
//       phone:data.phone,
//       password:data.password,
//       cnfPassword:data.cnfPassword
//     }

//     if(userDataArray.some((store)=>{ return store.email===data.email})){
//       alert("email already exits")
//     }
//     else{
//       userDataArray.push(userData)
//       localStorage.setItem('userData',JSON.stringify(userDataArray))
//     }
 

//     // localStorage.setItem('company',company)
//     // localStorage.setItem('firstName',JSON.stringify(firstName))
//     // localStorage.setItem('lastName',JSON.stringify(lastName))
//     // localStorage.setItem('email',email)
//     // localStorage.setItem('phone',phone)
//     // localStorage.setItem('password',password)
//     // localStorage.setItem('cnfPassword',cnfPassword)

//   }

//   const [data,setData]=useState({
//     firstName:"",
//     lastName:'',
//     company:'',
//     email:'',
//     phone:'',
//     password:'',
//     cnfPassword:''

//   })
//   const inputEvent=(event)=>{
//     let {value,name}=event.target
//   setData((prevalue)=>{
//     if(name==="firstName"){
//       return {
//         firstName:value,
//         lastName:prevalue.lastName,
//         company:prevalue.company,
//         email:prevalue.email,
//         phone:prevalue.phone,
//         password:prevalue.password,
//         cnfPassword:prevalue.cnfPassword
//      }
//   }
//   else if( name==='lastName') {
//     return {
//       firstName:prevalue.firstName,
//       lastName:value,
//       company:prevalue.company,
//       email:prevalue.email,
//       phone:prevalue.phone,
//       password:prevalue.password,
//       cnfPassword:prevalue.cnfPassword
//    }
//   }
//   else if( name==='company') {
//     return {
//       firstName:prevalue.firstName,
//       lastName:prevalue.lastName,
//       company:value,
//       email:prevalue.email,
//       phone:prevalue.phone,
//       password:prevalue.password,
//       cnfPassword:prevalue.cnfPassword
//    }
//   }
//   else if( name==='email') {
//     return {
//       firstName:prevalue.firstName,
//       lastName:prevalue.lastName,
//       company:prevalue.company,
//       email:value,
//       phone:prevalue.phone,
//       password:prevalue.password,
//       cnfPassword:prevalue.cnfPassword
//    }
//   }
//   else if( name==='phone') {
//     return {
//       firstName:prevalue.firstName,
//       lastName:prevalue.lastName,
//       company:prevalue.company,
//       email:prevalue.email,
//       phone:value,
//       password:prevalue.password,
//       cnfPassword:prevalue.cnfPassword
//    }
//   }
//   else if( name==='password') {
//     return {
//       firstName:prevalue.firstName,
//       lastName:prevalue.lastName,
//       company:prevalue.company,
//       email:prevalue.email,
//       phone:prevalue.phone,
//       password:value,
//       cnfPassword:prevalue.cnfPassword
//    }
//   }
//   else if( name==='cnfPassword') {
//     return {
//       firstName:prevalue.firstName,
//       lastName:prevalue.lastName,
//       company:prevalue.company,
//       email:prevalue.company,
//       phone:prevalue.phone,
//       password:prevalue.password,
//       cnfPassword:value
//    }
//   }
  
// })
//  }
// // )
// // setData({
// //   ...prevalue,
// //   [event.target.name]: value
// // });



//   // const [ firstName,setFirstName]=useState('')
//   // const [ lastName,setLastName]=useState('')
//   // const [company,setCompany]=useState('')
//   // const [email,setEmail]=useState('')
//   // const [phone,setPhone]=useState('')
//   // const [password,setPassword]=useState('')
//   // const [cnfPassword,setCnfPassword]=useState('')


//   return (
//     <div className="login-main-container">
//     <div className="left-side-login">
//       {/* <img src="./background.png" alt="background" srcset="" /> */}
//       {/* <div className="image-office-left-side">
//         <img src="./officeman.jpg" alt="office" srcset="" />
//       </div> */}
//       <div className='card-registration'>
//         <div className="card-registration-body">
//           <h5 className="card-registration-title"> <span style={{fontWeight:"750"}}>Pay  </span> as you  <span style={{fontWeight:"750"}}>Hire </span> </h5>
//           <p className="card-text"> We don't charge if your hiring needs are Not fulfilled
//           </p>
//         </div>
//         <div className="card-registration-blank"> </div>
//         <div className='cart-text-2'> 
//         <p>You will get to try </p></div>
//         <div className='card-content-1'>
//           <div className='ai-icon'> 
//           {/* <img src="" alt="" srcset="" /> */}
//           </div>
//         <p> The best AI-powered recruitment platform that helps you hire the right talent in the shortest time.</p>

//       </div>
//       <div className='card-content-2'>
//       <div className='setting-icon'> 
//           {/* <img src="" alt="" srcset="" /> */}
//           </div>
//        <p>The Platform to manage multiple accounts, jobs, panels and candidates along with managing the entire interview lifecycle with ease</p>
//       </div>
//       </div>
    
//     </div>
//     <div className="right-side-login">
//       <h1>Register</h1>
//       <div className="input-form" novalidate>
//         <div className='input-form-first-second-name'> 
//          <div className='input-form-first-label'> 
//           <label for="validationCustom01" > First name</label>
//           <input
//           type="text"
//           class="form-control-input"
//           id="alidationCustom01"
//           placeholder="Enter your name"
//           // value={firstName}
//           // onChange={e=>setFirstName(e.target.value)
//         // }
//         name='firstName'
//         onChange={inputEvent}
//         value={data.firstName}
//         required
//         />
    
//          </div>
//          {/* <div className='input-form-first-name'></div> */}
        
//          <div className='input-form-first-label'>
//          <label htmlFor="/"> Last name</label>
//         <input
//           type="text"
//           class="form-control-input"
//           id="floatingPassword"
//           placeholder="Enter your last name"
//           value={data.lastName}
//           // onChange={e=>setLastName(e.target.value)}
//           name='lastName'
//           onChange={inputEvent}
//           required
//         />
//          </div>
         
        
//         </div>

//         <div className='input-form-others-details'> 
//         <label htmlFor="/"> Company name</label>
//         <input
//           type="text"
//           class="form-control-input"
//           id="floatingPassword"
//           placeholder="Enter your company name"
//           // value={company}
//           // onChange={(e)=>setCompany(e.target.value)}
//           value={data.company}
//           name='company'
//           onChange={inputEvent}

//           required
//         />
//         <label htmlFor="/"> Work email</label>
//         <input
//           type="text"
//           class="form-control-input"
//           id="floatingPassword"
//           placeholder="Enter your company name"
//           // value={email}
//           // onChange={(e)=>setEmail(e.target.value)}
//           value={data.email}
//           name='email'
//           onChange={inputEvent}
//           required
//         />
//          <label htmlFor="/">Mobile number</label>
//         <input
//           type="number"
//           class="form-control-input"
//           id="floatingPassword"
//           placeholder="Enter your 10 digits phone number"
//           // value={phone}
//           // onChange={(e)=>setPhone(e.target.value)}
//            value={data.phone}
//           name='phone'
//           onChange={inputEvent}
//           required
//         />
//         <label htmlFor="/"> Password</label>
//         <input
//           type="password"
//           class="form-control-input"
//           id="floatingPassword"
//           placeholder="Enter your Password"
//           // value={password}
//           // onChange={(e)=>setPassword(e.target.value)}
//           value={data.password}
//           name='password'
//           onChange={inputEvent}
//           required
//         />
//          <label htmlFor="/"> Confirm Password</label>
//         <input
//           type="password"
//           class="form-control-input"
//           id="floatingPassword"
//           placeholder="Enter your Password"
//           // value={cnfPassword}
//           // onChange={(e)=>setCnfPassword(e.target.value)}
//           value={data.cnfPassword}
//           name='cnfPassword'
//           onChange={inputEvent}
//           required
//         />
//       </div>
        
//         </div>
     
//       <div className="details-privacy">
//         {/* <a href="tt">Forgot Password ?</a> */}
//         <p> By registering,you agree to our terms of service & privacy policy</p>
//       </div>
//       <div class=" button-login d-grid gap-2">
//         <button onClick={submitForm} class=" btn1 btn btn-primary" type="button">
//        Register
//         </button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Registrationpage