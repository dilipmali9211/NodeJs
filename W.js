class A{
    //1.proprties
    //2.constructor
    constructor(){
        
    }
    //3.method
    myF(y){
        console .log( `${y}`)
    }
}
class B extends A{
    //1.proprties
    //2.constructor
    //3.method
    myf2(x){
        console .log(`${x}`)
    }
}
let x={
    dilip:"mali",
    ravi:"kumar",
    kavi:"sharma"
};
let c =new B(x);
c.myf2(x);