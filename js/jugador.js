var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 20,
  vidas: 3,
  moverse: function(nuevoX, nuevoY){
    this.x = nuevoX;
    this.y = nuevoY;
  },
  perderVidas: function(restarVidas){
      Jugador.vidas = Jugador.vidas - restarVidas;
  },
  cambiarSprite: function(tecla){
      if(tecla == 'izq'){
          this.sprite = 'imagenes/auto_rojo_izquierda.png';
          this.ancho = 30;
          this.alto = 15;
      }
      if (tecla == 'der') {
          this.sprite = 'imagenes/auto_rojo_derecha.png';
          this.ancho = 30;
          this.alto = 15;
      }
      if (tecla == 'arriba') {
          this.sprite = 'imagenes/auto_rojo_arriba.png';
          this.ancho = 15;
          this.alto = 30;
      }
      if (tecla == 'abajo') {
          this.sprite = 'imagenes/auto_rojo_abajo.png';
          this.ancho = 15;
          this.alto = 30;
      }
  }
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}

// OLD

// let cambiadoDeJugador = function(tecla) {
//   var anchoViejo = Jugador.ancho;
//   var altoViejo = Jugador.alto;
//   if ((tecla=== 'der' || tecla === 'izq')  ){
//   Jugador.ancho = 30;
//   Jugador.alto = 15;
// } 
//   else {
//   Jugador.ancho = 15;
//   Jugador.alto = 30;
// }

// if((anchoViejo !== Jugador.ancho) || (altoViejo !== Jugador.alto)){
//   return true
// }
