//class defination
class MyA{
    //1.proprtis
      name='';  //empty variable
    //2.constructor
    constructor(){
        this.name="constructor exm."
        this.myFunction2(); 
    }

    //3.method
    myFunction(v){ //formal permetar,
        console .log(`This is a example of constructor.${v}`);
    }
    myFunction2(){
        console .log(` hello ${this.name}`);
    }

}//class end
let obj = new MyA();
obj.myFunction("this is a nodeJs");//actual perametar.

