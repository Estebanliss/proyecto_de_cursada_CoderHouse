
if (window.location.href.includes("Index.html"))
{const Content = document.getElementById("content");
Content.innerHTML = `

<div class="container__all" id="container_all">
        <div class="cover">
          <div class="container__cover">
            <div class="container__info">
              <h1>ARMA TU</h1>
              <h2>FOTO LIBRO</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                ex odit rem quam nisi dignissimos dolor. Ratione officiis at
                exercitationem, suscipit consectetur tempore laboriosam quas quo
                eligendi, maiores excepturi ut.
              </p>
              <input type="button" value="Empezar" />
            </div>
            <div class="container__vector">
              <img src="Imagenes/FotoHome.png" alt="Tus Fotos Libro" />
            </div>
          </div>
        </div>
</div>


`;

document.body.appendChild(Content.content);
}