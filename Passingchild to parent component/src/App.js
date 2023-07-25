import React from 'react'
import Child from './SATET_LIFTING/child'

export default function App() {
  const data="I am from parent (app)";
  const handelChildData = (child)=>{
    console.log(child);
        
  };
  return (
    <div>
      <Child data={data} onChildData={handelChildData}/>

    </div>
  );
}
