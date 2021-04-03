class A{
    //1.proprties
    contacts={}; //blank varible
    //2.constructor
    constructor(y){
        console.log('information');
        this.contacts =y;
    }
    //3.method
            getcontacts(){
                console.log(this.contacts);
            }
    
}
let D={ //D is a object
    name:"dilip mali",
    "class":"MCA 5th",
    "collage":"gyanodya insitutde of managemant",
    mob:"1234567890",
};
let x= new A(D); //class calling
x.getcontacts();