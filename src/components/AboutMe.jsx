import React from "react";
import image from "../img/angularjs.jpg";

const AboutMe = () => {
  return (
    <div className="contenedor-skills3">
      <section id="sobremi">
        <div >
          <img src={image} alt="" />
        </div>
        <div className="sobremi">
          <p className="titulo-seccion">Descripción general</p>
          {/* <h2>
            Este <span>Tomas Tinto</span>{" "}
          </h2> */}
          <h3>
            {/* Este curso te proporcionará los conocimientos necesarios para
            desarrollar aplicaciones web utilizando JavaScript, React y Node.js.
            A lo largo del curso, aprenderás los fundamentos de JavaScript y
            cómo utilizar el framework de React para construir interfaces de
            usuario interactivas. También explorarás Node.js para desarrollar
            aplicaciones del lado del servidor y crear API RESTful. Al finalizar
            este curso, estarás preparado para construir aplicaciones web
            completas utilizando estas tecnologías populares. */}
          </h3>
          {/* <p>
            I’m a developer with experience in building websites for small and
            medium sized businesses. Whether you’re trying to win work, list
            your services or even create a whole online store – I can help!
            Regular communication is really important to mee, so let’s keep in
            touch
          </p> */}
          <a
            href="https://www.canva.com/design/DAFhSzLta6U/841xjgSAsj-n_1TTneNayw/view?utm_content=DAFhSzLta6U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
