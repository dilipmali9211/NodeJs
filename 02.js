//objects in varible
class MyClass{
    //1.proprties
    varible={}; //blank virible
    //2.constrctor
     constructor(H){
         console.log("information");
             this.varible=H;
     }
    //3.method
        myFunction(){
            console.log(this.varible);
        }

}
let G ={
    student_name:"honey",
    "surname":"sisodiya",
    "education":"masters of computer science",
}
let C=new MyClass(G);
C.myFunction();
