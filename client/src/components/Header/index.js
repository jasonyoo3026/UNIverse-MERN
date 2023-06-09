// import React from 'react';
// import { Link } from 'react-router-dom';

// import logo from '../../Assets/Universe_logo.png'

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-5  flex-row align-center" style={{backgroundColor: "#25142d"}}>
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <img src={logo} alt="UNIverse_logo" className="logo" style={{ height: '200px', width: 'auto' }}/>
//           </Link>
//           {/* <p className="m-0"></p> */}
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-info m-1" to="/me">
//                 {Auth.getProfile().data.username}
//               </Link>
//               <button className="btn btn-lg btn-light m-1" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-1" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-1" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Universe_logo.png'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-5  flex-row align-center" style={{backgroundColor: "#25142d"}}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <img src={logo} alt="UNIverse_logo" className="logo" style={{ height: '200px', width: 'auto' }}/>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-1" to="/me">
                {Auth.getProfile().data.username}
              </Link>
              <button className="btn btn-lg btn-light m-1" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg btn-secondary m-1" to="/job-search">
                Job Search
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-1" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-secondary m-1" to="/job-search">
                Job Search
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
