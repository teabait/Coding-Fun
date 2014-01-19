// Emulate the game "Secret Santa" where there are 3 or more participants
// no participant can receive their own gift or receive more than one gift

// all players in the game
var participants = [];

// emulates a hat, where players' names are drawn to be someone's gift receiver
var hatOfParticipants = [];

function Participant (name, giftToGive) {
  this.name = name;
  this.giftToGive = giftToGive;
  this.giftReceived = null;
  this.receiver = null;
}

// participants give the person they've selected out of a hat a gift
Participant.prototype.giveGift = function () {
  this.receiver.giftReceived = this.giftToGive;
}

// when a person joins the game, a person is created and then added to the list of all players as well as the hat of names
var personJoin = function (name, gift) {
  var person = new Participant(name, gift);
  participants.push(person);
  hatOfParticipants.push(person);
};

// select a "name" out of the hat
var getRandomParticipant = function (player) {
  var personObjectOutOfAHat = hatOfParticipants[Math.floor(Math.random()*hatOfParticipants.length)];

  // if the random selection is the same as the player who draws a name, draw another name
  if(personObjectOutOfAHat === player) {
    return getRandomParticipant(player);
  } else {
    // remove name out of hat so it can't be drawn again
    for(var i in hatOfParticipants) {
      if(hatOfParticipants[i] === personObjectOutOfAHat){
        hatOfParticipants.splice(i, 1);
      }
    }
    return personObjectOutOfAHat;
  }
};

// player is assigned a person. Then gives that person the gift player brought.
var choosePerson = function (player) {
  var chosenPerson = getRandomParticipant(player);
  player.receiver = chosenPerson;
  player.giveGift();
  console.log(player.name,"has been assigned", chosenPerson.name, "and gave them", chosenPerson.giftReceived);
};

// goes through each participant and makes sure they can choose a name and give a gift
var startGame = function () {
  if(participants.length > 2) {
    for(var i in participants) {
      choosePerson(participants[i]);
    }
  }
};

personJoin("Tea","Book");
personJoin("Albert","Shoes");
personJoin("Patrik","Kite");
personJoin("Remy","Bone");
personJoin("McKenneth","Coffee");
personJoin("Ryan Gosling","A poster of Ryan Gosling");

startGame();
