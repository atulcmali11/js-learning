// normal way to write object
const sample={
    name:"Devanshi",
    Age:3,
    Surname:"Mali",
    address:{
        city: "pandharpur",
        Pincode:413315
    },
    class1:['First','Second'],
    samFunction: function(){
        console.log("Sample function");
     }
  };
console.log(sample);

//==========================================above code using constructor function=================

function sample2(name1,age1,surname1,address1,class1){
    this.name1=name1;
    this.age1=age1;
    this.surname1=surname1;
    this.address1=address1;
    this.class1=class1
    //this.samFunction1
}
const a1=new sample2("Pari",10,"Mali","Bhose","Fifth")
const a2=new sample2("Pari1",102,"Mali2","Bhose3","Fifth4")
console.log(a1);
console.log(a2);


//accessing/iterating object elements through for loop using in keyword.
for(let i in a2){
    console.log(a2[i]);
    
}
