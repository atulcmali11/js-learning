// let str='nitin'
// let len=str.length;
// console.log(str)

// const char5=str[4]
// const char1=str[3];
// const char2=str[2];
// const char3=str[1];
// const char4=str[0];

//console.log(char5+char1+char2+char3+char4)


//let str="hello";
//output ---> olleh

//let len=str.length;
// let rev="";
// for(let i=len-1;i>=0;i--){
//     //str.charAt(i)
//     rev=rev+str[i];
     
// }console.log(rev)
 

// rev with function

function revstr(str){
    let rev="";
for(let i=str.length-1;i>=0;i--){
    //str.charAt(i)
    rev=rev+str[i];
     
}//console.log(rev)
return rev;
}
const aa=revstr("atul mali");
console.log(aa);