// import React from "react";
// import "./Navbar.css";
// import Logo from './Logo.jpeg';
// import { Link } from 'react-router-dom';
// import Video1 from './lelo yaar.jpg';


// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-left">
//           <img src={Logo} alt="logo" className="logo" />
//         </div>

//         <div className="navbar-right">
//           <ul className="nav-links">
//             <li className="dropdown">
//               <a href="#">Made For ▾</a>
//               <div className="dropdown-content">
//                 <a href="#">Students</a>
//                 <a href="#">Adults</a>
//               </div>
//             </li>

//             <li className="dropdown">
//               <a href="#">Resources ▾</a>
//               <div className="dropdown-content">
//                 <a href="#">Productivity Methods</a>

//                 <div className="dropdown-submenu">
//                   <a href="#">Help Center ▸</a>
//                   <div className="dropdown-submenu-content">
//                     <a href="tel:+911234567890">Phone: +91 1234567890</a>
//                     <a href="tel:+919876543210">Phone: +91 9876543210</a>
//                     <a href="mailto:support@example.com">Email: support@example.com</a>
//                   </div>
//                 </div>

//                 <a href="#">Blog</a>
//                 <a href="#">Templates</a>
//               </div>
//             </li>

//             <li><a href="#">Premium for 100rs</a></li>
//           </ul>
//         </div>
//       </nav>

//       <div className="tracker" style={{ color: 'white' }}>
//         Your ultimate task tracker
//       </div>

//       {/* Video Section */}
//       <div className="video-container">
//         <img src={Video1}/>

//       </div>

//       <div className="login-container">
//         <Link to="/login" className="login-text">Login</Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React from "react";
import "./Navbar.css";
import Logo from './Logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className="navbar-right">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#">Made For ▾</a>
              <div className="dropdown-content">
                <a href="#">Students</a>
                <a href="#">Adults</a>
              </div>
            </li>

            <li className="dropdown">
              <a href="#">Resources ▾</a>
              <div className="dropdown-content">
                <a href="#">Productivity Methods</a>

                <div className="dropdown-submenu">
                  <a href="#">Help Center ▸</a>
                  <div className="dropdown-submenu-content">
                    <a href="tel:+911234567890">Phone: +91 1234567890</a>
                    <a href="tel:+919876543210">Phone: +91 9876543210</a>
                    <a href="mailto:support@example.com">Email: support@example.com</a>
                  </div>
                </div>

                <a href="#">Blog</a>
                <a href="#">Templates</a>
              </div>
            </li>

            <li><a href="#">Premium for 100rs</a></li>
          </ul>
        </div>
      </nav>

      <div className="tracker">Your ultimate task tracker</div>

      <div className="video-container">
        <div className="glowing-circle">
          <div className="revolving-light"></div>
        </div>
      </div>

      <div className="login-container">
        <Link to="/login" className="login-text">Login</Link>
      </div>
    </>
  );
};

export default Navbar;
