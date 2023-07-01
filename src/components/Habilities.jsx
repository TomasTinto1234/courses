import React from "react";
import image from "../img/node-js.png";

const Habilities = () => {
  return (
    <div className="contenedor-skills" id="skills">
      {/* <h3>Desarrollo del Lado del Servidor con Node.js </h3> */}
      <div>
        <div>
          <img src={image} alt="" height={"200px"} />
        </div>
        <section id="sobremi">
          <div className="sobremi">
            <p className="titulo-seccion">
              Desarrollo del Lado del Servidor con Node.js
            </p>
            <h2>
              El módulo "Desarrollo del Lado del Servidor con Node.js" es una
              parte esencial del curso "JavaScript React Node". En este módulo,
              aprenderás a utilizar Node.js, un entorno de ejecución del lado
              del servidor basado en JavaScript, para desarrollar aplicaciones
              web robustas y escalables.
            </h2>
            <h3>
              ¿Por qué aprender el desarrollo del lado del servidor con Node.js?
            </h3>
            <p>
              Node.js ha revolucionado el desarrollo web al permitirnos utilizar
              JavaScript tanto en el lado del cliente como en el lado del
              servidor. Al aprender el desarrollo del lado del servidor con
              Node.js, podrás construir aplicaciones web completas y
              sofisticadas utilizando un solo lenguaje de programación. Esto te
              permitirá compartir código entre el cliente y el servidor, lo que
              resulta en una mayor eficiencia y una curva de aprendizaje más
              suave.
            </p>

            <p className="titulo-seccion">Temas cubiertos en el módulo</p>
            <h4>
              Durante este módulo, exploraremos una variedad de temas clave en
              el desarrollo del lado del servidor con Node.js. Algunos de los
              temas cubiertos incluyen: Configuración del entorno Node.js:
              Aprenderás cómo configurar tu entorno de desarrollo para trabajar
              con Node.js. Descubrirás cómo instalar Node.js y npm (Node Package
              Manager) y cómo crear un nuevo proyecto Node.js. Módulos y
              paquetes: Explorarás el sistema de módulos en Node.js y aprenderás
              a importar y exportar funciones y variables entre diferentes
              archivos. También descubrirás cómo utilizar paquetes externos de
              npm para agregar funcionalidades adicionales a tus aplicaciones.
              Creación de servidores web: Aprenderás a crear un servidor web
              utilizando Node.js y el módulo HTTP incorporado. Descubrirás cómo
              manejar solicitudes HTTP, enviar respuestas y configurar rutas
              para diferentes endpoints. Persistencia de datos con bases de
              datos: Explorarás cómo interactuar con bases de datos en Node.js.
              Aprenderás a utilizar bibliotecas populares como Mongoose o
              Sequelize para conectarte y manipular bases de datos relacionales
              o NoSQL desde tu aplicación Node.js. Creación de API RESTful:
              Descubrirás cómo construir una API RESTful utilizando Node.js.
              Aprenderás a definir rutas y controladores para crear, leer,
              actualizar y eliminar recursos, lo que te permitirá construir
              aplicaciones web escalables y orientadas a servicios. Seguridad y
              autenticación: Aprenderás sobre las mejores prácticas de seguridad
              en el desarrollo del lado del servidor. Explorarás técnicas de
              autenticación y autorización, como el uso de tokens JWT (JSON Web
              Tokens), para proteger tus API y controlar el acceso de los
              usuarios. Despliegue y escalabilidad: Descubrirás cómo desplegar
              una aplicación Node.js en producción y cómo escalarla para manejar
              altas cargas de tráfico. Aprenderás sobre plataformas de
              alojamiento y herramientas populares como Docker y Kubernetes.
            </h4>

            <p className="titulo-seccion">
              Beneficios de dominar el desarrollo del lado del servidor con
              Node.js
            </p>
            <h4>
              El dominio del desarrollo del lado del servidor con Node.js te
              brinda muchas ventajas en el mundo del desarrollo web. Al poder
              programar tanto en el lado del cliente como en el lado del
              servidor con un solo lenguaje, podrás construir aplicaciones web
              completas de manera más eficiente y efectiva. Node.js es
              ampliamente utilizado en la industria del desarrollo web debido a
              su rendimiento y escalabilidad. Al tener experiencia en Node.js,
              te abrirás muchas puertas en términos de oportunidades laborales y
              proyectos emocionantes. Además, el ecosistema de Node.js es rico y
              vibrante, con una amplia gama de bibliotecas y herramientas
              disponibles para acelerar el proceso de desarrollo. Desde
              frameworks como Express hasta bibliotecas de autenticación como
              Passport, tendrás acceso a las herramientas adecuadas para
              construir aplicaciones sofisticadas y seguras. En resumen, el
              módulo "Desarrollo del Lado del Servidor con Node.js" te
              proporcionará las habilidades necesarias para crear aplicaciones
              web completas y escalables utilizando Node.js. Al dominar este
              módulo, estarás preparado para enfrentar desafíos en el desarrollo
              del lado del servidor y aprovechar las numerosas oportunidades
              profesionales que ofrece el mundo de Node.js. ¡Amplía tus
              capacidades de desarrollo web con Node.js y lleva tus aplicaciones
              al siguiente
            </h4>
            <a target="_blank">Fundamentos de Node.js</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Habilities;
