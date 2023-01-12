//  Objective
// At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

 

// Instructions
// 1.The length of the sentence (the number of characters).
// 2.The number of words in the sentence (assuming that the words are separated by a single space).
// 3.The number of vowels in the sentence.
// **You have to keep in mind that: 
// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.


const sentence = "assuming that the words are separated by a single space"; kingdom
let lenght = 0;
let wordCount = 0;
let vowelCount = 0;

for (let i = 0; i < sentence.length; i++) {
    lenght++;
    if(sentence[i] === " ") {
        wordCount++;
    }
    if (sentence[i] === "a" || sentence[i] === "e" || sentence
    [i] === "i" || sentence[i] === "o" || sentence[i] === "u" ) {
        vowelCount++;
    }
}

console.log(`The Lenght of the sentence is: ${lenght}.`);
console.log(`The Number words are: ${wordCount +1}.`);
console.log(`The Number of the vowels are: ${vowelCount}.`);

