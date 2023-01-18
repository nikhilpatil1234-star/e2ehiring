import React, { useEffect, useState } from "react";
import "./ui-dash-board.scss";
import axios from "axios";
import Uidashboardcard from "./Uidashboardcard";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper styles
import 'swiper/css';
//https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1

const Uidashboard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
      )
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  return (
    <>
      <div className="dash-board-container">
        {/* <h3 className="text-center"> Welcome to dash board</h3> */}
        <div className="dashboardmoviecontainer container text-center">
          <h2> Top movie list</h2>
      <div> 
          <Swiper
      
            modules={[Pagination,Navigation]}
            slidesPerView={6}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            navigation
          >
            <div className="card-container">
           
                {movies
                  .map((movie, index) => {
                    return (
                      <SwiperSlide>
                      <Uidashboardcard key={index} {...movie} />
                    </SwiperSlide>
                      );
                  })}
             
            </div>
          </Swiper>
          {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
// .filter((movie) => {
//   if (search === " ") {
//     return movie;
//   } else if (
//     movie.original_title
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   ) {
//     return movie;
//   }
// })
export default Uidashboard;
