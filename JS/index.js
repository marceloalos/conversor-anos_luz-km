function Converter() {
    var distanciaKm = document.getElementById("distanciaKm");
    var distancia = distanciaKm.value;
    var distanciaKmNumerico = parseInt(distancia);
  
    var distanciaEmAnosLuz = distanciaKmNumerico / 9460528405000;
  
    var nome = document.getElementById("nomeDoAstro");
    var nomeAstro = nome.value;
  
    var elementoConvertido = document.getElementById("distanciaConvertida");
    var AnosLuz =
      "A distãncia entre " +
      nomeAstro +
      " e a Terra é de " +
      distanciaEmAnosLuz.toFixed(2) +
      " anos-luz";
    elementoConvertido.innerHTML = AnosLuz;
  }
  