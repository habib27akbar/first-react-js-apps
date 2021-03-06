import React from 'react';
import './css/style.css';
//import image-profiles from './img/0006.jpg';
import profile from './img/0006.jpg';
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
const Hello = () => {
    return (
      <div className="menu">
          <div className="header-bg">
            <img src={profile} className="image-profile"/>
            <div className="name">Habib Akbar Ramdhani</div>
          </div>
      </div>
    );
  };

export default Hello;