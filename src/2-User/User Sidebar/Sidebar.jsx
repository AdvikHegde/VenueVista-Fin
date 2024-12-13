// // import './Sidebar.css'

// // import { NavLink } from 'react-router-dom';

// // import bookvenue from './Icons/bookvenues.png'
// // import bookinghistory from './Icons/bookinghistory.png'
// // import contactadmin from './Icons/contactadmin.png'
// // import mydetails from './Icons/mydetails.png'
// // import leavereview from './Icons/review.png'

// // import profileimage from '../User Personal Details/user.png';



// // function Sidebar(){
// //   return(
// //     <>

// //     {/* HORIZONTAL NAVBAR */}
// //     <nav className="bg-white border-gray-200 dark:bg-gray-900">
// //       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

// //         <a className="flex items-center space-x-3 rtl:space-x-reverse">
// //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VenueVista</span>
// //         </a>

// //         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
// //             <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
// //               <img className="w-8 h-8 rounded-full" src={profileimage}  alt="user photo"/>
// //             </button>
// //         </div>
        
// //         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
// //           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// //             <li>
// //               <NavLink to='/home' href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
// //             </li>
// //           </ul>
// //         </div>

// //       </div>
// //     </nav>
// //     </>
// //   )
// // }
// // export default Sidebar;


import './Sidebar.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import bookvenue from './Icons/bookvenues.png';
import bookinghistory from './Icons/bookinghistory.png';
import contactadmin from './Icons/contactadmin.png';
import mydetails from './Icons/mydetails.png';
import leavereview from './Icons/review.png';

import profileimage from '../User Personal Details/user.png';

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  // Sample user data for demonstration
  const user = {
    username: 'AdvikHegde',
    email: '2022.advik.hegde@ves.ac.com',
  };

  return (
    <>
      {/* HORIZONTAL NAVBAR */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VenueVista</span>
          </a>

          <div
            className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isHovered}
            >
              <img className="w-8 h-8 rounded-full" src={profileimage} alt="user photo" />
            </button>

            {/* User Info Dropdown */}
            {isHovered && (
              <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10 right-0 mt-2">
                <div className="font-semibold text-gray-800">{user.username}</div>
                <div className="text-gray-600 text-sm">{user.email}</div>
              </div>
            )}
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to='/home'
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;


