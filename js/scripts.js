function Game() {
  this.players = {};
  this.numberOfPlayers = 0;
  this.turn = turn;
}

function Player() {
  this.totalscore = 0;
  this.tempscore = 0;
  this.playerNumber = playerNumber;
}

$(document).ready(function () {
  $("form#pigForm").submit(function (event) {
    event.preventDefault();
    const flavor = $("input:radio[name=flavor]:checked").val();
  });
});
