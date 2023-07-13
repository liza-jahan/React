import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const todoTitle="call family ";
const title="this is my country";
const date=new Date();
const dateName=date.getDate();
const monthName=date.getMonth();
const currentYear=date.getFullYear();
// const headingStyle={
//   backgroundColor:"purple",
//   color:"white",
//   fontSize:"3rem",
//   padding:"15pxs"
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   {/* <h2 style={headingStyle}> welcome</h2> */}
   <h2 className='headingStyle largeSize'> welcome</h2>
   <div>
   <p>{title}</p>
   <h1>{todoTitle}</h1>
   <p>{dateName+"/"+monthName+"/"+ currentYear}</p>
   </div>
   </div>

);


