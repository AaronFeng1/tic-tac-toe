//Tic Tac Toe
//Three in a row to win
//Gameboard array has 9 1 variabes
//You need to devleop the rule that is able to know what is conisdered loss and win
//Create a function that returns an object 


const game = (function(){
    const Gameboard = (function(){
        let gameboard = ['', '', '',
            '', '', '',
            '', '', ''
        ];
        return {gameboard};
    })();

    function createPlayer(marker, name, wins) {
        return {marker, name, wins};
    };

    let p1 = createPlayer('o', 'Player 1', 0);
    let p2 = createPlayer('x', 'Player 2', 0);
    let currentPlayer = p1;

    const flow = function(index){
        Gameboard.gameboard[index] = currentPlayer.marker;
        console.log(Gameboard.gameboard)
        let see = check(Gameboard, currentPlayer);
        currentPlayer = (currentPlayer == p1) ? currentPlayer = p2: currentPlayer = p1;
        if (see != undefined){
            return alert(see); 
        } 
    }


    const check = function(Gameboard, currentPlayer){
        let check = true;
        for(let a = 0; a < 7; a += 3){
            if(Gameboard.gameboard[a] == currentPlayer.marker && Gameboard.gameboard[a+1] == currentPlayer.marker && Gameboard.gameboard[a+2] == currentPlayer.marker){
                return currentPlayer.name + " has won (horizantal win)";
            }
        }
        for(let b = 0; b < 3; b++){
            if(Gameboard.gameboard[b] == currentPlayer.marker && Gameboard.gameboard[b+3] == currentPlayer.marker && Gameboard.gameboard[b+6] == currentPlayer.marker){
                return currentPlayer.name +  " has won (vertical win)";
            };
        };
        if(Gameboard.gameboard[0] == currentPlayer.marker && Gameboard.gameboard[4] == currentPlayer.marker && Gameboard.gameboard[8] == currentPlayer.marker || Gameboard.gameboard[2] == currentPlayer.marker && Gameboard.gameboard[4] == currentPlayer.marker && Gameboard.gameboard[6] == currentPlayer.marker){
            return currentPlayer.name + " has won (diagonal win)";
        } 
        for(let i = 0; i < 9; i ++){
            if(Gameboard.gameboard[i] != ''){
                continue;
            } else {
                check = false;
            }
        }
        if(check == true){
            return "Tie";
        }
    };

    const disply = function(){
        const reset = document.querySelector(".reset")
        const cont = document.querySelector(".container")
        const table = document.createElement("div");
        table.classList.add("table");
        const turn = document.querySelector('.player-turn');
        for(let i = 0; i < 9; i ++){
            const cell = document.createElement('button');
            cell.classList.add("cell");
            cell.textContent = Gameboard.gameboard[i];
            table.appendChild(cell);
            cell.addEventListener("click", function(){
                if(Gameboard.gameboard[i] != ''){
                    return 1;
                }
                flow(i);
                cell.textContent = currentPlayer.marker;
                let copyOfCurrentPlayer = currentPlayer;
                copyOfCurrentPlayer = (copyOfCurrentPlayer == p1) ? turn.textContent = p2.marker: turn.textContent = p1.marker;

                reset.addEventListener("click", function(){
                    for(let j = 0; j < 9; j++){
                        Gameboard.gameboard[j] = '';
                        cell.textContent = '';
                        currentPlayer = p1;
                        turn.textContent = 'x';
                    }
                })
            })
        }
        cont.appendChild(table);
    }();

    const call = (current) => prompt(current.name + ", what's your choice?");

    return {Gameboard, disply, createPlayer, flow, check, call, p1, p2};
})();

