
const a=[1,2,3,4,5];
let sum=0;
let sum1=0;
for(let i=0;i<a.length;i++){
    if(a[i]%2==1){
        sum=sum+a[i];
    }
    else{
        sum1=sum1+a[i];

    }
}
console.log(`sum of evenno:${sum},sumof odd no:${sum1}`);
//console.log(sum1);
const sqr=a.map(ele=>ele*ele);
const ev=a.filter(e=>e%2==1);
console.log(`even number of array:${ev}`);
console.log(`Squer of elements:${sqr}`);

//==========================================================================

const b=[1,2,3,4,5];
let sumofEvenno=0;

for(let j=0;j<b.length;j++){
    if(b[j]%2==0){
        sumofEvenno=sumofEvenno+b[j];
    }
}
console.log(sumofEvenno);
