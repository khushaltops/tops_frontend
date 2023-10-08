/*
// var--->

var x=100000;
console.log("X:",x);
x=10;
var x=100;
console.log("X:",x);

//let ---->

//console.log("y:",y); //give error = cannot access 'y' before initialization
let y;
//let y; // indentifier 'y' has already been declared
y=100;
console.log("y:",y);
{
    {
        let m=100;
    }
    console.log("🚀 ~file:variable.js:19 ~ m:" , m);
}
*/

//const

//const z//missing intializer in const declaration
// console.log("🚀z:", z) // Cannot access 'z' before initialization

const z=100;
console.log("🚀z:", z);
// z = 500;//  Assignment to constant variable.
{
    {
        const z1 = 900;
        {
            const z1 =1000;
            console.log('z1',z1);
        }
    }
}