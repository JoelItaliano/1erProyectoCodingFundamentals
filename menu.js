
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