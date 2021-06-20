// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
 

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");
   let word = input.question ("Enter a word to score:");
  console.log(oldScrabbleScorer(word));

}




 function simpleScore (word){
   word = word.toUpperCase();
   let letterpoints = "";
   simpleScoreArray = word.split('');
   letterPoints = simpleScoreArray.length
   return letterPoints
 };

 function vowelBonusScore(word){
  word = word.toUpperCase();
  vowelBonusScoreArray = word.split('');
  letterPoints = 0
    for(let i=0; i<vowelBonusScoreArray.length ; i++){
      if (vowelBonusScoreArray[i] === 'A' || vowelBonusScoreArray[i] === 'E' || vowelBonusScoreArray[i] === 'I' || vowelBonusScoreArray[i] === 'O' || vowelBonusScoreArray[i] === 'U'){
        letterPoints+=3
      } else {
        letterPoints +=1
      }
    }
  return letterPoints
};
let scrabbleScore;
let = simpleScoreO = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 pt.',
  scoringFunction: simpleScore
} ;

let vowelBonussCoreO = {
  name: 'Bonus Vowels',
  description: 'Vowel are 3 pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScore
};

let scrabbleScoreO = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: ''
};

const scoringAlgorithms = [simpleScoreO,vowelBonussCoreO,scrabbleScoreO];

function scorerPrompt(word) {
  typeOfScore = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\n Enter 0,1, or 2:");
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

