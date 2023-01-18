// import {logo} from "../asset/e2e.svg"
import "./navbar.scss"
import {Link, useLocation} from "react-router-dom"
import logo from "../asset/e2erecruiter.svg"
import { useNavigate } from "react-router-dom";



const Navbar = ({logout}) => {

  const navigate=useNavigate()
  const location=useLocation();
  // console.log(location.pathname);
  return (<>
    <div className=" navcontent">
      <div className="nav-logo"> 
      {/* <img src="./e2e.svg" alt="e2ehiring"  /> */}
      <img  onClick={()=>{navigate("/Home")}} src={logo} alt="e2ehiring"  />
       </div>
      <div className="nav-list">
        <ul>
           <Link to="/Home"> <li> Home</li> </Link> 
           <li> Solutions</li>
          <li>Case studies</li>
          <li> Blogs</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="nav-btn-register">
        { location.pathname==="/" && (
        <Link to="/Registration"> <a href="*">Register</a></Link> 
        )
        }
         { location.pathname==="/Registration" && (
        <Link to="/"> <a href="*">Login</a></Link> 
        )
        }
           { location.pathname==="/Home" && (
        <Link to="/"> <a href="*">Login</a></Link> 
        )
        }
             { location.pathname==="/Dashboard" && (
        <Link to="/"> <a href=" " onClick={logout} >Logout</a></Link> 
        )
        }
    
      </div>
    </div>
    <div>
 

    </div>
    </>
  );
};

export default Navbar;
