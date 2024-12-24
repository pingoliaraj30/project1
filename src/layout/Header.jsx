import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ cart = [], onRemoveFromCart }) => {
  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand text-uppercase logo" href="#">
          <span className="logo-left">pr</span> <span className="logo-right">Company</span>
        </a>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/faq's">
                FAQ's
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Cart Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="cartDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cart ({cart.length})
            </button>
            <ul className="dropdown-menu" aria-labelledby="cartDropdown">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                    <span>
                      {item.title} - ${item.price}
                    </span>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => onRemoveFromCart(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))
              ) : (
                <li className="dropdown-item">Your cart is empty.</li>
              )}
            </ul>
          </div>
          {/* Login and Sign Up Buttons */}
          <div className="d-flex ms-3">
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;






// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';

// const Header = ({ cart = [], onRemoveFromCart }) => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg custom-navbar"
//       style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand text-uppercase logo" href="#">
//           <span className="logo-left">pr</span> <span className="logo-right">Company</span>
//         </a>

//         {/* Navbar Toggler for small screens */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/product">
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/faq's">
//                 FAQ's
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/AboutUs">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           {/* Cart Dropdown */}
//           <div className="dropdown">
//             <button
//               className="btn btn-outline-primary dropdown-toggle"
//               type="button"
//               id="cartDropdown"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Cart ({cart.length})
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="cartDropdown">
//               {cart.length > 0 ? (
//                 cart.map((item, index) => (
//                   <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
//                     <span>
//                       {item.title} - ${item.price}
//                     </span>
//                     <button
//                       className="btn btn-danger btn-sm ms-2"
//                       onClick={() => onRemoveFromCart(index)}
//                     >
//                       Remove
//                     </button>
//                   </li>
//                 ))
//               ) : (
//                 <li className="dropdown-item">Your cart is empty.</li>
//               )}
//             </ul>
//           </div>
//           {/* Login and Sign Up Buttons */}
//           <div className="d-flex ms-3">
//             <Link to="/login" className="btn btn-outline-primary me-2">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-primary">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;




// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';

// const Header = ({ cart = [] }) => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg custom-navbar"
//       style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand text-uppercase logo" href="#">
//           <span className="logo-left">pr</span> <span className="logo-right">Company</span>
//         </a>

//         {/* Navbar Toggler for small screens */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/product">
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/faq's">
//                 FAQ's
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/AboutUs">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           {/* Cart Dropdown */}
//           <div className="dropdown">
//             <button
//               className="btn btn-outline-primary dropdown-toggle"
//               type="button"
//               id="cartDropdown"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Cart ({cart.length})
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="cartDropdown">
//               {cart.length > 0 ? (
//                 cart.map((item, index) => (
//                   <li key={index} className="dropdown-item">
//                     {item.title} - ${item.price}
//                   </li>
//                 ))
//               ) : (
//                 <li className="dropdown-item">Your cart is empty.</li>
//               )}
//             </ul>
//           </div>
//           {/* Login and Sign Up Buttons */}
//           <div className="d-flex ms-3">
//             <Link to="/login" className="btn btn-outline-primary me-2">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-primary">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;






// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar" style={{
//       position: "fixed",
//       top: 0,
//       width: "100%",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       zIndex: 1000,
//     }}>
//       <div className="container">
//         {/* Logo */}
//         <a className="navbar-brand text-uppercase logo" href="#">
//           <span className="logo-left">pr</span> <span className="logo-right">Company</span>
//         </a>

//         {/* Navbar Toggler for small screens */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/product">
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active " to="/faq's">
//                 FAQ's
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/AboutUs">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/contact">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           {/* Login and Sign Up Buttons */}
//           <div className="d-flex">
//             <Link to="/login" className="btn btn-outline-primary me-2">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-primary">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
