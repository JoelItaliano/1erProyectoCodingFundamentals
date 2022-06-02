/**
 * funcion que realiza la pelea de los usuarios, 
 * cada raza tiene una propiedad choca contra la del rival: * 
 * @param {*} player1 representa al primer usuario registrado, que contiene la raza que eligio con sus atributos  (vida, ataque, def)
 * @param {*} player2  representa al segundo usuario registrado
 */

export function fight(player1,player2){
    //gurdamos los atributos de la raza del jugador 1
    let vidaJugador1 = player1.clase.vida;
    let ataqueJugador1 = player1.clase.ataque;
    let defensaJugador1 = player1.clase.defensa;

    //guardamos los atributos de la raza del jugador 2
    let vidaJugador2= player2.clase.vida;
    let ataqueJugador2 = player2.clase.ataque;
    let defensaJugador2 = player2.clase.defensa;

    /**
     * bucle donde se realiza la batalla, cuando la vida de algun jugador llege a 0
     * sale del bucle
     */
    finBatalla:
    do{
        //el ataque del 1er jugador choca conta la defensa del segundo, 
        //ataque y def. son aleatorios tomados del rango los atributos de cada raza
        let ataque1 = (Math.round(Math.random() * ataqueJugador1)) - (Math.round(Math.random() * defensaJugador2));
        
        //el daño realizado se resta de la vida del defensor
        vidaJugador2 -= ataque1;
        
        if (ataque1 < 0){
            console.log('%cDEFENSA EXEPCIONAL: DEFENSOR SE CURA '+Math.abs(ataque1)+' DE VIDA','color:lime')
            console.log('%cVida ' + player2.username + ': '+ vidaJugador2 + '\n','color: yellow');
        }else{
            console.log('%c'+player1.username+': Dano realizado: ' + ataque1,'color:red');
            console.log('%cVida ' + player2.username + ': '+ vidaJugador2 + '\n','color: yellow');
        }
        //si la vida del jugador 2 llega a 0 se declara un ganador y termina la batalla
        if (vidaJugador2 <= 0){
            console.log('%cResultados final: '+ player1.username + ' vida restante: ' + vidaJugador1 + ', '+player2.username + ' vida restante: ' + 0,'color:green' )
            console.log('%cGanador: ' + player1.username +', clase: '+ player1.clase.nombre,'color:aqua');            
            break finBatalla;
        }

        //alerta para realentizar batalla + salto de linea
        alert('cambio de turno ')
        console.log("")

        //mismo procedimiento para el jugador 2
        let ataque2 = (Math.round(Math.random() * ataqueJugador2)) - (Math.round(Math.random() * defensaJugador1));

        vidaJugador1 -= ataque2;
        
        if (ataque2 < 0){
            console.log('%cDEFENSA EXEPCIONAL: DEFENSOR SE CURA '+Math.abs(ataque2)+' DE VIDA','color:lime')
            console.log('%cVida ' + player1.username + ': '+ vidaJugador1 + '\n','color: yellow');
        }else{        
        console.log('%c'+player2.username+': Dano realizado: ' + ataque2,'color:blue');
        console.log('%cVida ' + player1.username + ': '+vidaJugador1 +'\n','color:yellow');
        }

        if (vidaJugador1 <= 0){
            console.log('%cResultados final: '+ player2.username + ' vida restante: ' + vidaJugador2 + ', '+player1.username + ' vida restante: ' + 0,'color:green' )
            console.log('%cGanador: '+ player2.username +', clase: '+ player2.clase.nombre,'color:aqua');
            break finBatalla;
        }    

        alert('cambio de turno ')
        console.log("")
    }while(true)
    
    }
    