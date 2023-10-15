import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';

// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <div >
       
//         <div >
//           Contenido de la primera mitad
//         </div>

        
//         <div >
//           <App />
//         </div>
//       </div>
//     </BrowserRouter>
//   </React.StrictMode>,
//   rootElement
// );

