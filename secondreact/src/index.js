import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import Test from './Test';
import MyClass from './MyClass';
import Samplearg from './Samplearg';
import ObjectTest1 from './ObjectTest1';
import ObjectTest2 from './ObjectTest2';


function Nav() {
  return(
    <h1>Nav</h1>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <table border = {1}>
      <tr>
        <td>App</td>
        <td>Test</td>
        <td>Sample</td>
      </tr>
      <tr>
        <td><App/></td>
        <td><Test/></td>
        <td><Samplearg/></td>
      </tr>
    </table> */}
    <App1 />
    {/* <hr></hr>
    <Test/>
    <hr></hr>
    <Nav/>
    <hr></hr>
    <Sample/>
    <hr></hr>
    <MyClass/>
    <hr></hr>
    <ObjectTest1/>
    <hr></hr>
    <ObjectTest2/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
