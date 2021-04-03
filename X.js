//1.fat arrow function
    function myFunA(){
        return'hello good morning'; 
                     }//function ending
//.function calling
    let x= myFunA();
        console .log(x);

//2.use of fat arrow
    const myFun=()=>{
        return"my name is dilip mali";
                    }//.function ending
//function calling
        const y= myFun();
            console .log(y);
//arrow function in formal argument
        var myFun2=(B)=>{
            return`I live in ${B}`//formal argument
        }
//function calling
        let f =myFun2("nimuch");
            console.log(f);