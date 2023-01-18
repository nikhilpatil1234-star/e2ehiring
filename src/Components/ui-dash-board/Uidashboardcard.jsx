import React from 'react'
import "./ui-dash-board.scss";

const getPosterUrl=(posterPath)=>{
    return ` https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
}
const Uidashboardcard = ({poster_path,original_title,release_date,original_language,popularity,vote_count}) => {

  const myStyle={
    
      backgroundImage: 
`url(${getPosterUrl(poster_path)})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  

  }
  return (
<> 
{/* <div className='card-style-onhover  col-12 col-sm-6 col-lg-4 col-xl-3' style={myStyle}> */}

<div className='card-style-onhover ' style={myStyle}>
    {/* <img src={getPosterUrl(poster_path)} alt={original_title} className="w-[200px] h-[225px] shadow-lg rounded-md" /> */}
    <p>Title :{original_title} </p>
    <p>language:{original_language}  </p>
    <p>popularity:{popularity} </p>
    <p> votecount:{vote_count}</p>
    <p className='font-normal'>{release_date}</p>
    <div className="">
    {/* <h4 className='font-bold '>{original_title}</h4>
   <p className='font-normal'>{release_date}</p> */}
    </div>
</div>

 </>
  )
}

export default Uidashboardcard