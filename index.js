import { nombreUsuario } from "./menu.js";
import { selecPersonaje } from "./Selec_Personajes.js";
import { fight } from "./figth.js";
/*
*   Declaramos los jugadores de tipo obj y le pasamos dos parametros
 */
const player1 = {username:'', clase: ''};
const player2 = {username:'', clase: ''};
/**
 * Lamamos a la funcion de menu para asignar el nombre del usuario 1
 */
console.log('%cPrimer jugador: ','color: red');
nombreUsuario (player1);
 /**
  * llamamos a la funcion para que el usuario eliga la clase que representa
  */
console.log(player1.username + ' Seleccione la clase que representa:');
selecPersonaje(player1);
console.log("")
console.log('%cBienvenido '+player1.username+' Su tipo de pj es: '+player1.clase.nombre+'\n','color:red');
/**
 * Lamamos a la funcion de menu para asignar el nombre del usuario 2
 */
console.log('%cSegundo jugador: ','color:blue');
nombreUsuario(player2);
 /**
  * llamamos a la funcion para que el usuario eliga la clase que representa
  */
console.log(player2.username + ' Seleccione la clase que representa:');
selecPersonaje(player2);
console.log("")
console.log('%cBienvenido '+player2.username+' Su tipo de pj es: '+player2.clase.nombre+'\n','color:blue');

/**
 * damos comienzo a la batalla de los jugadores con la clase que eligieron
 */
console.log("%cCOMENZANDO LA BATALLA " + player1.clase.nombre + ' VS ' + player2.clase.nombre,"color: gold")
alert('')
/*
* llamamos a la funcion que ejecuta la pelea
*/
fight(player1,player2)

