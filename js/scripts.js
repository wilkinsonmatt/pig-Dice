function Game(numberofPlayers) {
  this.players = [];
  this.numberOfPlayers = numberofPlayers;
  this.turn = 0;
}

let currentgame;

Game.prototype.AddPlayers = function () {
  console.log("hi");
  for (let i = 0; i <= currentgame.numberOfPlayers; i++) {
    let newplayer = new Player(i);
    currentgame.players.push(newplayer);
  }
};

function Player(playerid) {
  this.totalscore = 0;
  this.tempscore = 45;
  this.playerNumber = playerid;
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
});
