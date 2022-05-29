const ORCO = {nombre: 'Orco', vida : 100, ataque: 25, defensa: 8};
const HUMANO = {nombre: 'Humano', vida: 100, ataque: 20, defensa: 10};
const ENANO = {nombre: 'Enano', vida: 80, ataque: 20, defensa: 15};

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
