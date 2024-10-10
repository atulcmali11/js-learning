
let str="aaatttul";
let str1="";
for (let i=0;i<str.length;i++){
    let c=str[i];
    if(!str.substring(i+1).includes(c) && !str.substring(0,i).includes(c) ){
        console.log("Non-Repeating char",c);
        break;
               
    }
    
}
//console.log(str1);

//i=0 c=a  str1=a