
//Creating an Object

let bike={
    brand:"Honda",
    model:"Activa",
    year:2024,
    isValid: false,
    objArray:[1,2,3,[4,5]]
}
// Object.freeze(bike); cant update or add
//Object.seal(bike); // update existing but not allow to add or delete

//Accessing Properties
// console.log(bike);
// console.log(bike.brand);
// console.log(bike["model"]);
// console.log(typeof(bike.year));
// console.log(bike.objArray[3][0]);

//Adding or Modifying Properties

bike.color="White"; //adding new property
bike.year=2023; // updating existing property
console.log(bike);

//Deleting properties

// delete bike.color;
// console.log(bike);

let student={
    firstname:'Atul',
    lastname:'Mali',
    city:'Pandharpur',
    address(a,b){
        return a-b;
        //return this.city;
        
    }

};
//console.log(student.address(2,5));// calling functin here
//console.log(typeof(student.address));


let sam=[1,2,34,4];
for (let i in sam){ // it will retuns keys
    //console.log([i]); // dispaly keys
    //console.log(sam[i]);// dispaly values
    
}
for(let key in student){
   //console.log(key+":"+student[key]);
    
}
// console.log(Object.keys(student));
// console.log(Object.values(student));

//another approach

let sample={
    greet:function(){
       // console.log("Javascript Object creation");
        
    }
};
let obj=Object.create(sample);
obj.greet();


//Using Constructor Functions

function employee(fName,lName){
    this.fName=fName;
    this.lName=lName;
}
let emp=new employee("Atul","Mali");
//console.log(emp);

// using class in ES6
class day{
    constructor(fName,lName){
        this.fName=fName;
        this.lName=lName;
    }

    fullName(){
        return `${this.fName} ${this.lName}`;
    }

}
let aa= new day("atul","mali");
//console.log(aa.fullName());



let xxx={
    name11:"aa",
    city:"cc"
}

//console.log(Object.hasOwn(xxx,'name111'));
console.log(xxx.hasOwnProperty('city'));
 



