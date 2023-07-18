import React, { createElement } from "react";

function Welcome() {
  return <h1>Welcome</h1>;
}
function Welcome1() {
  return React.createElement("h1", {}, "Welcome");
}
function Todo() {
  return (
    <div>
      <p>todo title</p>
      <p>todo desc</p>
    </div>
  );
}
function Todo1() {
  return React.createElement(
    "div",
    {},
    React.createElement("p", {}, "Todo title"),
    React.createElement("p", {}, "Todo title")
  );
}
function App() {
  return (
    <div>
      <Welcome />
      <Welcome1 />

      <Todo />
      <Todo1 />
    </div>
  );
}
export default App;
