<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum vitae</title>
    <!--Favicon-->
    <link rel="icon" type="image/x-icon" href="imagenes/ave_4.png">
    <!-- CSS -->
    <link rel="stylesheet" href="/estilos.css">
    <!--Boostrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
  <!-- Google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Andika:ital,wght@1,700&family=Quicksand:wght@700&family=Rubik+Dirt&family=Rubik+Vinyl&family=Share+Tech+Mono&family=Unbounded:wght@900&display=swap" rel="stylesheet">

</head>
<body>
    <!-- Barra de navegacion -->
    <nav class="navbar navbar-expand-md seccion-oscura-navbar ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-toggler">
          <!-- Icono de maletin -->
          <a class="navbar-brand" href="#">
            <i class="bi bi-briefcase"></i>
          </a>
          <!-- Titulos de la barra de navegacion -->
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link texto-blanco" aria-current="page" href="#sobre-mi">
                <i class="bi bi-person"></i>
               Sobre mi
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link texto-blanco" href="#habilidades">
                <i class="bi bi-award"></i>
                Habilidades
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link texto-blanco"  href="#experiencia">
                <i class="bi bi-clipboard-pulse"></i>
                Experiencia
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link texto-blanco"  href="#contacto">
                <i class="bi bi-person-lines-fill"></i>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Seccion hero General -->
    <section class="hero align-items-stretch">
      <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
        <i class="bi bi-person-circle"></i>
        <h1 class="nombre">Josefina Urquiza</h1>
        <h2 class="descripcion">Futura desarrolladora web y Analista de datos</h2>
      </div>
    </section>
    
    <!--Seccion Sobre mi -->
    <section id="sobre-mi" class="sobre-mi seccion-oscura">
      <div class="container">
        <div class="row justify-content-center">
          <div class="columna col-7 cols">
            <!-- Descripcion sobre mi -->
            <p class="texto-blanco centrado">Mi nombre es <font color="black"> <b> Josefina Urquiza</b> </font> y
               actualmente estoy buscando un trabajo como <font color="black"> <b> desarrollador web o analista de datos.</b> </font>  
              Durante mi trabajo en el ambito academico, me he introducido en primer lugar en Ciencia de Datos y luego en el Desarrollo Web,
              aprendiendo diferentes lenguajes segun la necesidad del momento.
              Me considero una persona super autodidacta y siempre que puedo intento aprender nuevas tecnologías. 
              Actualmente me encuentro en la etapa final de mi <font color="black"> <b> doctorado en Ingeniria Ambiental</b> </font> , el cual me han ayudado a profundizar mis conocimientos.
              <br> Estoy buscando formar parte de un proyecto que me permita dejar mi marca y continuar creciendo profesionalmente </p>
            </p>
          </div>
          <!-- Curriculum Vitae Boton -->
          <div class="container text-center cv">
            <div class="row justify-content-end">
              <div class="col-7 ">
                <div class="col-12 col-md-4 rectangulo cv">
                  <a target="_blank" download="" href="imagenes/cv_JUrquiza.pdf">
                    <button type="button" id="boton-descargar" class="cv">
                      <p> Curriculum Vitae
                        <i class="bi bi-file-earmark-arrow-down-fill"></i>
                      </p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Seccion Proyectos-Experiencia -->
    <section id="experiencia" class="proyectos-recientes seccion-clara d-flex flex-column"> 
      <h2 class="seccion-titulo texto-negro">Mis Proyectos</h2>
      <h3 class="seccion-descripcion">Estos son algunos de los proyectos creados recientemente</h3>
      <!--Galeria de proyectos-->
      <div class="container text-center proyectos-contenedor">
        <div class="row justify-content-center">
        <!--Proyecto 01-->
          <div class="col-12 col-md-6 col-lg-4 columna">
            <div class="proyecto">
              <img src="/imagenes/proyecto_1.png" alt="imagen 1">
              <div class="overlay"> 
                <h4>Proyecto 1</h4>
                <p class="texto-proyecto">Estimacion de la exposición personal al material particulado considerando los movimientos diarios en el Area Metropolitana de Mendoza</p>
                <div class="iconos-contenedor">
                <a href="https://github.com/joseurquiza88/modelo_movilidad_v1" target="_blank">
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
      </div>
      <!--Proyecto 02-->
      <div class="col-12 col-md-6 col-lg-4 columna">
        <div class="proyecto">
          <img src="/imagenes/proyecto_2b.png" alt="imagen 2">
          <div class="overlay"> 
            <h4>Proyecto 2</h4>
            <p class="texto-proyecto">Procesamiento y análisis de imagenes satelitales de Aerosoles (MODIS y MAIAC) con el objetivo de estimar la incertidumbre y los errores de los dataset</p>
            <div class="iconos-contenedor">
              <a href="https://github.com/joseurquiza88/Aerosoles" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--Proyecto 03-->
      <div class="col-12 col-md-6 col-lg-4 columna">
        <div class="proyecto">
          <img src="/imagenes/proyecto_3b.jpg" alt="imagen 3">
          <div class="overlay"> 
            <h4> Proyecto 3</h4>
            <p class="texto-proyecto"> Procesamiento y analisis de imagenes satelitales de color del mar</p>
            <div class="iconos-contenedor">
              <a href="https://github.com/joseurquiza88/Curso-de-procesamiento-de-Im-genes-Satelitales" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </div>
           </div>
        </div>
       </div>
    </div>
  </section>

    <!--Seccion Habilidades -->
  <section id = "habilidades"class="experiencia seccion-clara">
    <h2 class="seccion-titulo texto-negro">Habilidades</h2>
    <div class="container text-center">
      <div class="row">
        <!--Desarrollo web-->
        <div class="columna col-12 col-md-6">
          <i class="bi bi-laptop"></i>
          <p class="experiencia-titulo">Desarrollo web</p>
          <p>Actualmente, me encuentro dando mis primeros pasos en Desarrollo web
          <br> a traves de cursos introductorios al tema, principalmente en Front-end  
          </p>   
        </div>
        <!--Analisis de datos-->
        <div class="columna col-12 col-md-6">
          <i class="bi bi-laptop"></i>
          <p class="experiencia-titulo">Procesamiento y Analisis de datos</p>
          <p>Actualmente me considero una profesional dedicada a analizar
          <br> e interpretar grandes bases de datos principalmente relacionada 
          <br> a la calidad del aire y contaminacion atmosférica     </p>
        </div>
      </div>
    </div> 
  </section>
  <!-- Seccion habilidades -->
  <section class="iconos-conocimiento-section seccion-oscura">
    <h2 class="seccion-titulo texto-blanco">Herramientas</h2>
    <div class="container">
      <!-- Software front-end -->
      <h3 class="seccion-herramientas texto-blanco">Front-end</h3>
      <div class="container text-center iconos-conocimiento">
        <div class="row justify-content-center icono-conocimiento-hover">
          <div class="col-3 cols">
            <img src="./imagenes/html.png" alt="">
          </div>
          <div class="col-3 cols">
            <img src="./imagenes/css.png" alt="">
          </div>
          <div class="col-3 cols">
            <img src="./imagenes/js.png" alt="">
          </div>
          <div class="col-3 cols">
            <img src="./imagenes/bootstrap.png" alt="">
          </div>
        </div>
      </div>
      <!-- Software analis de datos -->
      <h3 class="seccion-herramientas">Analisis de datos</h3>
      <div class="container text-center iconos-conocimiento">
        <div class="row justify-content-center icono-conocimiento-hover">
          <div class="col-3 cols">
            <img src="./imagenes/python.png" alt="">
          </div>
          <div class="col-3 cols">
            <img src="./imagenes/r.png" alt="">
          </div>
          <div class="col-3 cols">
            <img src="./imagenes/power-bi.png" alt="">
          </div>
        </div>
      </div>
      <!-- Software herramientas  -->
      <h3 class="seccion-herramientas">Herramientas</h3>
      <div class="container text-center iconos-conocimiento">
      <div class="row justify-content-center icono-conocimiento-hover">
        <div class="col-3 cols">
          <img src="./imagenes/git.png" alt="">
        </div>
        <div class="col-3 cols">
          <img src="./imagenes/github.png" alt="">
        </div>
      </div>
    </div>
  </div>
  </section> 
  <!--Seccion Contacto -->
  <section id="contacto" class="contacto seccion-oscura">
    <div class="container">
      <div class="container text-center rectangulo d-flex justify-content-evenly">
        <div class="row">
          <div class="col-12 col-md-4 seccion-titulo">
            ¡Hablemos!
          </div>
          <div class="col-12 col-md-4 descripcion">
            Contactame para iniciar tu proyecto de desarrollo web.
          </div>
          <div class="col-12 col-md-4">
            <a href="mailto:josefina.urquizap@gmail.com">
              <button type="button">
                Contacto
                <i class="bi bi-envelope-at"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Seccion Footer -->
  <footer class="seccion-footer d-flex flex-column align-items-center justify-content-center">
    <img class="footer-icono" src="imagenes/ave_3.png" alt="Logo de portafolio">
    <p class="footer-texto text-center"> Aprendo y creo todos los dias. </p>
    <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
      <a href="https://github.com/joseurquiza88" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/josefina-urquiza-16618465/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/jose.urquiza3/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-facebook"></i>
      </a>
      <a href="mailto:josefina.urquizap@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-envelope-at"></i>
      </a>
    </div>
    <!--El icono de copyright se llama entidades de caracter-->
    <div class="derechos-de-autor">Creado por Josefina Urquiza (2023)&#169; </div>
  </footer>
  
  <!-- SCRIPS -->
    <!--SWEET alert  -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!--JS-->
    <script src="main.js"></script> 
    <!--Boostrap JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
