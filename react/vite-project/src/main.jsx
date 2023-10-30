import react from "react";
import reactDOM from "react-dom/client ";
// import FunCom from "./component/functional/FunCom";

obj = {name:'jeel',age:23};
let x = <h1>hello world</h1>;
let arr = ["urvish","jeel","nimesh"];
let namezDiv = arr.map((e) =>{
    return 
})
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <react.strictMode>
    {/* <h1>hello world</h1>
    <h1>hello world</h1>

    // {   ------use {} to write js -----}
    <h1>{14+15}</h1> */}
    {/* { {x} } */}

    {/* { ----- use for map --------} */}
    {Array.map((e) => {
        return <h1></h1>;
    })}
    <hr />
    {namediv}

    {/* { ----can't print object-----} */}

    <h1>{obj.name}</h1>
    {/* { ----print value of array----} */}
    {/* {
      <h1>{arr[0]}</h1>
      <h1>{arr[1]</h1>
      <h1>{arr[2]</h1>
    } */}

    {/* { ---- component -----} */}
    <FunCom/>

    </react.strictMode>
);