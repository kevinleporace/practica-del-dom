
let boton = document.getElementById('boton-cambiar-cita')
let cita = document.getElementById('cita')
let autor = document.getElementById('autor')

function generarAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

function cambiarCita(){
    let indiceAleatorio = generarAleatorio(0,citas.length);
    cita.innerText = `"${citas[indiceAleatorio].texto}"`;
    autor.innerText = citas[indiceAleatorio].autor

}
cambiarCita()
boton.addEventListener('click',cambiarCita)