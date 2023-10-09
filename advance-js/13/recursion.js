function fun1(params){
    console.log("--->",x);
    if (x>0){
        fun1(x - 1);
    }else{
        console.log("loop finish")
    }
}
fun1(10); 