// Write a program that divides up some input text into sentences
// and then determines which sentence in the input has the most words.
// Print out the sentence with the most words and the number of words that are in it.
// Optionally, also print out all words in that sentence that are longer than 4 characters.
// Sentences can end in periods, exclamation points and question marks, but not colons or semi-colons.


var sentence = "Hello this is Tea. I like you! Maybe? You are smelly; all reindeer are smelly.";
var sentencesWithCount = [];

function splitSentences(input) {
  var regEx = new RegExp("[\.\!\?].");
  return input.split(regEx);
}

function countWords(string) {
  var wordsArray = string.split(" ");
  return wordsArray.length;
}

function longWord(string) {
  var wordsArray = string.split(" ");
  for(i in wordsArray) {
    var regEx = new RegExp("[\.\!\?\;]");
    var cleanedWord = wordsArray[i].replace(regEx, "");
    if(cleanedWord.length > 4){
      console.log(cleanedWord);
    }
  }
}

var sentencesArray = splitSentences(sentence);

for(i in sentencesArray) {
  var count = countWords(sentencesArray[i]);
  var sentenceWithCount = {count: count, sentence: sentencesArray[i]};
  sentencesWithCount.push(sentenceWithCount);
}

sentencesWithCount.sort(function (a, b) {
  if(a.count > b.count) {
    return -1;
  }
  if(a.count < b.count) {
    return 1;
  }
  return 0;
});

console.log(sentencesWithCount[0].sentence, "has", sentencesWithCount[0].count, "words in it");
longWord(sentencesWithCount[0].sentence);

