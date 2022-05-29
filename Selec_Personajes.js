/**
 * objetos que representa a su raza, con su nombre, vida, ataque y defensa
 */
const ORCO = {nombre: 'Orco', vida : 100, ataque: 25, defensa: 8};
const HUMANO = {nombre: 'Humano', vida: 100, ataque: 20, defensa: 10};
const ENANO = {nombre: 'Enano', vida: 80, ataque: 20, defensa: 15};
/**
 * funcion para que el usuario elija su raza, segun la raza que elija, tendra sus propiedades,
 * nombre, vida ataque y defensa
 * @param {*} personaje parametro que representa al usuario que va a eleguir la raza
 */
export function selecPersonaje(personaje){
exit:
do{
    console.log('%cSeleccione Personaje con A; B o C:\nA: Orco\nB: Humano\nC: Enano','color:yellow');
    let clasePj = prompt('');    
    switch(clasePj){
        case 'a':
            personaje.clase = ORCO;
            break exit;
        case 'b':
            personaje.clase = HUMANO;
            break exit;
        case 'c':
            personaje.clase = ENANO;
            break exit;
        default:
            console.log('%cerror en la repuesta intente de nuevo sin mayusculas','color: brown');
    }
}while(true)
}
