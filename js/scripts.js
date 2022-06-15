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
    currentgame.players;
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

function Scoreboard() {
  console.log(currentgame.numberOfPlayers);
  if (currentgame.numberOfPlayers === 1) {
    $(".tempScore1").html(currentgame.players[0].tempscore);
    $(".totalScore1").html(currentgame.players[0].totalscore);
  } else if (currentgame.numberOfPlayers === 2) {
    $(".tempScore2").html(currentgame.players[1].tempscore);
    $(".totalScore2").html(currentgame.players[1].totalscore);
  } else if (currentgame.numberOfPlayers === 3) {
    $(".tempScore3").html(currentgame.players[2].tempscore);
    $(".totalScore3").html(currentgame.players[2].totalscore);
  } else if (currentgame.numberOfPlayers === 4) {
    $(".tempScore4").html(currentgame.players[3].tempscore);
    $(".totalScore4").html(currentgame.players[3].totalscore);
  }
}

function roll(playerid) {
  let score = 0;
  score = rollTheDice();
  if (score === 1) {
    currentgame.players[playerid].tempscore = 0;
    hold(playerid);
  } else {
    currentgame.players[playerid].tempscore += score;
    Scoreboard();
  }
}

function hold(playerid) {
  currentgame.players[playerid].totalscore +=
    currentgame.players[playerid].tempscore;
  console.log(currentgame.players[playerid].playerNumber);
  Scoreboard();
  if (currentgame.players[playerid].totalscore >= 100) {
    alert("you are the winner! =D");
  } else if (currentgame.turn === 3) {
    alert("your turn is over, please pass the mouse!");
    currentgame.turn = 0;
  } else {
    alert("your turn is over, please pass the mouse!");
    currentgame.turn + 1;
  }
}

$(document).ready(function () {
  $("form#pigForm").submit(function (event) {
    event.preventDefault();
    const numberofPlayers = parseInt(
      $("input:radio[name=player]:checked").val()
    );
    currentgame = new Game(numberofPlayers);
    currentgame.AddPlayers();
  });

  $("form#roll").click(function (event) {
    event.preventDefault();
    roll(currentgame.turn);
  });

  $("form#hold").click(function (event) {
    event.preventDefault();
    hold(currentgame.turn);
  });
});
