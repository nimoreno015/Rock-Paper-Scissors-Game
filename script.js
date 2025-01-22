function play() {

  var input = document.getElementById("input").value;
  var computer = 0;
  var player = 0;
  var x = new Array(input);

  for (var i = 0; i < input; ++i) {

      x[i] = new Array(2);
  }
  var y = new Array(input);

  for (var i = 0; i < input; ++i) {

      y[i] = new Array(2);
  }


  for (i = 0; i < input; i++) { // rows.
      for (var j = 0; j < 2; j++) { // columns.

          let s = Math.floor((Math.random() * 3) + 1);

          x[i][j] = s;
      }
  }





  for (i = 0; i < input; i++) { // rows.
      if (x[i][0] == 1) {
          if (x[i][1] == 1) {             // rock
              y[i][0] = "tie";               // 0 player and 1 computer
              y[i][1] = "tie";
          } else if (x[i][1] == 2) {       // scissors
              y[i][0] = "win";
              y[i][1] = "lose";
          } else if (x[i][1] == 3) {      // paper
              y[i][0] = "lose";
              y[i][1] = "win";
          }
      } else if (x[i][0] == 2) {
          if (x[i][1] == 1) {             // rock
              y[i][0] = "lose";               // 0 player and 1 computer
              y[i][1] = "win";
          } else if (x[i][1] == 2) {       // scissors
              y[i][0] = "tie";
              y[i][1] = "tie";
          } else if (x[i][1] == 3) {      // paper
              y[i][0] = "win";
              y[i][1] = "lose";
          }
      } else if (x[i][0] == 3) {
          if (x[i][1] == 1) {             // rock
              y[i][0] = "win";               // 0 player and 1 computer
              y[i][1] = "lose";
          } else if (x[i][1] == 2) {       // scissors
              y[i][0] = "lose";
              y[i][1] = "win";
          } else if (x[i][1] == 3) {      // paper
              y[i][0] = "tie";
              y[i][1] = "tie";
          }
      }

      if (y[i][0] == "win") {
          player++;
      } else if (y[i][0] == "lose") {
          computer++;
      }
  }

  var msg = "";

  msg = "<table><tr><th>Rounds</th><th>Player</th><th>Computer</th></tr>"


  for (var i = 0; i < input; i++) {
      msg = msg + "<tr>";
      msg = msg + "<td>" + (i + 1) + "</td>";
      for (var j = 0; j < 2; j++) {

          msg = msg + "<td>" + y[i][j] + "</td>"
      }

      msg = msg + "</tr>"

  }

  msg = msg + "</table>";


  document.getElementById("table").innerHTML = msg;
  var result;

  if (computer > player) {
      result = "Computer wins " + computer + " rounds";
  } else if (computer < player) {
      result = "Player win " + player + " rounds";
  } else {
      result = "It is a tie";
  }
      

  document.getElementById("ans").innerHTML = result;
}