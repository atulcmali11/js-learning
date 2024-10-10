

const ss="nitin";
function palindrome(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];

    }
    return rev;
}

let aa=palindrome(ss)
console.log(aa);
if(aa==ss){
    console.log("The entered string is palindrome");
}
else{
    console.log("The entered string is not palindrone");
}