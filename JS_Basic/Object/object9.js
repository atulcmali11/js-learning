
const details={
    name:"Ramesh",
    city:"Pune"
};

Object.seal(details);// only update existing values of object

details.phone=123456789;

console.log(details);

Object.freeze(details); 
Object.entries(details);
Object.create(details);

