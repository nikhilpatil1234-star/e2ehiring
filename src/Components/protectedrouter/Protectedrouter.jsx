
// import {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import "./protectrouter.scss"

const Protectedrouter = (props) => {
   const  {Component}=props
//    const navigat=useNavigate(); 
//  const useEffect=(()=>{ 
    
//     let login=localStorage.getItem('login'); 
//  if(!login){
    // navigat('/logininputfield')
//  }
//    });
  return (
    <div className='ProtectedrouterContainer'>
<h1>hello this is from Protectedrouter</h1>
<Component/>

    </div>
  )
}

export default Protectedrouter