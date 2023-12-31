import React from 'react'
import image from "../img/cursos.png";

const NavBar = () => {
  
  function responsiveMenu() {
    const x = document.getElementById("elnav");
    if (x.className === "elnav") {
        x.className = "responsive";
    } else {
        x.className = "elnav";
    }
}
  return (
    <div>
         <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
           <h1><div>
        <img src={image} alt="" height={"50px"} width={"190px"} />
      </div></h1>
           <nav id="elnav">
                        <ul id="links">
                            <li><a href="#inicio"  onclick="seleccionar(this)">Inicio</a></li>
                            <li><a href="#sobremi" onclick="seleccionar(this)">JavaScript</a></li>
                            <li><a href="#skills" onclick="seleccionar(this)">Node.js</a></li>
                            <li><a href="#React" onclick="seleccionar(this)">React</a></li>
                            <li><a href="#contacto" onclick="seleccionar(this)">Resumen</a></li>
                        </ul>
                    </nav>

                    <nav id="icono-nav" onClick={()=>responsiveMenu()}>
                        <i class="fa-solid fa-bars"></i>
                    </nav>

          <div  className="redes">
          <a href="https://wa.me/+541161263966" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/tomas-tinto-320a85236/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/TomasTinto1234" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/tomas_tinto/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"></a> 
          </div>
          </div>
        </header>
          <div  className="presentacion">
            <p className="bienvenida">Cursos de </p>
            <h2>
              <span className="javascript">JavaScript</span> - <span className="node">Node.js</span> - <span className="react">React</span></h2>
            <p className="descripcion"> Aprende a crear aplicaciones web con JavaScript, React y Node.js
            Este curso te proporcionará los conocimientos necesarios para
            desarrollar aplicaciones web utilizando JavaScript, React y Node.js.
            A lo largo del curso, aprenderás los fundamentos de JavaScript y
            cómo utilizar el framework de React para construir interfaces de
            usuario interactivas. También explorarás Node.js para desarrollar
            aplicaciones del lado del servidor y crear API RESTful. Al finalizar
            este curso, estarás preparado para construir aplicaciones web
            completas utilizando estas tecnologías populares.
            </p>
              <a href="#sobremi"> Empezar</a>
            </div>
      </div>
    </section>
    </div>
  )
}

export default NavBar