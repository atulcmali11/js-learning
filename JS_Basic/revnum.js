let num=456;
//outpu=7654

const d1=num%10;
num=Math.floor(num/10);
console.log(d1)// d1=7
console.log(num)//num=12

const d2=num%10;
num=Math.floor(num/10);
console.log(d2) //d2=2
console.log(num) //num=1

const d3=num%10;
num=Math.floor(num/10);
console.log(d3) // d3=1
console.log(num) //num=0

let result=d1*100+d2*10+d3*1;
console.log("Reverse number=",result)


