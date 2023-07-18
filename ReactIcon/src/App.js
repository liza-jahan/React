import React, { createElement } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <span>
        <FaFacebook className="icon" />
      </span>

      <span>
        <FaYoutube className="icon" />
      </span>
    </div>
  );
};
export default App;
