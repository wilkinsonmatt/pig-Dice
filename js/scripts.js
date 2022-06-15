function Game(numberofPlayers) {
  this.players = [];
  this.numberOfPlayers = numberofPlayers;
  this.turn = 0;
}

let currentgame;

Game.prototype.AddPlayers = function () {
  console.log("hi");
  for (let i = 0; i < currentgame.numberOfPlayers; i++) {
    console.log(i);
    let newplayer = new Player(i);
    currentgame.players.push(newplayer);
  }
};

function Player(playerid) {
  this.totalscore = 0;
  this.tempscore = 0;
  this.playerNumber = playerid;
}

function rollTheDice() {
  let diceroll = Math.floor(1 + Math.random() * 6);
  $(".diceRoll").html(diceroll);
  return diceroll;
}

function tempscore() {
  $(".tempScore1").html(currentgame.players[0].tempscore);
  $(".tempScore2").html(currentgame.players[1].tempscore);
  $(".tempScore3").html(currentgame.players[2].tempscore);
  $(".tempScore4").html(currentgame.players[3].tempscore);
}

function totalscore() {
  $(".totalScore1").html(currentgame.players[0].totalscore);
  $(".totalScore2").html(currentgame.players[1].totalscore);
  $(".totalScore3").html(currentgame.players[2].totalscore);
  $(".totalScore4").html(currentgame.players[3].totalscore);
}

function roll(playerid) {
  let score = 0;
  score = rollTheDice();
  if (score === 1) {
    currentgame.players[playerid].tempscore = 0;
    return false;
  } else {
    currentgame.players[playerid].tempscore += score;
    tempscore();
    return true;
  }
}

function hold(playerid) {
  currentgame.players[playerid].totalscore +=
    currentgame.players[playerid].tempscore;
  console.log(currentgame.players[playerid].playerNumber);
  totalscore();
}

$(document).ready(function () {
  $("form#pigForm").submit(function (event) {
    event.preventDefault();
    const numberofPlayers = parseInt(
      $("input:radio[name=player]:checked").val()
    );
    currentgame = new Game(numberofPlayers);
    currentgame.AddPlayers();
    console.log(currentgame.players[0].playerNumber);
  });

  $("form#roll").click(function (event) {
    event.preventDefault();
    roll(0);
    //check if 100
  });

  $("form#hold").click(function (event) {
    event.preventDefault();
    hold(0);
  });
});
