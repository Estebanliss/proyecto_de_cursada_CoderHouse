const carrouselHome = document.getElementById("carrousel");
let carrousel = document.createElement("div");
carrousel.innerHTML = `
  <div class="contCarrousel">
    <div class="atras botones" id="atras">
      <i class="fas fa-angle-left"></i>
    </div>
    <img class="imgCarroussel" src="./Imagenes/CH-1.png" alt="" />
    <div class="adelante botones" id="adelante">
      <i class="fas fa-angle-right"></i>
    </div>
  </div>`;

document.body.appendChild(carrousel);

let imagenes = [
  "./Imagenes/CH-1.png",
  "./Imagenes/CH-2.png",
  "./Imagenes/CH-3.png",
];

let cont = 0;

function carroussel(contenedor) {
  contenedor.addEventListener("click", (e) => {
    let atras = contenedor.querySelector(".atras");
    let adelante = contenedor.querySelector(".adelante");
    let img = contenedor.querySelector("img");
    let tgt = e.target;

    if (tgt == atras) {
      if (cont > 0) {
        img.src = imagenes[cont - 1];
        cont--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (cont < imagenes.length - 1) {
        img.src = imagenes[cont + 1];
        cont++;
      } else {
        img.src = imagenes[0];
        cont = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector(".contCarrousel");

  carroussel(contenedor);
});
