function countCharactersAndDigits(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= '0' && char <= '9') { // Check if character is a digit
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        } else { // Else, it's considered a character
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

// Example usage:
let str = "Hello1234World123";
let counts = countCharactersAndDigits(str);
console.log(counts);