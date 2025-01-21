import "../style/hero.css";
import picLogo from "../assets/khriz.jpg";

export default function hero() {
  return (
    <div className="container">
      <div className="subContainer">
        <div className="textContainer">
          <div className="subTextContainer">
            <p className="text1">
              Hi Im Khriz, <span>Web Designer</span>.
            </p>
            <p className="text2">
              I am a 4th year student from Western Mindanao State University
              taking Bachelor of Science in Information Technology.
            </p>
          </div>
        </div>

        <div className="textContainer">
          <img className="image" src={picLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
