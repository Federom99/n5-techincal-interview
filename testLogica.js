function reverseStringWithSpecialChars(inputStr) {
   
    let charArray = inputStr.split('');

    let letters = [];
    for (let i = 0; i < charArray.length; i++) {
        if (/[a-zA-Z]/.test(charArray[i])) {  
            letters.push({ char: charArray[i], index: i });
        }
    }

    letters.reverse();

    let result = [];
    let letterIndex = 0;
    for (let i = 0; i < charArray.length; i++) {
        if (/[a-zA-Z]/.test(charArray[i])) {
            result.push(letters[letterIndex].char);
            letterIndex++;
        } else {
            result.push(charArray[i]);
        }
    }

    return result.join('');
}

// Example
console.log(reverseStringWithSpecialChars("a,b$c")); 
console.log(reverseStringWithSpecialChars("Ab,c,de!$"));  
