// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userWord;
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
   userWord = input.question ("Enter a word to score: ");
   return userWord.toUpperCase();
  //console.log(oldScrabbleScorer(word))
  };
  //console.log(word);




 function simpleScore (word){
	let letterPoints = "";
  let score = 0;
	  for (const letter of word) {

			letterPoints += `Points for '${letter}': 1\n`
      score++
		
	  }
  console.log(letterPoints);
  console.log(`Points for ${userWord}: ${score}`)
	};
 

 function vowelBonusScore(word){
  vowelBonusScoreA = word.split('');
  letterPoints = 0
    for(let i=0; i<vowelBonusScoreA.length ; i++){
      if (vowelBonusScoreA[i] === 'A' || vowelBonusScoreA[i] === 'E' || vowelBonusScoreA[i] === 'I' || vowelBonusScoreA[i] === 'O' || vowelBonusScoreA[i] === 'U'){
        letterPoints+=3
      } else {
        letterPoints +=1
      }
    }
  return letterPoints
};
let scrabbleScore;
let  simpleScoreO = {
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
  scoringFunction: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScoreO,vowelBonussCoreO,scrabbleScoreO];

function scorerPrompt() {
  let typeOfScore = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\n Enter 0,1, or 2:");
  //let typeoFscore = scoringAlgorithms[typeOfScore];
  return scoringAlgorithms[Number(typeOfScore)].scoringFunction(userWord)
  //return typeoFscore
  //console.log('Score for'(scoringAlgorithms))
  //console.log(scoringAlgorithms[typeOfScore].scoringFunction);//.name);
  
      
  };



function transform(oldPointStructure) {
let newPointStructure ={};
for (let newPoints in oldPointStructure){
  for(let i = 0; i < oldPointStructure[newPoints].length; i++){
  newPointStructure[oldPointStructure[newPoints][i]]= Number(newPoints)
  }
}
return newPointStructure
};
//console.log(transform(oldPointStructure));
let newPointStructure = transform (oldPointStructure);
//console.log("Score for",initialPrompt,":",transform(oldPointStructure))

function runProgram() {
   initialPrompt();
   scorerPrompt();
   //let userScore = algorObject.scoringFunction(word);
   //console.log(`Score for ${word}: ${userScore}`);
   //console.log(transform(word));
   
   
}
//console.log(word);
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