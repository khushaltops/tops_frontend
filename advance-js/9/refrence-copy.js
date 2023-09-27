let obj1 = {
    a:100,
    b:200,
};
let obj2 = obj1;
obj1.a = 9000;
console.log("obj2",obj2);
console.log("obj1",obj1);
obj3 = {};

for(const key in obj1){
    console.log("key",key);
    obj1.key
}