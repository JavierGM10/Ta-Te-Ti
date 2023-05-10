var mensaje = "Javier García Martín / 1DAM / Ta Te Ti";
alert(mensaje);

let Player = 'X';
    let tablero = ['', '', '', '', '', '', '', '', ''];
    let clicks = 0;
    
    function highlightCell(cellId) {
      document.getElementById(`cell-${cellId}`).style.backgroundColor = 'black';
    }
    
    function unhighlightCell(cellId) {
      document.getElementById(`cell-${cellId}`).style.backgroundColor = 'gray';
    }
    
    function Dibujar(cellId) {
      if (tablero[cellId] === '') {
        const cell = document.getElementById(`cell-${cellId}`);
       
        cell.innerText = Player;
        cell.style.backgroundColor = 'gray';
        tablero[cellId] = Player;
        clicks++;

        Player = (Player === 'X') ? 'O' : 'X';

        if (clicks >= 3) {
            Win();
          }
        
      }
    }

    function Win() {
      const Posibilidades = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
      ];

      for (let combinacion of Posibilidades) {
        const [a, b, c] = combinacion;
        if (
            tablero[a] !== '' &&
            tablero[a] === tablero[b] &&
            tablero[a] === tablero[c]
        ) {
          alert(`¡El jugador ${tablero[a]} ha ganado!`);
          resettablero();
          return;
        }
      }

      if (clicks === 9) {
        alert("¡Empate!");
        resettablero();
      }
    }

    function resettablero() {
        tablero = ['', '', '', '', '', '', '', '', ''];
      clicks = 0;

      const cells = document.getElementsByClassName('cell');
      for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.backgroundColor = 'gray';
      }

    }