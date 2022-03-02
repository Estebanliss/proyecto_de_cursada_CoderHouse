function previewPhoto(idFoto, idInput) {
  const preview = document.querySelector(idFoto);
  const file = document.querySelector(idInput).files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

