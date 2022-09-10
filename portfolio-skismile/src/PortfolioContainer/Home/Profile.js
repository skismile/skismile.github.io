import React from "react";
import Typical from 'react-typical'
import './Profile.css'
{/* <Typical
loop={Infinity}
steps={[
    "Enthusiastiv Dev 😎",
    1000,
    "Full Stack Devloper 💻",
    1000,
    "MERN Stack Devloper 😎",
    1000,
    "Enthusiastiv Dev 😎",
    1000,
    "Enthusiastiv Dev 😎",
    1000,
]}
/> */}
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instragram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Ismile</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="promary-text">
              <h1>
                {" "}
               <Typical
loop={Infinity}
steps={[
    "Enthusiastiv Dev 😎",
    1000,
    "Full Stack Devloper 💻",
    1000,
    "MERN Stack Devloper 😎",
    1000,
    "Enthusiastiv Dev 😎",
    1000,
    "Enthusiastiv Dev 😎",
    1000,
]}
/>
               
              </h1>
              <span className="profile-role-tagline" >
Knack of building applications with front and back end operations.

              </span>
            </span>
          </div>
<div className="profile-options">
  <button className="btn primary-btn">
    Hire Me {" "}
  </button>
  <a href="ISMILE_RESUME.pdf" download={'ISMILE_RESSUME.pdf'} >
    
    <button className='btn highlighted-btn' >Get Resume</button>
     </a>

</div>

        </div>

        <div className="profile-picture">
<div className="profile-picture-background">

</div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
