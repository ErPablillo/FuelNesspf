const players = ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4', 'Jugador 5', 'Jugador 6', 'Jugador 7', 'Jugador 8'];
const tiempoTotal = 3 * 60; // segundos
let tiempoTranscurrido = 0;
const temporizador = setInterval(() => {
    tiempoTranscurrido++;
    if (tiempoTranscurrido >= tiempoTotal) {
        clearInterval(temporizador);
        console.log('Fin del rondo');
    }
}, 1000); // 1000ms = 1 segundo
let jugadorActual;
function seleccionarJugador() {
    const indice = Math.floor(Math.random() * players.length);
    jugadorActual = players[indice];
    console.log(`${jugadorActual} tiene el balón`);
}
function pasar() {
    const indice = Math.floor(Math.random() * players.length);
    const receptor = players[indice];
    console.log(`${jugadorActual} pasa el balón a ${receptor}`);
    jugadorActual = receptor;
}
seleccionarJugador(); // Seleccionar el primer jugador

setInterval(() => {
    pasar(); // Pase del jugador actual al siguiente
}, 3000); // 3000ms = 3 segundos
