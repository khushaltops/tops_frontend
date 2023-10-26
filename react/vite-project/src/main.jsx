import react from "react";
import reactDOM from "react-dom/client";
import funcom from "./2.component/functional/funcom";

let obj = {name:"urvish",age:23};
let x = <h1>what is this</h1>;
let arr = ["urvish","jeel","nimesh"];
let nameDiv = arr.map((e) => {
  return <h1>{e}</h1>;
});
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <react.StrikeMode>
    {/* <h1>hello world</h1>
    <h1>hello world</h1>
    <h1>{15+15}</h1>
    {  ---use  {} to write js---}
    { <h1>{15+15}</h1>}
    {x} */}
    {/* { ---use of map---} */}
    {/* {
      arr.map((e) => {
        return <h1>{e}</h1>;
      })
    } */}
    <hr />
    {nameDiv}
    {/* {---can't print object} */}
    {/* <h1>{obj.name}</h1> */}

    <hr />
    {/* {---can print array---} */}
    {/* <h1>{arr}</h1> */}

    {/* { ----print value of array} */}
    {/* <h1>{arr[0]}</h1>
    <h1>{arr[1]}</h1>
    <h1>{arr[2]}</h1> */}
    
  <funcom />
  </react.StrikeMode>
);