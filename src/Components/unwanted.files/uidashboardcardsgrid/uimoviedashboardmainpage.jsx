// import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
// import "./ui-dash-board.scss";
// import axios from "axios";
// import Uidashboardcard from "./Uidashboardcard";
// //https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1

// const Uidashboard = () => {
//   const [search, setSearch] = useState("");
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
//       )
//       .then((resp) => {
//         setMovies(resp.data.results);
//       })
//       .catch((err) => {
//         console.log("error");
//       });
//   }, []);
//   return (
//     <div className="dash-board-container">
//       {/* <h3 className="text-center"> Welcome to dash board</h3> */}
//       <div className="container text-center">
//         <h2> Top movie list</h2>
//         <Form>
//           <Form.Group controlId="validationCustom01">
//             <Form.Label></Form.Label>
//             <Form.Control
//               type="text"
//               className=" form-control form-control-input"
//               id="email"
//               placeholder="Search your required movies"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               please enter your name
//             </Form.Control.Feedback>
//           </Form.Group>

//           <button
//             className=" buttonSearchdashboard btn btn-warning"
//             type="button"
//           >
//             Search
//           </button>
//         </Form>
//         <div className="card-container row">
//           {movies.filter((movie)=>{
//             if(search===" "){
//            return movie
//             }else if(movie.original_title.toLowerCase().includes(search.toLowerCase())){
//               return movie
//             }
            
//           } 
//           ).map((movie, index) => {
//             return <Uidashboardcard key={index} {...movie} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Uidashboard;
