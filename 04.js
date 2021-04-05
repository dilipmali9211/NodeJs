//Example of array 
class MyClass {
    W = [   //1.proprties
        "Name:- DILIP MALI",  //1.string
        "AGE:-22",// 2. int
        "HEIGHT:- 5.7",//3.float
        ["FATHER'S NAME:-PYARCHAND"], //4.array in array
        {
            Friend: 'surabh'//proprties
        }

    ];
    constructor(a) {  //2.constructor
        this.z= a;
        

        console.log(this.z);
    }
}
let z = [   //1.proprties
    "Name:- RAVI MALI",  //1.string
    "AGE:-25",// 2. int
    "HEIGHT:- 5.7",//3.float
    ["FATHER'S NAME:-RAM"], //4.array in array
    {
        Friend: 'Rakesh'//proprties
    }

];

let d = new MyClass(z);


