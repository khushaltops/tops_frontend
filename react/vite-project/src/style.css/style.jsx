import react from "react";
import ""

export default function style(){
    let divstyle = {
        height:"100px",
        width:"100px",
        backgroundcolor:"black",
        color:"white",
    }
    return ( 
      <>
        <h1 style={{color:"lighte "}}>
            inline css </h1>
            <hr />
            <h3>style variable</h3>
            <div style={divstyle}> style variable</div>
            <hr />
            <div ClassName="container">hello external CSS</div>
            <hr />    
            <div>
                <h1 classname="text-danger">hello bootstrap</h1>
            </div>
    </>
    );
}