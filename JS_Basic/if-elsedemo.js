

/*if (condition) {
  //   executed if the condition is true
}*/

let age=15;

if(age>=18){
    console.log("Voting rights");
}
else{
    console.log("No rights for voting");
}

/*if (condition) {
    //  executed if the condition is true
  } else {
    //  executed if the condition is false
  }
  */

  let a=71;
  let b=50;
  let c=61;

  if(a>b && a>c){
    console.log("Largest number=A");
  }
  else if(b>a && b>c){
    console.log("Largest number=B");
  }
  else{
    console.log("Largest number=C");
  }

//if(a>b && a>c || b>a && b>c || c>a && c>b)