//object

// {}--->denoted


const person={
    firstName: "Atul",
    lastName:"Mali"
};
console.log(person);
//accessing object
console.log(person.firstName);
console.log(person["lastName"]);

//adding property in an object
person.city="Pandharpur";
console.log(person);

//deleting existing property
delete person.city;
console.log(person);
