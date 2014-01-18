// Emulate the game "Secret Santa" where there are 3 or more participants
// no participant can receive their own gift or receive more than one gift
var participants = [];
var hatOfParticipants = [];

function Participant (name, giftToGive) {
  this.name = name;
  this.giftToGive = giftToGive;
  this.giftReceived = null;
  this.receiver = null;
}

Participant.prototype.giveGift = function () {
  this.receiver.giftReceived = this.giftToGive;
}

var personJoin = function (name, gift) {
  var person = new Participant(name, gift);
  participants.push(person);
  hatOfParticipants.push(person);
};

var choosePerson = function (player) {
  var chosenPerson = getRandomParticipant(player);
  player.receiver = chosenPerson;
  player.giveGift();
  console.log(player.name,"has been assigned", chosenPerson.name, "and gave them", chosenPerson.giftReceived);
};

var getRandomParticipant = function (player) {
  var personObjectOutOfAHat = hatOfParticipants[Math.floor(Math.random()*hatOfParticipants.length)];

  if(personObjectOutOfAHat === player) {
    return getRandomParticipant(player);
  } else {
    // remove name out of hat
    for(var i in hatOfParticipants) {
      if(hatOfParticipants[i] === personObjectOutOfAHat){
        hatOfParticipants.splice(i, 1);
      }
    }
    return personObjectOutOfAHat;
  }
};

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

// choosePerson(participants[0]);
// choosePerson(participants[1]);
startGame();
