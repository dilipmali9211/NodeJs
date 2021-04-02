//constrastor
class MyClass{
    //1.property
    contacts={};
    //2.constrastor
     constructor(y){
     console.log('this is a example of constrastor');
     this.contacts=y;
     }
     //3.method
     getContacts(){
         console.log(this.contacts);
     }
}
let x={
    name:"dilip",
    surname: "mali",
    mob: "12345",
    addr: "xyz"
};
let obj = new MyClass(x);
obj.getContacts();