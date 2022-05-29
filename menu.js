
/**
 * funcion para registrar el nombre de usuario
 * @param {*} player parametro que representa al usuario y asigna el nombre
 */
export function nombreUsuario(player){    
salir:
do{
    console.log('%cIngrese su nombre','color:yellow')
    player.username = prompt ('')
    let confirmar = confirm("Desea que "+player.username+" sea su nombre?")
    console.log("")
    if(confirmar){ break salir}        
}while(true)

}