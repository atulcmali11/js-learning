//character count from string


const str='maafgfxaac11vb66na77mm';
let cnt=0;

const obj={};
for(let i=0;i<str.length;i++){

    if(obj.hasOwnProperty(str[i])){
        obj[str[i]]=obj[str[i]]+1;

    }else{
        obj[str[i]]=1;
    }

}

for(let k in obj){
    if(obj[k]>2){
        console.log(k,obj[k]);
        
    }
   
}
//console.log(obj);





