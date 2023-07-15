import React from "react";
import Card from "./Components/Card";
import "./App";
import Data from "./data.json";

// function App() {

//   return <div>

//     <h1 className="headingStyle">Todo</h1>
//     <Card titleText={Data[0].title} descText={Data[0].desc}/>
//     <Card titleText={Data[1].title} descText={Data[1].desc}/>
//     <Card titleText={Data[2].title} descText={Data[2].desc}/>
//     <Card titleText={Data[3].title} descText={Data[3].desc}/>
//   </div>
// }

// export default App;

//2nd way
// function App() {
//   let items = [];
//   for (let x = 0; x < Data.length; x++) {
//     items.push(<Card titleText={Data[x].title} descText={Data[x].desc} />);
//   }

//   return (
//     <div>
//       <h1 className="headingStyle">Todo</h1>
//       {items}
//     </div>
//   );
// }

// export default App;

//3rd way
//mapping
// function App() {
//   let items = [];
//   items = Data.map((item) => <Card titleText={item.title} descText={item.desc} />
//   );
//   return (
//     <div>
//       <h1 className="headingStyle">Todo</h1>
//       {items}
//     </div>
//   );
// }

// export default App;

//or
function App() {
  
  return (
    <div>
      <h1 className="headingStyle">Todo</h1>
     {  Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc} />)}

    </div>
  );
}

export default App;
