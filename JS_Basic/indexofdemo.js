
//let str="alul mlli";

//console.log(str.indexOf('l'));

// let ind=-1;
// const searchChar='l';
// let cnt=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]==searchChar){//if(str.charAt(i))

//         ind=i;
//         //break;
//         cnt=cnt+1; // specific character count
//     }

// }
// console.log(`Count of ${searchChar} is ${cnt}`);

//console.log(`${searchChar} is prasent at position ${ind} `);

let str="alul mlli";
function lastIndex(str){

    let ind=-1;
    const searchChar='l';
    let cnt=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==searchChar){//if(str.charAt(i))
    
            ind=i;
            break;
            cnt=cnt+1; // specific character count
        }
    
    }
    return ind;
   // return cnt;

}
let res= lastIndex(str);
console.log(res);


