//1.  length:- use to find out the length of string
const str="atul mali pandharpur";
const str1="pune";
//console.log(str.length);
//output=20

// 2. charAt(): it will return the character of specific index. str[5]

//console.log(str.charAt(5));
//output=m

//3. substring():-use to extract part of string between indices (last index-1)
// begining index is larger than end index then it will automatically swapping end to begin and vice versa

console.log(str.substring(9,5));
//output=mal

// 4. replace():- replace specified value with another value in string.
//replaceall()

let newstr=str.replaceAll("a","B");
//console.log(newstr);
//console.log(str);
//output=atul mali Bhose

// 5. split():- splitting string into array of string. We can use any character or any pattern to split the sting
let splittedString=str.split(' ');
//console.log(splittedString);
//output=['atul','mali','pandharpur']

// 6. includes():- used to check if string conatins a specified value. if yes the it will return true else false

//console.log(str.includes('mali'));
//output=true

// 7. indexof():- return the first index of specified element.if specific element not found then it will return -1.

//console.log(str.indexOf('p'));
//output=-1
//console.log(str.indexOf('b'));
//output=3

// 8. touppercase() and tolowercase():-
//console.log(str.toUpperCase());
//output= overall string in uppercase

// 9. trim():- remove spaces from both side of string
//console.log(str.trimStart());
//console.log(str);

//10. concat():- join 2 or more string
//console.log(str.concat(str1));
//output= atum mali pandharpur pune

//11. endswith():- return true/false

//console.log(str.startsWith('  '));

// 12. slice():- negative indexing supported which is not in substring

//console.log(str.slice(5,9));

//13. 

//console.log(str.search(''));

//14. charCodeAt():return ASCII

//console.log(str.charCodeAt(0));

//15. padStart():-
const ss="hello";
let ss1=ss.substring(2);
console.log(ss1.padStart(ss.length,'#'));
console.log(ss.padEnd(12,'#'));







