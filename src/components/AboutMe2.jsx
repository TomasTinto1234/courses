import React from "react";
import image from "../img/javascript.png";

const AboutMe = () => {
  return (
    <div className="contenedor-skills2">
        <div>
          <img src={image} alt="" height={"350px"} />
        </div>
      <section id="sobremi">
        <div className="sobremi">
          <p className="titulo-seccion">Fundamentos de JavaScript</p>
          <h2>
            El módulo "Fundamentos de JavaScript" es la base fundamental para
            comprender y dominar el lenguaje de programación JavaScript. Este
            módulo del curso "JavaScript React Node" te proporcionará los
            conocimientos esenciales que necesitas para comenzar a desarrollar
            aplicaciones web interactivas.
            {/* <span>Tomas Tinto</span>{" "} */}
          </h2>
          <h3>¿Por qué aprender los fundamentos de JavaScript?</h3>
          <p>
            JavaScript es uno de los lenguajes de programación más populares y
            ampliamente utilizado en el desarrollo web. Es un lenguaje de
            scripting que permite agregar interactividad y funcionalidad a las
            páginas web. Al comprender los fundamentos de JavaScript, podrás
            crear sitios web dinámicos, manipular elementos HTML, gestionar
            eventos, realizar validaciones de formularios y mucho más.
          </p>

          <p className="titulo-seccion">
            ¿Por qué aprender los fundamentos de JavaScript?
          </p>
          <h4>
            JavaScript es uno de los lenguajes de programación más populares y
            ampliamente utilizado en el desarrollo web. Es un lenguaje de
            scripting que permite agregar interactividad y funcionalidad a las
            páginas web. Al comprender los fundamentos de JavaScript, podrás
            crear sitios web dinámicos, manipular elementos HTML, gestionar
            eventos, realizar validaciones de formularios y mucho más.
          </h4>

          <p className="titulo-seccion">Fundamentos de JavaScript</p>
          <h4>
            Durante este módulo, exploraremos una variedad de temas clave en los
            fundamentos de JavaScript. Algunos de los temas cubiertos incluyen:
            Sintaxis y variables: Aprenderás la sintaxis básica de JavaScript y
            cómo declarar y utilizar variables para almacenar y manipular datos.
            Tipos de datos y operadores: Descubrirás los diferentes tipos de
            datos en JavaScript, como números, cadenas de texto, booleanos,
            matrices y objetos. También aprenderás sobre los operadores
            utilizados para realizar cálculos y manipulaciones en JavaScript.
            Estructuras de control: Explorarás las estructuras de control de
            JavaScript, como condicionales (if-else) y bucles (for, while), para
            controlar el flujo de ejecución de tu código. Funciones: Aprenderás
            a definir y utilizar funciones en JavaScript para organizar y
            reutilizar bloques de código. También descubrirás cómo pasar
            parámetros a las funciones y devolver valores. Objetos y prototipos:
            Comprenderás el concepto de objetos en JavaScript y cómo crear tus
            propios objetos utilizando prototipos. Esto te permitirá organizar y
            estructurar tu código de manera más eficiente. Manipulación del DOM:
            Descubrirás cómo acceder y manipular los elementos HTML de una
            página web utilizando JavaScript. Aprenderás a cambiar el contenido,
            los estilos y los atributos de los elementos para crear
            interacciones dinámicas con el usuario. Gestión de eventos:
            Aprenderás a manejar eventos como hacer clic en un botón, mover el
            mouse o enviar un formulario. Podrás capturar estos eventos y
            responder a ellos con acciones específicas en tu aplicación.
          </h4>
          <a target="_blank">Fundamentos de JavaScript</a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
