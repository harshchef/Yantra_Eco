// // // AboutUsPage.js

//  import React from "react";
//  import "./AboutUs.css"; // You can create this CSS file for styling
// import Image from "./Gardening.jpg";
// const AboutUsPage = () => {
//   return (
//     <div className="abtcontainer">
//       <div className="abttitle">
//         <h1>About Us</h1>
//       </div>
//       <div className="abtsections">
//         <div className="abtsection1">
//           <p>
//             Are you passionate about sustaianbility? Do you find events related
//             to sustaianbility cool? Then this is where you need to be. Our
//             website helps you find Non-Governmental Organizations (NGOs) and
//             other Corporate Entities that are hosting these events and lets you
//             book and enjoy them. You can find the relevant event that you like
//             and book your tickets accordingly. Find the roles that you want to
//             participate in and have a great time. Great for a good family time
//             and team building excercises.
//           </p>
       
//         </div>
//         <div className="abtslant-divider"></div>
//         <div className="abtsection2">
//           <img className="abtabout" src={Image} alt="Placeholder" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;


// // AboutUsPage.js

 import React from "react";
 import "./AboutUs.css"; // You can create this CSS file for styling
import Image from "./Gardening.jpg";
const AboutUsPage = () => {
  return (
    <div className="abtcontainer">
      <header className="home-header">
        <h1 className="home-title">Takatak</h1>
        <nav className="home-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/maps">Events</a>
            </li>
           
            <li>
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="empty-div">
        </div>
      </header>
      <div className="abttitle">
        <h1>About Us</h1>
      </div>
      <div className="abtsections">
        <div className="abtsection1">
          <p>
            Are you passionate about sustaianbility? Do you find events related
            to sustaianbility cool? Then this is where you need to be. Our
            website helps you find Non-Governmental Organizations (NGOs) and
            other Corporate Entities that are hosting these events and lets you
            book and enjoy them. You can find the relevant event that you like
            and book your tickets accordingly. Find the roles that you want to
            participate in and have a great time. Great for a good family time
            and team building excercises.
          </p>
       
        </div>
        <div className="abtslant-divider"></div>
        <div className="abtsection2">
          <img className="abtabout" src={Image} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;