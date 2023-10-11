/*
// stape-1
1. gethering requirment
2. what we have and what we have to delever
3. make plan for task and devide them
4. exicute your plan chnage according real time changes 
5. test it 
6. deliver

EXAMPLE

1. what to find all city which have more charectar then user gave
2. data of city and city's array which all city have more char.. then user gave
3. make plan 
    - get all city name one by one 
    - find length of all city 
    - compare that length with user input
    - get all city which match our criteria
    - only city name
*/

/*const DATA = require("../../../js-assignment/data/jason");
//console.log(DATA,DATA);

let data = DATA.filter((ele) => {
    //console.log(",ele.city.lenth > 14");
    return ele.city.lenght > 14;
});

data.map((e)=>{
    return e.city
}) 
console.log("data",data);
*/

const x=getcitybychlength(14);
console.log("x",x);