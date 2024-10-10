
// boolean
//used for true and false

let IsloggnedIn=true
console.log(typeof IsloggnedIn)
console.log(IsloggnedIn)


//undefined
let total;
console.log(typeof total);
console.log(total);


//symbol
let as= Symbol("id");
console.log(typeof as)
console.log(as)


//BigInt

let value=123n;
console.log(typeof value)
console.log(value)



//object

const address={
    city:"pune",
    state:"MH",
    pincode:"413315"
}
console.log(typeof address)
console.log(address)

//array

const num=[1,2,3,'FName','Lname',address];
console.log(typeof num);
console.log(num);