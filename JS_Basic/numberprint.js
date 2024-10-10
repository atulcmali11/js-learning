const str="aass1123564khjkhjk";

let result="";
sum=0;
for(i=0;i<str.length;i++){
    if(str.charAt(i)>='0' && str[i]<='9'){
        result=result+str[i];
        //sum=sum+ Number str[i];

    }
}
console.log(result);
