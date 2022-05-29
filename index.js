import { nombreUsuario } from "./menu.js";
import { selecPersonaje } from "./Selec_Personajes.js";
import { fight } from "./figth.js";

const player1 = {username:'', clase: ''};
const player2 = {username:'', clase: ''};

console.log('%cPrimer jugador: ','color: red');
nombreUsuario (player1);
 
console.log(player1.username + ' Seleccione la clase que representa:');
selecPersonaje(player1);
console.log('%cBienvenido '+player1.username+' Su tipo de pj es: '+player1.clase.nombre+'\n','color:red');

console.log('%cSegundo jugador: ','color:blue');
nombreUsuario(player2);
console.log(player2.username + ' Seleccione la clase que representa:');
selecPersonaje(player2);
console.log('%cBienvenido '+player2.username+' Su tipo de pj es: '+player2.clase.nombre+'\n','color:blue');


fight(player1,player2)

