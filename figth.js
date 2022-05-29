export function fight(player1,player2){
    let vidaJugador1 = player1.clase.vida;
    let ataqueJugador1 = player1.clase.ataque;
    let defensaJugador1 = player1.clase.defensa;
    
    let vidaJugador2= player2.clase.vida;
    let ataqueJugador2 = player2.clase.ataque;
    let defensaJugador2 = player2.clase.defensa;
    finBatalla:
    do{
        let ataque1 = (Math.round(Math.random() * ataqueJugador1)) - (Math.round(Math.random() * defensaJugador2));
        vidaJugador2 -= ataque1;
        console.log('%cPlayer1: Dano realizado ' + ataque1,'color:red');
        console.log('%cVida Player 2: '+vidaJugador2 + '\n','color: yellow');
        if (vidaJugador2 <= 0){
            console.log('%cGanador: '+player1.username,'color:aqua');
            break finBatalla;
        }

        let ataque2 = (Math.round(Math.random() * ataqueJugador2)) - (Math.round(Math.random() * defensaJugador1));
        vidaJugador1 -= ataque2;
        console.log('%cPlayer2: Dano realizado ' + ataque2,'color:blue');
        console.log('%cVida Player 1: '+vidaJugador1 +'\n','color:yellow');
        if (vidaJugador1 <= 0){
            console.log('%cGanador: '+player2.username,'color:aqua');
            break finBatalla;
        }    

    }while(true)
    
    }
    