class A{
    //1.properties
        sim={}; //blank varible
    //2.constroctor
        constructor(e){
            console.log("information");
             this.sim=e;
        }
    //3.method
    blue(){
        console.log(this.sim);

            }
}
let D={
    name:"dilip mali",
    "class":"MCA 5th",
    "collage":"gyanodya insitutde of managemant",
    mob:"1234567890",
    };
let e=new A(D);
e.blue();

