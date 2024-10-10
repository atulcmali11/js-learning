// function hello(){
//     console.log("No parameter and No return value");
// }
// hello();

// function hello1(msg){
// console.log(msg);
// }
// hello1("Parameter with no return value");

// function hello2(a,b){
// return a+b;
// }
// let output=hello2(5,6);
// console.log(`parameter with retrun value=${output}`);

// function hello3(){
//     return 5*6;
// }
// let multiplication=hello3();
// console.log(`no parameter with retrun value ${multiplication}`);


// Function Expression

let greet=function(name){
    return `Hello ${name} !`;
};
console.log(greet("Atul"));


// Arrow function

let greet1=(name1)=>`Hello ${name1}!`;
console.log(greet1("Atul"));



function add(a,b){
    console.log(a+b);
    
}
function sub(a,b){
    console.log(a-b);
    
}

function calculator(a,b,cal){
    console.log(a,b);
    cal(a,b);
       
}

calculator(1,2,add);
calculator(2,1,sub)

