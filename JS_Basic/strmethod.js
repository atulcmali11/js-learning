

/*
String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

*/


let str=" Atul Mali Bhose ";

//Length
console.log("Length of string:-",str.length);

//trim
console.log(str.trim());

//trimstart()
console.log(str.trimStart());

//trimend
console.log(str.trimEnd());

//charAT()
console.log(str.charAt(2));


//charCodeAt()---Used to find out ASCII value of any character

let str2="Atul Mali"

console.log(str2.charCodeAt(0));

//concat() ----used to join multiple strings
console.log("concat:-", str2.concat("Ok","By"))

//includes()-----checking the presence of any character
// if multiple character present then it will return first character occurance

console.log(str2.includes('l'));
console.log(str2.search('l'))
console.log(str2.search('l'))

console.log(str2.lastIndexOf('l'))






