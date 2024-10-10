//object creation using new kyeword

const person= new Object();
console.log(person);
person.name='atul';
person.mobile=[1111111,3333333];
person.greeting= function(){
    console.log("Hello");
    
}
person.address={
    city:'Pandharpur',
    pincode:'413315'
};
console.log(person);

// constructor function

function Obj2(name,age){
    this.name=name;
    this.age=age;
}

const a= new Obj2("Atul",32);
const b= new Obj2("Suresh",35);
const c= new Obj2("Umesh",33);
c.city='Pune';

console.log(a);
console.log(b);
console.log(c);

for(let k in c){
    console.log(c[k]);
    
}