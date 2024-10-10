const str='aabb111222cc33';
const obj={};

for(let i = 0; i < str.length; i++){
    if (str[i] >= '0' && str[i] <= '9') {  // Check if character is a digit
      if(obj.hasOwnProperty([str[i]])){
        obj[str[i]]= obj[str[i]]+1;
      }
      else{
        obj[str[i]]=1;
      }
    } 
    else{
        if(obj[str[i]]){
            obj[str[i]]= obj[str[i]]+1;
        }
        else{
            obj[str[i]]=1;
        }
    }
}
console.log(obj);