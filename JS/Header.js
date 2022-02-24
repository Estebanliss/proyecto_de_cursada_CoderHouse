const Header = document.getElementById("header");
let div = document.createElement("div");
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
          <ul id="containerUl" class="tabs">
            <li><a href="#tab1" class="buttonNav">HOME</a></li>
            <li><a href="#tab2" class="buttonNav">FAQS</a></li>
            <li><a href="#tab3" class="buttonNav">NOSOTROS</a></li>
            <li><a href="#tab4" class="buttonNav">CONTACTO</a></li>
            <li><a href="#tab5" class="buttonNav">EMPEZAR</a></li>
          </ul>
        </nav>
        <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
      </div>
    </div>

  `;

window.onscroll = function () {
  scroll = document.documentElement.scrollTop;

  let Header = document.getElementById("header");

  if (scroll > 5) {
    Header.classList.add("nav_mod");
  } else if (scroll < 20) {
    Header.classList.remove("nav_mod");
  }
};

document.getElementById("btn_menu").addEventListener("click", mostrarMenu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrarMenu() {
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});

$(document).ready(function(){
  $("ul.tabs li a:first").addClass("active");
  $(".secciones section").hide();
  $(".secciones section:first").show();

  $("ul.tabs li a").click(function(){
      $("ul.tabs li a").removeClass("active");
      $(this).addClass("active");
      $(".secciones section").hide();

      let activeTab = $(this).attr("href");
      $(activeTab).show();
      return false;
  })
});

  
