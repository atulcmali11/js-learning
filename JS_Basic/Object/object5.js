let str="umesh bagal";
const vow="aeiou";

result="";

for(let i=0;i<str.length;i++){
    if(vow.includes(str.charAt(i))){
        
        result=result+str.charAt(i);
    }
}

console.log(result.length);
console.log(result);






