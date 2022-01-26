// if (window.location.href.includes("Index.html")) {
const ContentHome = document.getElementById("Home");
let Home = document.createElement("div");
Home.innerHTML = `
<section id="Home">
<div>
  <div class="cover">
    <div class="container__cover">
      <div class="container__info">
        <h1>ARMA TU</h1>
        <h2>FOTO LIBRO</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Harum ex odit rem quam nisi dignissimos dolor. Ratione
          officiis at exercitationem, suscipit consectetur tempore
          laboriosam quas quo eligendi, maiores excepturi ut.
        </p>
        <input type="button" value="Empezar" />
      </div>
      <div class="container__vector">
        <img src="Imagenes/FotoHome.png" alt="Tus Fotos Libro" />
      </div>
    </div>
  </div>
</div>

<div class="contenedor">
  <div class="bannerHome">
    <img class="imgHome" src="./Imagenes/BannerHome2.jpg" alt="" />
  </div>
  <div class="ContenedoBtnFrase">
    <h3>
      Nacimientos, cumpleaños, bodas, vacaciones y viajes. Las fotos de los chicos, en el cole y de todos los días. Regalos especiales para el día de la madre, día del padre, aniversarios y San Valentín. Cada momento merece ser conservado en un fotolibro. Inspirate.
    </h3>
    <a class="btnHome">Quiero empezar</a>
  </div>
</div>

<div class="contenedor AgrupadorCard">
  <div class="ContenedorCard">
    <div class="ContenedorImg">
    <img src="./Imagenes/Card2.jpg" alt="">
    </div>
    <h1 class="tituloH1">¿Qué es Tus Fotos a Libro?</h1>
    <p class="Text">
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content
      here, content here', making it look like readable English. 
    </p>
    <br>
    <a class="btnText">Quiero saber mas</a>
  </div>

  <div class="ContenedorCard">
    <div class="ContenedorImg">
    <img src="./Imagenes/Card3.jpg" alt="">
    </div>
    <h1 class="tituloH1">¿Cómo lo puedo hacer?</h1>
    <p class="Text">
      It is a long established fact that a reader will be distracted
      by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content
      here, content here', making it look like readable English. 
    </p>
    <br>
    <a class="btnText">Quiero saber mas</a>
  </div>
</div>


<div class="contCarrousel">
    <div class="atras botones" id="atras"><i class="fas fa-angle-left"></i></div>
    <img class="imgCarroussel" src="./Imagenes/CH-1.png" alt="" />
    <div class="adelante botones" id="adelante"><i class="fas fa-angle-right"></i></i></div>
</div>

</section>
`;

document.body.appendChild(Home);
