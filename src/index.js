import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { FirstContext } from './React-Hooks/UseContextHook/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
// let data={data:'API DATA INTEGRATION',
// data1:'USING USEEFFECT AND USECONTEXT'}

root.render(
  <React.StrictMode>
    {/* <FirstContext.Provider value={data}> */}
         
          <App />

    {/* </FirstContext.Provider> */}
  </React.StrictMode>
);


