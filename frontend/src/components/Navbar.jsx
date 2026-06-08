// // src/components/Navbar.jsx
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/lunarcaster-logo.png"; // pastikan logo sudah ada
// import { Link, useLocation, useNavigate } from "react-router-dom";

// function Navbar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/signin");
//   };

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Menu", path: "/menu" },
//     { name: "Reserve", path: "/reserve" },
//     { name: "Order", path: "/order" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full px-8 md:px-16 lg:px-24 py-4 bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc] flex items-center justify-between shadow-md">
//       {/* Logo & Name */}
//       <div className="flex items-center gap-3">
//         <img src={logo} alt="La Lunarcaster Cafe" className="w-20 md:w-28 object-contain" />
//         <h1 className="great-vibes-regular text-2xl md:text-3xl text-[#FFF8F0] tracking-wide">
//           La Lunarcaster Cafe
//         </h1>
//       </div>

//       {/* Navigation Links */}
//       <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
//         {navLinks.map((link) => (
//           <li key={link.path}>
//             <Link
//               to={link.path}
//               className={`transition-all duration-200 ${
//                 location.pathname === link.path
//                   ? "text-[#d7c689] font-bold"
//                   : "hover:text-[#d7c689] text-white/80"
//               }`}
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {user ? (
//       <button
//         onClick={handleLogout}
//         className="hidden md:block text-white/80 font-semibold hover:text-white transition"
//       >
//         Logout
//       </button>
//     ) : (
//       <Link
//         to="/signin"
//         className="hidden md:block text-white/80 font-semibold hover:text-white transition"
//       >
//         Sign In
//       </Link>
//     )}

//       {/* Buttons Sign In & Order Now */}
//       <div className="flex items-center gap-5">
//         <Link
//           to="/signin"
//           className="hidden md:block text-white/80 font-semibold hover:text-white transition"
//         >
//           Sign In
//         </Link>

//         <Link
//           to="/order"
//           className="px-4 py-2 rounded-lg bg-[#4a2d27] text-[#FFF8F0] font-bold hover:opacity-90 transition"
//         >
//           ORDER NOW
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// src/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/lunarcaster-logo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("pendingReservationLogin");
    navigate("/signin");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reserve", path: "/reserve" },
    { name: "Order", path: "/order" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full px-8 md:px-16 lg:px-24 py-4 bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc] flex items-center justify-between shadow-md">
      {/* Logo & Name */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="La Lunarcaster Cafe"
            className="w-20 md:w-28 object-contain"
          />

          <h1 className="great-vibes-regular text-2xl md:text-3xl text-[#FFF8F0] tracking-wide">
            La Lunarcaster Cafe
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-[#d7c689] font-bold"
                  : "hover:text-[#d7c689] text-white/80"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Buttons */}
      <div className="flex items-center gap-5">
        {user ? (
          <button
            onClick={handleLogout}
            className="hidden md:block text-white/80 font-semibold hover:text-white transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signin"
            className="hidden md:block text-white/80 font-semibold hover:text-white transition"
          >
            Sign In
          </Link>
        )}

        <Link
          to="/order"
          className="px-4 py-2 rounded-lg bg-[#4a2d27] text-[#FFF8F0] font-bold hover:opacity-90 transition"
        >
          ORDER NOW
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;