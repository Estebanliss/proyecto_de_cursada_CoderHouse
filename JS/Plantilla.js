async function fondoVertical() {
  let inputFormato = document.querySelector("#formato").value;
  console.log(inputFormato);
  let inputFondo = document.querySelector("#fondo").value;
  console.log(inputFondo);
  await new Promise(r => setTimeout(r, 1000));
  let iframe = document.getElementById("plantillaPaso2");
  iframe.contentWindow.document.getElementById("fondoImagen").src = "../Imagenes/Fondos-" + inputFondo + "-" + inputFormato + ".png";
}


function formatoPlantilla() {
  let inputFormato = document.querySelector("#formato").value;
  let inputFondo = document.querySelector("#fondo").value;
  let inputPhoto = document.querySelector("#photo").value;
  let plantilla = (inputFormato + inputPhoto);
  console.log(plantilla);

  if ((inputFormato === "") || (inputFondo === "") || (inputPhoto === "")) {
    alert("Debe configurar correctamente todos los campos para avanzar");
  } else {
    document.getElementById("plantillaPaso2").src = "/" + plantilla + ".html";

  }

  fondoVertical();
}


function exportar() {
  document.getElementById("plantillaPaso2").contentWindow.print();
}
