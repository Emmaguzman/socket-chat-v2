var socket = io();
var params= new URLSearchParams(window.location.search);

if(!params.has('nombre') ||!params.has('sala')  ){
    window.location='index.html';
    throw new Error('EL NOMBRE Y SALA SON NECESARIOS')
}
var usuario={
    nombre:params.get('nombre'),
    sala:params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entraChat',usuario,function(resp){
        console.log('Usuarios conectados',resp);
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Emmanuel',
//     mensaje: 'Holas'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });



// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});


//Mensajes privados

socket.on('mensajePrivado',function(mensaje){
    console.log('mensaje privado',mensaje)
})
