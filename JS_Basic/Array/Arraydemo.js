// Collection of elements.
// Its an Object.
// its resizable and contains mix type of elements.


const myName=["Atul","Mali"];
const myNum=[1,2,3,4,5,6,7,8,9,10];

//console.log(myName);
// console.log(myNum);
// console.log(myNum[3]);
// myNum[3]=25;
// console.log(myNum);

for (let i=0;i<myNum.length;i++){
    console.log(myNum[i]);
    
}

for (let num of myNum){
    console.log(num);
    
}

//Array Methods

//1. push():- adding new element at end of array

const myNum1=[1,2,3,4,5];
myNum1.push(55);
console.log(myNum1);


//2. unshift()-adding new value at begining of array

myNum1.unshift(22);
console.log(myNum1);

//3. pop():- delete last element of array

myNum1.pop()
console.log(myNum1);

//4. shift():- removing/ deleting first index element
myNum1.shift();
console.log(myNum1);

//5. includes():- true false values

console.log(myNum1.includes(88));

//6. slice

myNum1.slice(1,3);
console.log(myNum1);


//7. splice:-
myNum1.splice(1,2);


