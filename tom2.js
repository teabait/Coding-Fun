// Write a program that divides up some input text into sentences
// and then determines which sentence in the input has the most words.
// Print out the sentence with the most words and the number of words that are in it.
// Optionally, also print out all words in that sentence that are longer than 4 characters.
// Sentences can end in periods, exclamation points and question marks, but not colons or semi-colons.


var sentence = "Hello this is Tea. I like you! Maybe? You are smelly; all reindeer are smelly.";
var sentencesWithCount = [];

// splits input into array of separate sentences
function splitSentences(input) {
  // regular expression is period, exclamation points, and question marks with any character after them
  // must include . after bracket or else one sentence returned will be an empty string
  var regEx = new RegExp("[\.\!\?].");
  return input.split(regEx);
}

// returns number of words in a sentence
function countWords(string) {
  var wordsArray = string.split(" ");
  return wordsArray.length;
}

// print out all words in that sentence that are longer than 4 characters.
function longWord(string) {
  var wordsArray = string.split(" ");
  for(i in wordsArray) {
    // make sure word does not include punction
    var regEx = new RegExp("[\.\!\?\;]");
    var cleanedWord = wordsArray[i].replace(regEx, "");
    // if word is longer than 4 characters, print that word
    if(cleanedWord.length > 4){
      console.log(cleanedWord);
    }
  }
}

// divides up input text into an array of sentences
var sentencesArray = splitSentences(sentence);

// counts number of words in each sentence within array of sentences and creates a hash object that contains the count
for(i in sentencesArray) {
  var count = countWords(sentencesArray[i]);
  var sentenceWithCount = {count: count, sentence: sentencesArray[i]};
  // push all of these objects in another array
  sentencesWithCount.push(sentenceWithCount);
}

//sort sentences according to number of words. Largest number of words is pushed to first in array.
sentencesWithCount.sort(function (a, b) {
  if(a.count > b.count) {
    return -1;
  }
  if(a.count < b.count) {
    return 1;
  }
  return 0;
});

// print out longest sentence with word count.
console.log(sentencesWithCount[0].sentence, "has", sentencesWithCount[0].count, "words in it");

// print out words within longest sentence that have more than 4 characters
longWord(sentencesWithCount[0].sentence);

