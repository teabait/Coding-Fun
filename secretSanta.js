// check if there are enough players
// if there are enough players, players get matched with a secretSanta
// they give that secret santa a gift
//   make sure no player is given their own gift
//   make sure no player gets more than one gift

var participants = [];

function Participant(name, giftToGive) {

  this.name = name;
  this.giftToGive = giftToGive;
  this.giftGiven = [];
  this.secretSanta = [];
  this.assigned = false;
}

var personJoin = function(name, gift) {
  name = new Participant(name, gift);
  participants.push(name);
};

var checkPlayerCount = function(){
  return (participants.length >= 3);
};

var getMatched = function(player){
  player.secretSanta = getRandomParticipant();
  if(player.secretSanta === player || player.secretSanta.assigned === true){
    player.secretSanta = getRandomParticipant();
  }
  player.secretSanta.assigned = true;
  if(player.secretSanta.giftGiven.length < 1){
    player.secretSanta.giftGiven = player.giftToGive;
  }
};

var getRandomParticipant = function(){
  return participants[Math.floor(Math.random()*participants.length)];
};

var allMatch = function(){
  for(var i=0; i<participants.length; i++){
    getMatched(participants[i]);
  }
};

personJoin("Tea","Book");
personJoin("Albert","Shoes");
personJoin("Remy","Bone");

allMatch();
console.log(participants);
