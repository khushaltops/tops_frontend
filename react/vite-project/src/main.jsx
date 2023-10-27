import rect from "react"
import reactDom from "react-dom/client";

let obj = {name:"urvish",age:23};
let x = <h1>h1what is this.?</h1>;
let arr = ['urvish',"jeel","nimesh"]; 
let nameDiv = arr.map((e) => {
  return <h1></h1>;
});

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(
   <react.strictmode>\ 
      {/* <h1>hello world</h1>
      <h1>hello world</h1>

      {----use {} to write js----}
      <h1>{15+15}</h1> */}

      {/* {---use of map----} */}
      {Array.map((e) => {
        return <h1>{e}</h1>;
      })}
       <hr />
       {nameDiv}
      
      {/* {----can't print objrct----} */}
      <h1>{obj}</h1>

      {/* {----print value of array---} */}
      {/* <h1>{arr[0]}</h1>
      <h1>{arr[1]}</h1>
      <h1>{arr[2]}</h1> */}
   </react.strictmode>
);
