function previewFile() {
  const preview = document.querySelector('img#Foto1 input[type="file"]');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convierte la imagen a una cadena en base64
    preview.src = reader.result;
    console.log(reader)
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
