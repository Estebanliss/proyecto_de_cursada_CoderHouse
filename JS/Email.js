const idFormulario = document.querySelector("#formulario");
const btnMailto = document.querySelector("#mailto");

idFormulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(idFormulario)
    console.log(form.get(`name`));
    console.log(form.get(`mail`));
    console.log(form.get(`message`));

    btnMailto.setAttribute("href", `mailto:estebanlissandrello@gmail.com?subject=Nombre: ${form.get(`name`)}  Correo: ${form.get(`mail`)}&body=${form.get(`message`)}`);
    btnMailto.click();


}