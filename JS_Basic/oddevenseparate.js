

const num=[1,3,6,2,8,7];
console.log(num);


let b=0;
let e=num.length-1;

while(b<e){
    if(num[b]%2==0){
        b++;
    }
    if(num[e]%2==1){
        e--;
    }

    if(num[b]%2==1 && num[e]%2==0){
        let t=num[b];
        num[b]=num[e];
        num[e]=t;
    }
}
console.log(num);
