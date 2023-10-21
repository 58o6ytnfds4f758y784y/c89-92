function addUser() {
    player1_name = document.getElementById("NombreJugador1").value;
    player2_name = document.getElementById("NombreJugador2").value;
  
      localStorage.setItem("Jugador1", player1_name);
      localStorage.setItem("Jugador2", player2_name);
  
      window.location = "game_page.html";
  }
  