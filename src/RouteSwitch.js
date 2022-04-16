import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import App from './App.js';
import Profile from './Profile.js';
import DJKhaled from './DJKhaled.js';
import Tweet from './Tweet.js'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/profile">Profile </Link>|{" "}
        <Link to="/djkhaled">DJ Khaled </Link>|{" "}
        <Link to="/tweet">Tweet </Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/djkhaled" element={<DJKhaled />} />
        <Route path="/tweet" element={<Tweet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;








































// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import App from './App.js';
// import Profile from './Profile.js';
// import DJKhaled from './DJKhaled.js'

// const RouteSwitch = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App/>} />
//         <Route path="/profile" element={<Profile/>} />
//         <Route path="/djkhaled" element={<DJKhaled/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default RouteSwitch;