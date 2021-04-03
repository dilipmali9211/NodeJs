class A {
    //1.proprties
    //2.constructor
        constructor(){
            console .log('dilip');

        }
    //3.method
        myF(){
            console .log('mali');
        }
}
class B extends A {
    //1.proprties
    //2.constructor
        constructor(){
            super();
        }
    //3.method
        myF2(){
            console .log('dilipmali');
            
        }

}
let h= new B();
h.myF2();
h.myF();