
const obj1= {
    name:'Atul',
    age:35,
    isStudent:false,
    address:{
        city:'Pandharpur',
        pincode:413315
    },
    subjects:["EN","MR"],
    greeting: function(){
        console.log("Hello world");
        
    }
}
console.log(obj1.age);
console.log(obj1.address.pincode);
console.log(obj1.isStudent);
console.log(obj1.subjects[1]);
obj1.greeting();


