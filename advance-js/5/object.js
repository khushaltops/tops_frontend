let obj = {
  name:"urvish",
  age:23,
  city:"surat",
}

let keyarr = object.keys(obj);
console.log("keyarr:",keyarr);

let valuearr = object.values(obj);
console.log("valuearr:",valuearr);

let entriesarr = object.entries(obj); // {{"name","khushal"}}
console.log("entriesarr",entriesarr);

// give a every key of objec

for (const key in obj) {
    console.log("---->key:",key);
    obj:key;
    console.log("obj.kry:w",obj[key])
}