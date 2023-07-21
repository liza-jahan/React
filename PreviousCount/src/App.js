import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handelIncrement = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);

  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handelIncrement}>+</button>
    </div>
  );
};
export default App;
