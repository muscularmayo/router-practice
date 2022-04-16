import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App.js';
import Profile from './Profile.js';
import DJKhaled from './DJKhaled.js';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/djkhaled" element={<DJKhaled />} />
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