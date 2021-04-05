class MyClass{
        //1.proprties
                    contacts={} //blank varible
        //2.constructor
                    constructor(F){
                        console.log("identity");
                            this.contacts=F;
                    }
        //.3method
        myFun(){
            console.log(this.contacts);
        }


        }
let V={
    name:"dilip",
    surname:"mali",
    addr:"kjhgfd"
};
let U=new MyClass(V);
U.myFun();