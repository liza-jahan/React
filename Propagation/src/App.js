import React, { useState } from "react";

const App = () => {
  const handelClick = (event) => {
   console.log('parent event :',event) ;
  };
 
    const hadelParentClick = (event) => {
      event.stopPropagation();
      console.log('child event :',event) ; ;
    };

  return (
    <div className="parent"onClick={hadelParentClick}>
   
      <button onClick={handelClick}>+</button>
    </div>
  );
};
export default App;
