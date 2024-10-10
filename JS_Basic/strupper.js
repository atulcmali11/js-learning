

function UppCase(str1){
    let upcs=str1.toUpperCase();
        return upcs;
}
let upprint= UppCase("atul mali");
console.log(upprint);

//==========================================================================
function evenOdd(no1){
    if(no1%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
  
}

evenOdd(56);
//================================================================================
function toupCase(str2){
    let upCaseChar;
    let result="";
   for(let i=0;i<str2.length;i++){
    let a=str2.charCodeAt(i)-32;
    upCaseChar= String.fromCharCode(a);
    result=result+upCaseChar;
   } 
   return result;
   }
   //upCaseChar=T
   //i=0,1
   //a=t number
let dd=toupCase("atul");
console.log(dd);
//console.log("A".charCodeAt(0));
//=================================================================================
//strinf split using

function strsplit(str3){
    let sspilt=str3.split("l");
    return sspilt;
}
let res=strsplit("atul mali bhose")
console.log(res);
//======================================================================================
// find digit into string
function findDigit(str5){
    let digit=[];
    for(let i=0;i<str5.length;i++){
        
        if(str5[i]>=0 && str5[i]<=9){
            digit=digit+str5[i];
        }
    }
    return digit;
}
let aaa=findDigit("asd1h6k8l578");
console.log(aaa);