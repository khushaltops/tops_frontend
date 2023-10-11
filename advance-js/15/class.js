class user{
    constructor(){
        console.log("---constructor---");
        this.name = "urvish";
        this.age = 23;
    }
    print(params){
        console.log("---print---");
    }
    print(params){
       console.log("---print---");
    }
}

const class1 = new user();
const class2 = new user();
console.log("class2",class2);
console.log("class1",class1);
class1.print()