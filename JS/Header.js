const Header = document.getElementById("header");
Header.innerHTML = `

        <div class="container__header">
          <div class="logo">
            <img
              src="imagenes/LogoTusFotosLibros.svg"
              alt="Logo-TusFotosaLibro"
            />
          </div>
          <div class="container__nav">
            <nav id="nav">
              <ul>
                <li><a href="/Index.html" class="select">HOME</a></li>
                <li><a href="#">NOSOTROS</a></li>
                <li><a href="/Index.html/FAQS">FAQS</a></li>
                <li><a href="#">CONTACTO</a></li>
              </ul>
            </nav>

            <div class="btn__menu" id="btn_menu">
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </div>
`;

document.body.appendChild(Header.content);

window.onscroll = function () {
  scroll = document.documentElement.scrollTop;

  header = document.getElementById("header");

  if (scroll > 5) {
    header.classList.add("nav_mod");
  } else if (scroll < 20) {
    header.classList.remove("nav_mod");
  }
};

document.getElementById("btn_menu").addEventListener("click", mostrarMenu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrarMenu() {
  menu.classList.toggle("move_content");
  body.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});
