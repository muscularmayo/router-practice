import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from './App.js';
import Profile from './Profile.js';
import DJKhaled from './DJKhaled.js';
import Tweet from './Tweet.js'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div>
        <a
          href="/profile"
        >
          Profile
        </a>
      </div>
      <div>
        <a
          href="/djkhaled"
        >
          DJ KHALED
        </a>
      </div>
      <div>
        <a
          href="/tweet"
        >
          Tweet
        </a>
      </div>

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