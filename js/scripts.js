function Game(numberofPlayers) {
  this.players = [];
  this.numberOfPlayers = numberofPlayers;
  this.turn = 0;
}

let currentgame;

Game.prototype.AddPlayers = function () {
  for (let i = 0; i < currentgame.numberOfPlayers; i++) {
    // console.log(i);
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
  $(".diceRoll").html("Dice Roll: " + diceroll);
  return diceroll;
}

function roll2Dice() {
  let diceroll1 = Math.floor(1 + Math.random() * 6);
  let diceroll2 = Math.floor(1 + Math.random() * 6);
  let showdice =
    "Dice One: " +
    diceroll1.toString() +
    "<br><br>" +
    "Dice Two:  " +
    diceroll2.toString();
  let arrayofbothdice = [diceroll1, diceroll2];
  $(".diceRoll").html(showdice);
  console.log(arrayofbothdice);
  return arrayofbothdice;
}

function Scoreboard() {
  // console.log("number of players: " + currentgame.numberOfPlayers);
  if (currentgame.numberOfPlayers === 1) {
    $(".tempScore1").html(currentgame.players[0].tempscore);
    $(".totalScore1").html(currentgame.players[0].totalscore);
  } else if (currentgame.numberOfPlayers === 2) {
    $(".tempScore1").html(currentgame.players[0].tempscore);
    $(".totalScore1").html(currentgame.players[0].totalscore);
    $(".tempScore2").html(currentgame.players[1].tempscore);
    $(".totalScore2").html(currentgame.players[1].totalscore);
  } else if (currentgame.numberOfPlayers === 3) {
    $(".tempScore1").html(currentgame.players[0].tempscore);
    $(".totalScore1").html(currentgame.players[0].totalscore);
    $(".tempScore2").html(currentgame.players[1].tempscore);
    $(".totalScore2").html(currentgame.players[1].totalscore);
    $(".tempScore3").html(currentgame.players[2].tempscore);
    $(".totalScore3").html(currentgame.players[2].totalscore);
  } else if (currentgame.numberOfPlayers === 4) {
    $(".tempScore1").html(currentgame.players[0].tempscore);
    $(".totalScore1").html(currentgame.players[0].totalscore);
    $(".tempScore2").html(currentgame.players[1].tempscore);
    $(".totalScore2").html(currentgame.players[1].totalscore);
    $(".tempScore3").html(currentgame.players[2].tempscore);
    $(".totalScore3").html(currentgame.players[2].totalscore);
    $(".tempScore4").html(currentgame.players[3].tempscore);
    $(".totalScore4").html(currentgame.players[3].totalscore);
  }
}

function roll1(playerid) {
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

function roll2(playerid) {
  let arrayofbothdice = roll2Dice();
  let dice1 = arrayofbothdice[0];
  let dice2 = arrayofbothdice[1];
  let score = dice1 + dice2;

  if (dice1 === 1 || dice2 === 1) {
    currentgame.players[playerid].tempscore = 0;
    hold(playerid);
  } else {
    currentgame.players[playerid].tempscore += score;
    Scoreboard();
  }
}

function hold(playerid) {
  currentgame.players[playerid].totalscore += currentgame.players[playerid].tempscore;
  currentgame.players[playerid].tempscore = 0;
  console.log(currentgame.players[playerid].playerNumber);
  Scoreboard();
  console.log("it's currently this players turn: " + currentgame.turn);
  console.log("there are this many players: " + currentgame.numberOfPlayers);
  if (currentgame.players[playerid].totalscore >= 100) {
    alert("you are the winner! =D");
  } else if (currentgame.turn === currentgame.numberOfPlayers - 1) {
    alert("your turn is over, please pass the mouse!");
    currentgame.turn = 0;
  } else {
    alert("your turn is over, please pass the mouse!");
    currentgame.turn += 1;
  }
  console.log("it's now this player's turn: " + currentgame.turn);
}

$(document).ready(function () {
  $("form#pigForm").submit(function (event) {
    event.preventDefault();
    const numberofPlayers = parseInt(
      $("input:radio[name=player]:checked").val()
    );
    currentgame = new Game(numberofPlayers);
    currentgame.AddPlayers();
    $(".start-menu").hide();
    $(".console").show();
  });

  $("form#dice1").click(function (event) {
    event.preventDefault();
    document.getElementById("piggy").play();
    roll1(currentgame.turn);
  });

  $("form#dice2").click(function (event) {
    event.preventDefault();
    document.getElementById("piggy").play();
    roll2(currentgame.turn);
  });

  $("form#hold").click(function (event) {
    event.preventDefault();
    hold(currentgame.turn);
  });
});
