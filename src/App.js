// import Navbar from "./Components/Loginpage/Navbar"; original 
import "./App.scss"
import Navbar from "./Components/Navbar/Navbar"
import {Routes,Route, Navigate} from "react-router-dom"
// import {Protected}from "react-router-dom"
// import Registrationpage from "./Components/Loginpage/Registrationpage"; original
import Registrationpage from "./Components/Loginpage/ui-registration/Registrationpage";
import Logininputfield from "./Components/Loginpage/Logininputfield";
import UiLandingPage from "./Components/ui-landing-page/UiLandingPage";
import Uidashboard from "./Components/ui-dash-board/Uidashboard";
import Uiforgotpassword from "./Components/ui-forgot-password/Uiforgotpassword";
import Uiforgotresetpassword from "./Components/ui-forgot-reset-password/Uiforgotresetpassword";
import { useEffect, useState } from "react";


function App() {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    const use=localStorage.getItem("user");
    use && JSON.parse(user)? setUser(true):setUser(false)
  },[user]);
  useEffect(()=>{
    localStorage.setItem("user",user);
  },[user])

  return (
    <div className="App">
      <Navbar logout={()=>setUser(false)}/>
      <Routes>
        { !user && ( <>
          <Route path="/Registration" element={<Registrationpage/>}/>  
           <Route path="/" element={<Logininputfield authenticate={()=>setUser(true)}/>}/>  
           <Route path="/Home" element={<UiLandingPage/>} /> </>
        )}
        {user &&( <>
        <Route path="/Dashboard" element={<Uidashboard />} />
        </>
        )
        
        }
          
           <Route path="/ForgotPassword" element={<Uiforgotpassword/>} />
           <Route path="/ForgotresetPassword" element={<Uiforgotresetpassword/>} />
           <Route path="*" element={<Navigate to={user?"/":"/"}/>} />

    </Routes>

    </div>
  );
}

export default App;
