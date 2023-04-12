// function App() {
//   return (
//     <div className='App'>
//       <div>
//         <a href='https://reactjs.org' target='_blank'>
//           <img src={reactLogo} className='logo react' alt='React logo' />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className='card'>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className='read-the-docs'>
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

// export default App;

import React from "react";
import reactLogo from "./assets/react.svg";
import webPackLogo from "./assets/webpack.gif";
import "./styles/index.css";

function App() {
  return (
    <div className='App'>
      <div>
        <a href='https://webpack.js.org/' target='_blank'>
          <img src={webPackLogo} className='logo' alt='Webpack logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Webpack + React</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Webpack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
