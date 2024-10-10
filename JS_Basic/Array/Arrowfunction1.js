
// even number using arrow function
const a=[1,2,3,4,5];

const evenno=a.filter(ele=>ele%2==0)
//console.log(`Even number from an Array:-${evenno}`);
//====================================================================================

// odd number using arrow function
const oddno=a.filter(ele=>ele%2==1)
//console.log(`Odd number from an Array:-${oddno}`);

//=================================================================================
// using function even number
let evennumber=[];
function even(){
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        evennumber=evennumber+a[i]; 
    }
}
return evennumber;
} 
let result=even(a);
console.log(`Even number=${result}`);
//===================================================================================
// usinfg function odd number
let oddnumber=[];
function odd(a){
for(let j=0;j<a.length;j++){
    if(a[j]%2==1){
        oddnumber=oddnumber+a[j];
    }
}return oddnumber;
}
let result1=odd(a);
console.log(`odd number=${result1}`);
