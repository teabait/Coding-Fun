// Emulate the game "Secret Santa" where there are 3 or more participants
// no participant can receive their own gift or receive more than one gift
var participants = [];

function Participant (name, giftToGive) {

  this.name = name;
  this.giftToGive = giftToGive;
  this.giftReceived = null;
  this.receiver = null;
  this.beenChosen = false;
  this.hasChosen = false;
}

Participant.prototype.giveGift = function () {
  this.receiver.giftReceived = this.giftToGive;
}

var personJoin = function (name, gift) {
  var person = new Participant(name, gift);
  participants.push(person);
};

var choosePerson = function (player) {
  var chosenPerson = getRandomParticipant(player);
  player.receiver = chosenPerson;
  player.giveGift();
  console.log(player.name,"has been assigned", chosenPerson.name, "and gave them", chosenPerson.giftReceived);
};

var getRandomParticipant = function (player) {
  var personObjectOutOfAHat = participants[Math.floor(Math.random()*participants.length)];

  if(personObjectOutOfAHat === player || personObjectOutOfAHat.beenChosen === true) {
    return getRandomParticipant(player);
  } else {
    personObjectOutOfAHat.beenChosen = true;
    return personObjectOutOfAHat;
  }
};

var startGame = function () {
  if(participants.length > 2) {
    for(var i=0; i<participants.length; i++) {
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
