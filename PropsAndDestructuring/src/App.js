import React from "react";
import Card from "./Components/Card";
import  "./App";
function App() {
  return <div>

    <h1 className="headingStyle">Todo</h1>
    <Card titleText="Call mother"descText="This is the desc1"/>
    <Card titleText="Call Father"descText="This is the desc2"/>
    <Card titleText="Call mother"descText="This is the desc3"/>
    <Card titleText="Call Father"descText="This is the desc1"/>
  </div>
}

export default App;
