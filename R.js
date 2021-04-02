class MyA{
    //proprtis
    
    //constructor
    constructor(){

    }
    //method
 
    myFuction(){

        console.log("hello a");
    }
}//class ending
class MyB extends MyA{
    //proprtis
    
    //constructor
   constructor(){
       super();
       this.myFuction();
   }
    //method
    myFuction1(){

        console.log("hello b");
    }
} //class ending
let obj = new MyB();